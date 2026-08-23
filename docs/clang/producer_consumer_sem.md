#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/mman.h>
#include <sys/wait.h>
#include <semaphore.h>

#define ITERATIONS 50000

typedef struct {
    int counter;
    sem_t mutex; // Semáforo POSIX para exclusão mútua
} SharedData;

int main(void) {
    // 1. Aloca a estrutura inteira na memória compartilhada mmap
    SharedData *shared = mmap(NULL, sizeof(SharedData),
                              PROT_READ | PROT_WRITE,
                              MAP_SHARED | MAP_ANONYMOUS, -1, 0);

    if (shared == MAP_FAILED) {
        perror("mmap falhou");
        exit(EXIT_FAILURE);
    }

    // 2. Inicializa o contador
    shared->counter = 0;

    // Inicializa o semáforo na memória compartilhada
    // pshared = 1: Compartilhado entre processos via fork
    // value = 1: Começa liberado (1 permissão de acesso simultâneo)
    if (sem_init(&(shared->mutex), 1, 1) < 0) {
        perror("sem_init falhou");
        munmap(shared, sizeof(SharedData));
        exit(EXIT_FAILURE);
    }

    printf("Memória compartilhada e semáforo inicializados.\n");

    // 3. Criação do processo filho
    pid_t pid = fork();

    if (pid < 0) {
        perror("fork falhou");
        sem_destroy(&(shared->mutex));
        munmap(shared, sizeof(SharedData));
        exit(EXIT_FAILURE);
    }

    if (pid == 0) {
        // --- CONTEXTO DO FILHO (Produtor / Incrementador) ---
        for (int i = 0; i < ITERATIONS; i++) {
            // Pede permissão para entrar na seção crítica
            sem_wait(&(shared->mutex));
            
            // --- INÍCIO DA SEÇÃO CRÍTICA ---
            shared->counter++;
            // --- FIM DA SEÇÃO CRÍTICA ---

            // Libera o semáforo para o próximo processo
            sem_post(&(shared->mutex));
        }
        _exit(EXIT_SUCCESS);
    } else {
        // --- CONTEXTO DO PAI (Consumidor / Incrementador) ---
        for (int i = 0; i < ITERATIONS; i++) {
            // Pede permissão
            sem_wait(&(shared->mutex));
            
            // --- SEÇÃO CRÍTICA ---
            shared->counter++;
            // --- FIM DA SEÇÃO CRÍTICA ---

            // Libera
            sem_post(&(shared->mutex));
        }
        
        // Aguarda o filho terminar
        wait(NULL);
    }

    // 4. Resultado final garantido
    printf("Valor final do contador com semáforo: %d (Esperado: %d)\n", 
           shared->counter, ITERATIONS * 2);

    // 5. Limpeza de recursos
    sem_destroy(&(shared->mutex));
    munmap(shared, sizeof(SharedData));

    return 0;
}
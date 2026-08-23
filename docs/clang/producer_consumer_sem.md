No nível anterior (1_shared_counter.c), descobrimos que dois processos alterando a mesma memória ao mesmo tempo geram uma condição de <br>
corrida (race condition), corrompendo o resultado final. Para resolver isso, entramos no mundo da sincronização de processos usando <br>
Semáforos POSIX.<br>

O Conceito: O Que é um Semáforo?
Inventado por Edsger Dijkstra, um semáforo é essencialmente uma variável de controle protegida pelo kernel que funciona como um "porteiro" <br>
ou um semáforo de trânsito para recursos compartilhados:<br>
    sem_wait() (Decrementa / Pára): Se o valor do semáforo for maior que 0, ele o decrementa e deixa o processo passar. Se o valor for 0,<br>
o processo é bloqueado (posto para dormir pelo kernel) até que outro processo libere o sinal.<br>
    sem_post() (Incrementa / Libera): Incrementa o valor do semáforo e acorda um processo que estivesse dormindo esperando por ele. <br>
No modelo Produtor-Consumidor, usamos dois ou mais semáforos para garantir duas regras de ouro:<br>
    Exclusão Mútua (Mutex): Garantir que apenas um processo mexa na memória compartilhada por vez.<br>
    Sinalização de Disponibilidade: Garantir que o Consumidor não tente ler um dado que ainda não foi produzido,<br>
e que o Produtor não sobrescreva um dado que ainda não foi consumido (buffer circular).<br>
O Código em C: Implementando com Semáforos Anônimos Compartilhados<br>
Assim como fizemos com o mmap, podemos colocar um semáforo POSIX diretamente dentro da memória compartilhada usando a função sem_init() com a <br>
flag pshared = 1 (indicando que ele é compartilhado entre múltiplos processos, e não apenas entre threads).

```c
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

```

# Compilação e Execução
Lembre-se da flag obrigatória -pthread para suportar primitivas de sincronização POSIX:

gcc -Wall -Wextra -pthread 2_producer_consumer_sem.c -o producer_consumer <br>
./producer_consumer <br>

```output
Memória compartilhada e semáforo inicializador.
Valor final do contador com semáforo: 100000 (Esperando: 1000000)

```
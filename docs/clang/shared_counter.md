# Shared_Counter (shared_counter.c)


O arquivo shared_counter.c é a porta de entrada para o mundo da comunicação entre processos. Antes de lidarmos com arquivos de sistema, filas complexas ou semáforos, precisamos entender o conceito mais elementar do IPC: como fazer dois processos independentes enxergarem exatamente o mesmo bloco de RAM.

O Problema Clássico do Isolamento de Processos


Por padrão, o kernel do sistema operacional (através da MMU) isola estritamente o espaço de memória de cada processo.

Se você cria uma variável int contador = 0; em um programa e faz um fork(), o kernel duplica o processo. O filho recebe uma cópia exata daquela memória.



Se o processo filho altera contador = 5, o processo pai continua enxergando contador = 0. Eles não compartilham o mesmo dado; eles têm cópias independentes em endereços virtuais diferentes.



A Solução: Memória Compartilhada Anônima (mmap + MAP_SHARED)



Para que o pai e o filho escrevam na mesma célula física de memória, usamos o mapeamento de memória virtual com a flag MAP_SHARED.



O truque da flag anônima (MAP_ANONYMOUS): Normalmente, o mmap exige que você abra um arquivo no disco para mapeá-lo. Porém, combinando MAP_ANONYMOUS com MAP_SHARED, dizemos ao kernel: "Crie um bloco de memória puramente na RAM, compartilhe-o entre os processos que vierem a nascer daqui para frente, e não precisa associar a nenhum arquivo em disco."



Anatomia da Implementação Mental



Quando construímos o shared_counter.c, o fluxo de execução segue estes passos rígidos:



Alocação Compartilhada: O processo pai chama mmap solicitando ao kernel um espaço do tamanho de um inteiro (sizeof(int)), configurado com permissões de leitura e escrita (PROT_READ | PROT_WRITE) e visibilidade compartilhada (MAP_SHARED | MAP_ANONYMOUS).



O Fork: O pai inicializa o contador compartilhado com o valor 0 e, em seguida, dispara o fork().



Concorrência Natural: O kernel cria o processo filho. Agora, tanto o pai quanto o filho possuem um ponteiro que aponta exatamente para o mesmo endereço físico de memória alocado no passo 1.



Modificação e Conflito: Ambos entram em um loop onde leem o valor atual, incrementam e salvam de volta. É aqui que você percebe a primeira grande lição de sistemas: sem sincronização, os processos atropelam um ao outro (condições de corrida), fazendo com que o incremento final do contador venha errado ou inconsistente.



Este primeiro nível expõe a crua realidade da concorrência de hardware: a memória é compartilhada, mas o tempo de CPU não é sincronizado.



Quer que eu escreva o código-fonte comentado em C puro para este nível, mostrando a implementação exata do mmap anônimo e o efeito da concorrência sem travas?

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/mman.h>
#include <sys/wait.h>

#define ITERATIONS 50000

int main(void) {
   // 1. Aloca memória compartilhada entre processos usando mmap
   // PROT_READ | PROT_WRITE: A memória pode ser lida e escrita.
   // MAP_SHARED | MAP_ANONYMOUS: Compartilhada entre processos (shared) 
   // e não associada a nenhum arquivo em disco (anonymous).
   int *counter = mmap(NULL, sizeof(int), 
                       PROT_READ | PROT_WRITE, 
                       MAP_SHARED | MAP_ANONYMOUS, -1, 0);
   if (counter == MAP_FAILED) {
       perror("mmap falhou");
       exit(EXIT_FAILURE);
   }

   // Inicializa o contador compartilhado
   *counter = 0;
   printf("Valor inicial do contador na RAM compartilhada: %d\n", *counter);

   // 2. Criação do processo filho

   pid_t pid = fork();
   if (pid < 0) {
       perror("fork falhou");
       munmap(counter, sizeof(int));
       exit(EXIT_FAILURE);
   }

   if (pid == 0) {
       // --- CONTEXTO DO FILHO ---
       // O filho incrementa o contador ITERATIONS vezes
       for (int i = 0; i < ITERATIONS; i++) {
           (*counter)++;
       }
       printf("[Filho] Terminou seus incrementos.\n");
       _exit(EXIT_SUCCESS);
   } else {
       // --- CONTEXTO DO PAI ---
       // O pai também incrementa o contador ITERATIONS vezes concorrentemente
       for (int i = 0; i < ITERATIONS; i++) {
           (*counter)++;
       }
     
       // Aguarda o processo filho terminar a execução
       wait(NULL); // Sincronização com o processo filho
       printf("[Pai] O filho encerrou.\n");
   }


   // 3. Resultado final
   // Esperado idealmente: ITERATIONS * 2 (100.000)
   // O que acontece na prática: Um valor menor devido à condição de corrida (race condition)
   printf("Valor final do contador: %d (Esperado: %d)\n", *counter, ITERATIONS * 2);


   // 4. Limpeza da memória mapeada
   munmap(counter, sizeof(int));


   return 0;

}



```


## Compilação e Execução
gcc -Wall -Wextra shared_counter.c -o shared_counter <br>
./shared_counter <br>


```output
Valor inicial do contador na RAM compartilhada: 0
[Filho] Terminou seus incrementos.
[Pai] O filho encerrou. 
Valor final do contador: 63968 (Esparado: 100000)
```

O resultado obtido foi de 63968, esse número varia de acordo com o processador.<br>
Básicamente, o processo de incremento necessita ler, copiar e escrever o valor.<br>
Se durante o processo de leitura, dois processos ler a mesma cópia, quando escreverem no <br>
mesmo local, eles vão sobrescrever o mesmo dado.<br>
\# Shared\_Counter



O arquivo shared\_counter.c é a porta de entrada para o mundo da comunicação entre processos. Antes de lidarmos com arquivos de sistema, filas complexas ou semáforos, precisamos entender o conceito mais elementar do IPC: como fazer dois processos independentes enxergarem exatamente o mesmo bloco de RAM.

O Problema Clássico do Isolamento de Processos



Por padrão, o kernel do sistema operacional (através da MMU) isola estritamente o espaço de memória de cada processo.



&#x20;   Se você cria uma variável int contador = 0; em um programa e faz um fork(), o kernel duplica o processo. O filho recebe uma cópia exata daquela memória.



&#x20;   Se o processo filho altera contador = 5, o processo pai continua enxergando contador = 0. Eles não compartilham o mesmo dado; eles têm cópias independentes em endereços virtuais diferentes.



A Solução: Memória Compartilhada Anônima (mmap + MAP\_SHARED)



Para que o pai e o filho escrevam na mesma célula física de memória, usamos o mapeamento de memória virtual com a flag MAP\_SHARED.



&#x20;   O truque da flag anônima (MAP\_ANONYMOUS): Normalmente, o mmap exige que você abra um arquivo no disco para mapeá-lo. Porém, combinando MAP\_ANONYMOUS com MAP\_SHARED, dizemos ao kernel: "Crie um bloco de memória puramente na RAM, compartilhe-o entre os processos que vierem a nascer daqui para frente, e não precisa associar a nenhum arquivo em disco."



Anatomia da Implementação Mental



Quando construímos o 1\_shared\_counter.c, o fluxo de execução segue estes passos rígidos:



&#x20;   Alocação Compartilhada: O processo pai chama mmap solicitando ao kernel um espaço do tamanho de um inteiro (sizeof(int)), configurado com permissões de leitura e escrita (PROT\_READ | PROT\_WRITE) e visibilidade compartilhada (MAP\_SHARED | MAP\_ANONYMOUS).



&#x20;   O Fork: O pai inicializa o contador compartilhado com o valor 0 e, em seguida, dispara o fork().



&#x20;   Concorrência Natural: O kernel cria o processo filho. Agora, tanto o pai quanto o filho possuem um ponteiro que aponta exatamente para o mesmo endereço físico de memória alocado no passo 1.



&#x20;   Modificação e Conflito: Ambos entram em um loop onde leem o valor atual, incrementam e salvam de volta. É aqui que você percebe a primeira grande lição de sistemas: sem sincronização, os processos atropelam um ao outro (condições de corrida), fazendo com que o incremento final do contador venha errado ou inconsistente.



Este primeiro nível expõe a crua realidade da concorrência de hardware: a memória é compartilhada, mas o tempo de CPU não é sincronizado.



Quer que eu escreva o código-fonte comentado em C puro para este nível, mostrando a implementação exata do mmap anônimo e o efeito da concorrência sem travas?

```c

\#include <stdio.h>

\#include <stdlib.h>

\#include <unistd.h>

\#include <sys/mman.h>

\#include <sys/wait.h>



\#define ITERATIONS 50000



int main(void) {

&#x20;   // 1. Aloca memória compartilhada entre processos usando mmap

&#x20;   // PROT\_READ | PROT\_WRITE: A memória pode ser lida e escrita.

&#x20;   // MAP\_SHARED | MAP\_ANONYMOUS: Compartilhada entre processos (shared) 

&#x20;   // e não associada a nenhum arquivo em disco (anonymous).

&#x20;   int \*counter = mmap(NULL, sizeof(int), 

&#x20;                       PROT\_READ | PROT\_WRITE, 

&#x20;                       MAP\_SHARED | MAP\_ANONYMOUS, -1, 0);



&#x20;   if (counter == MAP\_FAILED) {

&#x20;       perror("mmap falhou");

&#x20;       exit(EXIT\_FAILURE);

&#x20;   }



&#x20;   // Inicializa o contador compartilhado

&#x20;   \*counter = 0;



&#x20;   printf("Valor inicial do contador na RAM compartilhada: %d\\n", \*counter);



&#x20;   // 2. Criação do processo filho

&#x20;   pid\_t pid = fork();



&#x20;   if (pid < 0) {

&#x20;       perror("fork falhou");

&#x20;       munmap(counter, sizeof(int));

&#x20;       exit(EXIT\_FAILURE);

&#x20;   }



&#x20;   if (pid == 0) {

&#x20;       // --- CONTEXTO DO FILHO ---

&#x20;       // O filho incrementa o contador ITERATIONS vezes

&#x20;       for (int i = 0; i < ITERATIONS; i++) {

&#x20;           (\*counter)++;

&#x20;       }

&#x20;       printf("\[Filho] Terminou seus incrementos.\\n");

&#x20;       \_exit(EXIT\_SUCCESS);

&#x20;   } else {

&#x20;       // --- CONTEXTO DO PAI ---

&#x20;       // O pai também incrementa o contador ITERATIONS vezes concorrentemente

&#x20;       for (int i = 0; i < ITERATIONS; i++) {

&#x20;           (\*counter)++;

&#x20;       }

&#x20;       

&#x20;       // Aguarda o processo filho terminar a execução

&#x20;       wait(NULL);

&#x20;       printf("\[Pai] O filho encerrou.\\n");

&#x20;   }



&#x20;   // 3. Resultado final

&#x20;   // Esperado idealmente: ITERATIONS \* 2 (100.000)

&#x20;   // O que acontece na prática: Um valor menor devido à condição de corrida (race condition)

&#x20;   printf("Valor final do contador: %d (Esperado: %d)\\n", \*counter, ITERATIONS \* 2);



&#x20;   // 4. Limpeza da memória mapeada

&#x20;   munmap(counter, sizeof(int));



&#x20;   return 0;

}



```



\## Compilação e Execução

gcc -Wall -Wextra 1\_shared\_counter.c -o shared\_counter

./shared\_counter


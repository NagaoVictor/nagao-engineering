No arquivo shared\_counter.c, descobrimos que dois processos alterando a mesma memória ao mesmo tempo <br>

geram uma condição de corrida (race condition), corrompendo o resultado final.



Para resolver isso, entramos no mundo da sincronização de processos usando Semáforos POSIX. <br>



\## O Conceito: O Que é um Semáforo?



Inventado por Edsger Dijkstra, um semáforo é essencialmente uma variável de controle protegida pelo kernel que funciona como um "porteiro" ou um semáforo de trânsito para recursos compartilhados:



&#x20;   sem\_wait() (Decrementa / Pára): Se o valor do semáforo for maior que 0, ele o decrementa e deixa o processo passar. Se o valor for 0, o processo é bloqueado (posto para dormir pelo kernel) até que outro processo libere o sinal.



&#x20;   sem\_post() (Incrementa / Libera): Incrementa o valor do semáforo e acorda um processo que estivesse dormindo esperando por ele.



No modelo Produtor-Consumidor, usamos dois ou mais semáforos para garantir duas regras de ouro:



&#x20;   Exclusão Mútua (Mutex): Garantir que apenas um processo mexa na memória compartilhada por vez.



&#x20;   Sinalização de Disponibilidade: Garantir que o Consumidor não tente ler um dado que ainda não foi produzido, e que o Produtor não sobrescreva um dado que ainda não foi consumido (buffer circular).



O Código em C: Implementando com Semáforos Anônimos Compartilhados



Assim como fizemos com o mmap, podemos colocar um semáforo POSIX diretamente dentro da memória compartilhada usando a função sem\_init() com a flag pshared = 1 (indicando que ele é compartilhado entre múltiplos processos, e não apenas entre threads).





```c



\#include stdio.h

\#include stdlib.h

\#include unistd.h

\#include sysmman.h

\#include syswait.h

\#include semaphore.h



\#define ITERATIONS 50000



typedef struct {

&#x20;   int counter;

&#x20;   sem\_t mutex;  Semáforo POSIX para exclusão mútua

} SharedData;



int main(void) {

&#x20;    //1. Aloca a estrutura inteira na memória compartilhada mmap

&#x20;   SharedData shared = mmap(NULL, sizeof(SharedData),

&#x20;                             PROT\_READ  PROT\_WRITE,

&#x20;                             MAP\_SHARED  MAP\_ANONYMOUS, -1, 0);



&#x20;   if (shared == MAP\_FAILED) {

&#x20;       perror(mmap falhou);

&#x20;       exit(EXIT\_FAILURE);

&#x20;   }



&#x20;    //2. Inicializa o contador

&#x20;   shared-counter = 0;



&#x20;    Inicializa o semáforo na memória compartilhada

&#x20;    pshared = 1 Compartilhado entre processos via fork

&#x20;    value = 1 Começa liberado (1 permissão de acesso simultâneo)

&#x20;   if (sem\_init(\&(shared-mutex), 1, 1)  0) {

&#x20;       perror(sem\_init falhou);

&#x20;       munmap(shared, sizeof(SharedData));

&#x20;       exit(EXIT\_FAILURE);

&#x20;   }



&#x20;   printf(Memória compartilhada e semáforo inicializados.n);



&#x20;    //3. Criação do processo filho

&#x20;   pid\_t pid = fork();



&#x20;   if (pid  0) {

&#x20;       perror(fork falhou);

&#x20;       sem\_destroy(\&(shared-mutex));

&#x20;       munmap(shared, sizeof(SharedData));

&#x20;       exit(EXIT\_FAILURE);

&#x20;   }



&#x20;   if (pid == 0) {

&#x20;        --- CONTEXTO DO FILHO (Produtor  Incrementador) ---

&#x20;       for (int i = 0; i  ITERATIONS; i++) {

&#x20;            Pede permissão para entrar na seção crítica

&#x20;           sem\_wait(\&(shared-mutex));

&#x20;

&#x20;            --- INÍCIO DA SEÇÃO CRÍTICA ---

&#x20;           shared-counter++;

&#x20;            --- FIM DA SEÇÃO CRÍTICA ---



&#x20;            Libera o semáforo para o próximo processo

&#x20;           sem\_post(\&(shared-mutex));

&#x20;       }

&#x20;       \_exit(EXIT\_SUCCESS);

&#x20;   } else {

&#x20;        --- CONTEXTO DO PAI (Consumidor  Incrementador) ---

&#x20;       for (int i = 0; i  ITERATIONS; i++) {

&#x20;            Pede permissão

&#x20;           sem\_wait(\&(shared-mutex));

&#x20;

&#x20;            --- SEÇÃO CRÍTICA ---

&#x20;           shared-counter++;

&#x20;            --- FIM DA SEÇÃO CRÍTICA ---



&#x20;            Libera

&#x20;           sem\_post(\&(shared-mutex));

&#x20;       }

&#x20;

&#x20;        Aguarda o filho terminar

&#x20;       wait(NULL);

&#x20;   }



&#x20;   // 4. Resultado final garantido

&#x20;   printf(Valor final do contador com semáforo %d (Esperado %d)n,

&#x20;          shared-counter, ITERATIONS  2);



&#x20;   // 5. Limpeza de recursos

&#x20;   sem\_destroy(\&(shared-mutex));

&#x20;   munmap(shared, sizeof(SharedData));



&#x20;   return 0;

}



```



\## Compilação e Execução

gcc -Wall -Wextra -pthread 2\_producer\_consumer\_sem.c -o producer\_consumer

./producer\_consumer





```output







```


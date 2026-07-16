\# Exemplo de Código em C



\## O que é?



A linguagem C é muito utilizada em sistemas embarcados, sistemas operacionais e desenvolvimento de baixo nível.



Um programa em C normalmente possui:



\- Entrada de dados

\- Processamento

\- Saída de resultados



\---



\## Exemplo



Programa que recebe dois números e calcula a soma.



```c

\#include <stdio.h>



int main()

{

&#x20;   int a;

&#x20;   int b;

&#x20;   int resultado;



&#x20;   printf("Digite o primeiro numero: ");

&#x20;   scanf("%d", \&a);



&#x20;   printf("Digite o segundo numero: ");

&#x20;   scanf("%d", \&b);



&#x20;   resultado = a + b;



&#x20;   printf("Resultado: %d\\n", resultado);



&#x20;   return 0;

}


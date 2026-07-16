# Exemplo de Código em C

## O que é?

A linguagem C é muito utilizada em sistemas embarcados, sistemas operacionais e desenvolvimento de baixo nível.

Um programa em C normalmente possui:

- Entrada de dados
- Processamento
- Saída de resultados

---

## Exemplo

Programa que recebe dois números e calcula a soma.

```c
#include <stdio.h>

int main()
{
    int a;
    int b;
    int resultado;

    printf("Digite o primeiro numero: ");
    scanf("%d", &a);

    printf("Digite o segundo numero: ");
    scanf("%d", &b);

    resultado = a + b;

    printf("Resultado: %d\n", resultado);

    return 0;
}
```
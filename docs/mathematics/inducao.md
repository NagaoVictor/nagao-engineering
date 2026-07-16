# Indução Matemática

## O que é?

A indução matemática é um método de demonstração usado para provar que uma afirmação é verdadeira para **todos os números naturais**.

Em vez de testar infinitos casos, provamos que a afirmação funciona para o primeiro número e mostramos que, se ela funciona para um número qualquer, também funcionará para o próximo.

---

## Exemplo

Prove que a soma dos primeiros números naturais é dada por:

```text
1 + 2 + 3 + ... + n = n(n + 1) / 2
```

Vamos verificar se essa fórmula vale para todos os valores de `n`.

---

## Como resolver

Uma prova por indução possui duas etapas.

### Passo 1 — Caso Base

Verificamos se a fórmula funciona para o primeiro número natural.

Para `n = 1`:

```text
Lado esquerdo:

1

Lado direito:

1(1 + 1) / 2

2 / 2 = 1
```

Os dois lados são iguais.

✔ A fórmula funciona para o primeiro caso.

---

### Passo 2 — Hipótese de Indução

Agora assumimos que a fórmula funciona para um número qualquer `n`.

Ou seja, consideramos verdadeira a seguinte igualdade:

```text
1 + 2 + ... + n = n(n + 1) / 2
```

Essa é apenas uma hipótese que será usada para provar o próximo passo.

---

### Passo 3 — Passo Indutivo

Precisamos mostrar que, se a fórmula funciona para `n`, então também funciona para `n + 1`.

Começamos somando o próximo número:

```text
1 + 2 + ... + n + (n + 1)
```

Usando a hipótese de indução:

```text
n(n + 1) / 2 + (n + 1)
```

Colocando `(n + 1)` em evidência:

```text
(n + 1) [ n/2 + 1 ]
```

Escrevendo tudo sobre o mesmo denominador:

```text
(n + 1)(n + 2) / 2
```

Essa é exatamente a fórmula para `n + 1`.

✔ Portanto, se ela vale para `n`, também vale para `n + 1`.

---

## O que aprender com isso

A indução funciona como uma sequência de dominós.

```text
□ □ □ □ □ □ □ □

Empurre o primeiro.

Se cada peça derruba a próxima,
todas cairão.
```

Na matemática:

- O caso base derruba o primeiro dominó.
- O passo indutivo garante que cada dominó derruba o seguinte.

Assim, a propriedade vale para todos os números naturais.

---

## Onde aparece na computação?

- Correção de algoritmos
- Recursão
- Estruturas de dados (árvores)
- Complexidade de algoritmos
- Programação dinâmica
- Teoria da Computação
- Demonstrações matemáticas

---

## Resumo

| Conceito | Ideia |
|----------|-------|
| **Caso Base** | Verifica o primeiro valor. |
| **Hipótese de Indução** | Assume que a afirmação vale para um número qualquer. |
| **Passo Indutivo** | Mostra que, se vale para `n`, também vale para `n + 1`. |
| **Conclusão** | A afirmação vale para todos os números naturais. |

---

## Modelo mental

Imagine uma fileira infinita de dominós.

```text
□ → □ → □ → □ → □ → □ → ...
```

Você precisa provar apenas duas coisas:

1. O primeiro dominó cai.
2. Sempre que um dominó cai, ele derruba o próximo.

Se ambas forem verdadeiras, todos os dominós cairão.

Da mesma forma, a indução permite provar uma propriedade para uma quantidade infinita de números sem precisar verificar um por um.
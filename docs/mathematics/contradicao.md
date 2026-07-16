# Prova por Contradição

## O que é?

A prova por contradição é um método de demonstração em que assumimos que uma afirmação é falsa e verificamos as consequências dessa suposição.

Se essa hipótese leva a uma impossibilidade ou a uma inconsistência lógica, concluímos que ela não pode ser verdadeira.

Assim, a afirmação original deve ser verdadeira.

---

## Exemplo

Prove que:

> **Não existe um maior número natural.**

---

## Como resolver

### Passo 1 — Suponha o contrário

Em vez de tentar provar diretamente a afirmação, assumimos que ela é falsa.

Ou seja:

```text
Existe um maior número natural.
```

Chamemos esse número de:

```text
N
```

---

### Passo 2 — Analise as consequências

Se `N` realmente é o maior número natural, então nenhum número pode ser maior que ele.

Agora construa um novo número:

```text
N + 1
```

Claramente:

```text
N + 1 > N
```

Mas isso contradiz a hipótese de que `N` era o maior número natural.

Temos duas afirmações incompatíveis:

```text
N é o maior número natural.

N + 1 é maior que N.
```

As duas não podem ser verdadeiras ao mesmo tempo.

---

### Passo 3 — Conclusão

Como a hipótese levou a uma contradição, ela deve ser falsa.

Logo:

```text
Não existe um maior número natural.
```

✔ A afirmação original está provada.

---

## O que aprender com isso

Uma prova por contradição não demonstra diretamente que algo é verdadeiro.

Ela mostra que **a única alternativa possível é impossível**.

Sempre seguimos a mesma estratégia:

1. Suponha que a afirmação seja falsa.
2. Desenvolva essa hipótese.
3. Encontre uma contradição.
4. Conclua que a hipótese inicial era falsa.

---

## Onde aparece na computação?

- Demonstrações matemáticas
- Teoria dos algoritmos
- Correção de algoritmos
- Criptografia
- Teoria da Computação
- Inteligência Artificial
- Lógica formal

---

## Resumo

| Conceito | Ideia |
|----------|-------|
| **Hipótese contrária** | Assumir que a afirmação é falsa. |
| **Contradição** | Encontrar uma impossibilidade lógica. |
| **Conclusão** | A hipótese falsa é descartada, restando apenas a afirmação original. |

---

## Modelo mental

Imagine uma investigação policial.

Existem apenas duas possibilidades:

```text
Afirmação é verdadeira

ou

Afirmação é falsa
```

Você decide investigar apenas a segunda opção.

Durante a investigação, encontra uma prova impossível, como:

```text
2 = 3
```

ou

```text
Existe um número maior que o maior número.
```

Como essa hipótese levou a um absurdo, ela é descartada.

Resta apenas a outra possibilidade:

> A afirmação original é verdadeira.

Essa é a essência da prova por contradição: provar algo mostrando que negar sua verdade leva inevitavelmente a um absurdo.
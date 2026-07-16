\# Lógica Matemática



\## O que é?



Lógica matemática é o estudo de como construir raciocínios válidos. Ela fornece regras para determinar quando uma conclusão realmente decorre das premissas.



Na computação, praticamente todo algoritmo, condição (`if`), laço (`while`) e circuito digital utiliza lógica.



\---



\## Exemplo



Considere a afirmação:



> Se um número é múltiplo de 4, então ele é par.



Agora analise os seguintes números:



\- 8

\- 12

\- 10



\*\*Pergunta:\*\* Qual deles contradiz a afirmação?



\---



\## Como resolver



Primeiro identificamos duas proposições.



\*\*P:\*\* O número é múltiplo de 4.



\*\*Q:\*\* O número é par.



A afirmação possui a forma lógica:



```text

P → Q

```



Agora verificamos cada número.



\### Número 8



```text

P = Verdadeiro

Q = Verdadeiro



P → Q = Verdadeiro

```



O número satisfaz a afirmação.



\---



\### Número 12



```text

P = Verdadeiro

Q = Verdadeiro



P → Q = Verdadeiro

```



Também satisfaz a afirmação.



\---



\### Número 10



```text

P = Falso

Q = Verdadeiro



P → Q = Verdadeiro

```



Mesmo não sendo múltiplo de 4, ele \*\*não contradiz\*\* a afirmação, pois ela só faz uma promessa sobre números que são múltiplos de 4.



\---



Agora imagine a afirmação:



> Se um número é múltiplo de 4, então ele é ímpar.



Considere o número 6.



```text

P = Falso

Q = Falso



P → Q = Verdadeiro

```



Novamente, não existe contradição.



A única forma de tornar uma implicação falsa seria encontrar um número que fosse:



```text

Múltiplo de 4

&#x20;       E

Não fosse par

```



Ou seja:



```text

P = Verdadeiro

Q = Falso



P → Q = Falso

```



Como esse número não existe, a afirmação continua verdadeira.



\---



\## O que aprender com isso



Uma implicação (`P → Q`) \*\*só é falsa\*\* quando:



\- A hipótese é verdadeira.

\- A conclusão é falsa.



Todos os demais casos são considerados verdadeiros.



Essa é a base de praticamente todas as demonstrações matemáticas.



\---



\## Onde aparece na computação?



\- Condições (`if`)

\- Laços (`while`)

\- Validação de dados

\- Circuitos digitais

\- Demonstrações de algoritmos

\- Verificação formal de software

\- Inteligência Artificial

\- Bancos de dados



\---



\## Resumo



| Conceito | Ideia |

|----------|-------|

| \*\*Proposição\*\* | Uma afirmação que pode ser verdadeira ou falsa. |

| \*\*Hipótese (P)\*\* | A condição inicial da afirmação. |

| \*\*Conclusão (Q)\*\* | O resultado esperado caso a hipótese seja verdadeira. |

| \*\*Implicação (P → Q)\*\* | "Se P acontecer, então Q deve acontecer." |

| \*\*Contradição\*\* | Encontrar um caso onde P é verdadeiro e Q é falso. |



\---



> \*\*Modelo mental\*\*

>

> Não tente provar que uma afirmação funciona para todos os casos.

>

> Procure um único caso onde a hipótese seja verdadeira e a conclusão seja falsa.

>

> Se esse caso não existir, a implicação permanece válida.


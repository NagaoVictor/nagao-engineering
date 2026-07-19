# Sintáxe

## Binários

- Conjunção (∧)
- Disjunção (∨)
- Condicional (→)
- Bicondicional (↔)
- NAND (↑)
- NOR (↓)
- XOR (⊕)

| p | q | ¬p | ¬q | p ∧ q | p ∨ q | p → q | p ↔ q | p ⊕ q | p ↑ q | p ↓ q |  T  |  ⊥  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  ---  |  ---  |
|  V  |  V  |  F  |  F  |  V  |  V  |  V  |  V  |  F  |  F  |  F  |  V  |  F  |
|  V  |  F  |  F  |  V  |  F  |  V  |  F  |  F  |  V  |  V  |  F  |  V  |  F  |
|  F  |  V  |  V  |  F  |  F  |  V  |  V  |  F  |  V  |  V  |  F  |  V  |  F  |
|  F  |  F  |  V  |  V  |  F  |  F  |  V  |  V  |  F  |  V  |  V  |  V  |  F  |

| Grupo | Símbolos |
|--------|----------|
| Variáveis Proposicionais | `p`, `q`, `r`, `s`, `t`, ... |
| Constantes Lógicas | `⊤`, `⊥` |
| Conectivos Lógicos | `¬`, `∧`, `∨`, `→`, `↔`, `⊕`, `↑`, `↓` |
| Delimitadores | `(`, `)` |
| Metassímbolos* | `A`, `B`, `C`, `...` |

## Regra de Formação
As **regras de formação** especificam como os símbolos do alfabeto podem ser combinados para construir fórmulas da linguagem. Elas definem, de maneira recursiva, o conjunto de todas as expressões sintaticamente válidas da lógica proposicional.

Sem essas regras, o alfabeto seria apenas um conjunto de símbolos isolados. São elas que transformam símbolos em fórmulas.

- Definir quais expressões pertencem à linguagem.
- Impedir construções sintaticamente inválidas.
- Permitir a construção recursiva de fórmulas cada vez mais complexas.

Ex: (A ∧ B), (A ∨ B), (A → B) ...


## Fórmula Bem Formada (WFF)
Uma **Fórmula Bem Formada** (*Well-Formed Formula* ou **WFF**) é toda expressão que obedece às regras sintáticas da linguagem lógica. Em outras palavras, uma WFF é uma expressão construída corretamente a partir do alfabeto formal e das regras de formação.

A sintaxe não verifica se uma fórmula é verdadeira ou falsa; ela verifica apenas se a expressão possui uma estrutura válida.

- utiliza apenas símbolos do alfabeto formal; <br>
- respeita a aridade dos operadores; <br> 
- segue as regras de formação; <br>
- possui delimitadores corretamente balanceados; <br>
- pode ser construída recursivamente a partir das fórmulas atômicas. <br>

Ex: ((p ∧ q) → r), ((¬p ∨ q) ↔ (r ∧ s)), ... <br>
Exemplos do que não é: ∧ p q <br>

## Árvore Sintática
Uma **árvore sintática** (*Syntax Tree* ou *Parse Tree*) é uma representação hierárquica da estrutura de uma fórmula lógica. Ela mostra exatamente como a expressão foi construída a partir das regras de formação, evidenciando a relação entre operadores e operandos.

A árvore representa a **estrutura sintática** da fórmula, independentemente de seu significado ou valor lógico.

- visualizar a estrutura da fórmula;
- identificar o operador principal;
- localizar subfórmulas;
- determinar o escopo dos operadores;
- facilitar provas por indução estrutural;
- servir de base para algoritmos de análise sintática.

```text
((p ∧ q) → r)
```

```text
        →
      /   \
     ∧     r
   /   \
  p     q
```

## Subfórmulas

Uma **subfórmula** é qualquer fórmula que aparece como parte da estrutura de outra fórmula. Em outras palavras, toda expressão lógica pode ser decomposta em fórmulas menores, e cada uma dessas partes é denominada subfórmula.

As subfórmulas descrevem a estrutura interna de uma fórmula e constituem um dos conceitos fundamentais da sintaxe, pois permitem analisar, decompor e provar propriedades sobre expressões lógicas.

- Toda fórmula atômica possui apenas ela mesma como subfórmula.
- A negação possui como subfórmulas ela própria e a fórmula negada.
- Uma fórmula binária possui como subfórmulas ela própria e todas as subfórmulas de seus operandos.

```text
((p ∧ q) → (¬r ∨ s))
```

| p | q | r | s | p ∧ q | ¬r | ¬r ∨ s | (p ∧ q) → (¬r ∨ s) |
|---|---|---|---|-------|----|--------|--------------------|
| T | T | T | T | T | F | T | T |


## Profundidade e Comprimento

A profundidade e o comprimento são medidas estruturais utilizadas para descrever a complexidade sintática de uma fórmula. Enquanto o comprimento mede seu tamanho, a profundidade mede o número de níveis de construção necessários para obtê-la.

Essas medidas dependem apenas da estrutura da fórmula, não de seu significado ou valor lógico.

```text
((¬p ∨ q) ↔ (r ∧ s))
```
```text
              ↔
           /      \
         ∨          ∧
       /   \      /   \
      ¬     q    r     s
      │
      p
```
```text
0 → ↔

1 → ∨ , ∧

2 → ¬ , q , r , s

3 → p
```
Profundidade = **3**

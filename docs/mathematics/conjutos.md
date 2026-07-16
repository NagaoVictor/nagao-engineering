# Teoria dos Conjuntos

## O que é?

A Teoria dos Conjuntos é o estudo de coleções de elementos.

Na matemática, praticamente tudo pode ser representado como um conjunto: números, letras, pessoas, arquivos, usuários, sensores, processos e até outras estruturas matemáticas.

Na computação, conjuntos aparecem em bancos de dados, estruturas de dados, programação, inteligência artificial e análise de informações.

---

## Exemplo

Imagine um sistema de uma empresa.

Funcionários do setor de Engenharia:

```text
E = {Ana, Bruno, Carlos, Daniel}
```

Funcionários que sabem Python:

```text
P = {Bruno, Carlos, Fernanda}
```

Responda:

1. Quem trabalha na Engenharia **e** sabe Python?
2. Quem está na Engenharia **ou** sabe Python?
3. Quem trabalha na Engenharia, mas **não** sabe Python?

---

## Como resolver

### 1. Interseção (∩)

A interseção representa os elementos presentes em **ambos** os conjuntos.

```text
E ∩ P
```

Comparando os conjuntos:

```text
E = {Ana, Bruno, Carlos, Daniel}

P = {Bruno, Carlos, Fernanda}
```

Os nomes que aparecem nos dois são:

```text
E ∩ P = {Bruno, Carlos}
```

São os engenheiros que sabem Python.

---

### 2. União (∪)

A união reúne todos os elementos, sem repetir.

```text
E ∪ P
```

Resultado:

```text
{Ana, Bruno, Carlos, Daniel, Fernanda}
```

Representa todas as pessoas que pertencem a pelo menos um dos grupos.

---

### 3. Diferença (−)

Agora queremos apenas quem está na Engenharia.

```text
E - P
```

Retiramos de Engenharia todos os que aparecem em Python.

```text
E = {Ana, Bruno, Carlos, Daniel}

Retirando Bruno e Carlos

Resultado:

{Ana, Daniel}
```

São os funcionários da Engenharia que ainda não sabem Python.

---

## O que aprender com isso

Conjuntos permitem organizar informações de forma extremamente simples.

Existem quatro operações fundamentais.

| Operação | Símbolo | Pergunta |
|----------|:-------:|----------|
| União | ∪ | Quem está em pelo menos um dos grupos? |
| Interseção | ∩ | Quem pertence aos dois grupos? |
| Diferença | − | Quem está em um grupo, mas não no outro? |
| Subconjunto | ⊆ | Um conjunto está completamente contido em outro? |

---

## Onde aparece na computação?

- Bancos de dados (`JOIN`, `INTERSECT`, `UNION`)
- Estruturas de dados (`Set`)
- Sistemas de permissões
- Inteligência Artificial
- Machine Learning
- Busca de documentos
- Sistemas distribuídos
- Teoria dos Grafos

---

## Resumo

| Conceito | Ideia |
|----------|-------|
| **Conjunto** | Coleção de elementos. |
| **Elemento (∈)** | Objeto pertencente ao conjunto. |
| **União (∪)** | Junta os elementos dos conjuntos. |
| **Interseção (∩)** | Mantém apenas os elementos comuns. |
| **Diferença (−)** | Remove elementos presentes em outro conjunto. |
| **Subconjunto (⊆)** | Todos os elementos de um conjunto pertencem ao outro. |

---

> **Modelo mental**
>
> Pense em um conjunto como uma lista onde a única pergunta importante é:
>
> **"Este elemento pertence ou não pertence?"**
>
> Depois disso, basta combinar conjuntos usando união, interseção e diferença para responder praticamente qualquer pergunta sobre grupos de elementos.
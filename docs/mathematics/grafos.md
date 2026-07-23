# Grafo

```mermaid
graph LR
    A((A))
    B((B))
    C((C))
    D((D))

    A --- B
    A --- C
    B --- D
    C --- D
```

# Vértice

```mermaid
graph LR
    A((A))
```

# Aresta

```mermaid
graph LR
    A((A))
    B((B))

    A --- B
```

# Grafo Direcionado (Digrafo)

```mermaid
graph LR
    A((A))
    B((B))
    C((C))
    D((D))

    A --> B
    A --> C
    B --> D
    C --> D
```

# Grafo Não Direcionado

```mermaid
graph LR
    A((A))
    B((B))
    C((C))
    D((D))

    A --- B
    A --- C
    B --- D
    C --- D
```

# Grafo Rotulado

As arestas possuem rótulos.

```mermaid
graph LR
    A((A))
    B((B))
    C((C))

    A -->|5| B
    A -->|2| C
    B -->|7| C
```

# Grafo Ponderado

```mermaid
graph LR
    A((A))
    B((B))
    C((C))
    D((D))

    A ---|4| B
    A ---|8| C
    B ---|2| D
    C ---|6| D
```

# Grafo Simples

```mermaid
graph LR
    A((A))
    B((B))
    C((C))

    A --- B
    A --- C
    B --- C
```

# Incidência

```mermaid
graph LR
    A((A))
    B((B))
    e((e))

    A --- e
    e --- B
```

# Adjacência

```mermaid
graph LR
    A((A))
    B((B))
    C((C))

    A --- B
    B --- C
```

# Grau

```mermaid
graph LR
    A((A))
    B((B))
    C((C))
    D((D))

    A --- B
    A --- C
    A --- D
```

# Grau de Entrada

```mermaid
graph LR
    A((A))
    B((B))
    C((C))

    A --> C
    B --> C
```

# Grau de Saída

```mermaid
graph LR
    A((A))
    B((B))
    C((C))

    A --> B
    A --> C
```

# Caminho

```mermaid
graph LR
    A((A))
    B((B))
    C((C))
    D((D))
    E((E))

    A --- B
    B --- C
    C --- D
    D --- E
```

# Caminho Simples

```mermaid
graph LR
    A((A))
    B((B))
    C((C))
    D((D))

    A --- B
    B --- C
    C --- D
```

# Trilha (Trail)

```mermaid
graph LR
    A((A))
    B((B))
    C((C))

    A --- B
    B --- C
    C --- A
```

# Passeio (Walk)

```mermaid
graph LR
    A((A))
    B((B))
    C((C))

    A --- B
    B --- C
```

# Caminho Dirigido

```mermaid
graph LR
    A((A))
    B((B))
    C((C))
    D((D))

    A --> B
    B --> C
    C --> D
```

# Caminho Mínimo

```mermaid
graph LR
    A((A))
    B((B))
    C((C))
    D((D))

    A ---|2| B
    A ---|8| C
    B ---|3| D
    C ---|2| D
```

# Comparação

| Conceito | Repete vértices | Repete arestas |
|---|---|---|
| Passeio | Sim | Sim |
| Trilha | Sim | Não |
| Caminho | Não | Não |
| Caminho Simples | Não | Não |

# Hierarquia

```text
Passeio (Walk)
 |
 ▼
Trilha (Trail)
 |
 ▼
Caminho (Path)
 |
 ▼
Caminho Simples
```
Grafo

mermaid:
graph LR
A((A))
B((B))
C((C))
D((D))
A --- B
A --- C
B --- D
C --- D
Vértice

mermaid:
graph LR
A((A))
Aresta

mermaid:
graph LR
A((A))
B((B))
A --- B
Grafo Direcionado (Digrafo)

mermaid:
graph LR
A((A))
B((B))
C((C))
D((D))
A --> B
A --> C
B --> D
C --> D
Grafo Não Direcionado

mermaid:
graph LR
A((A))
B((B))
C((C))
D((D))
A --- B
A --- C
B --- D
C --- D
Grafo Rotulado

mermaid:
graph LR
A((A))
B((B))
C((C))
A -->|5| B
A -->|2| C
B -->|7| C

Ou

mermaid:
graph LR
A((A))
B((B))
A -->|amizade| B
Grafo Ponderado

mermaid:
graph LR
A((A))
B((B))
C((C))
D((D))
A ---|4| B
A ---|8| C
B ---|2| D
C ---|6| D
Grafo Simples

mermaid:
graph LR
A((A))
B((B))
C((C))
A --- B
A --- C
B --- C
Multigrafo

mermaid:
graph LR
A((A))
X((" "))
B((B))
A --- B
A --- X
X --- B
Pseudografo

mermaid:
graph LR
A((A))
B((B))
A --> L((" "))
L --> A
A --- B
Incidência

mermaid:
graph LR
A((A))
B((B))
e(("e"))
A --- e
e --- B
Adjacência

mermaid:
graph LR
A((A))
B((B))
C((C))
A --- B
B --- C
Grau

mermaid:
graph LR
A((A))
B((B))
C((C))
D((D))
A --- B
A --- C
A --- D

grau(A)=3, grau(B)=1, grau(C)=1, grau(D)=1
Grau de Entrada (In-degree)

mermaid:
graph LR
A((A))
B((B))
C((C))
A --> C
B --> C

entrada(C)=2
Grau de Saída (Out-degree)

mermaid:
graph LR
A((A))
B((B))
C((C))
A --> B
A --> C

saída(A)=2
Laço (Loop)

mermaid:
graph LR
A((A))
L((" "))
A --> L
L --> A
Arestas Paralelas

mermaid:
graph LR
A((A))
B((B))
X((" "))
A --- B
A --- X
X --- B
Isomorfismo

mermaid:
graph LR
subgraph G1
A((A))
B((B))
C((C))
A --- B
B --- C
end
subgraph G2
X((X))
Y((Y))
Z((Z))
X --- Y
Y --- Z
end

A ↔ X, B ↔ Y, C ↔ Z
Caminho

mermaid:
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

Exemplo:
A → B → C → D → E
Comprimento do Caminho

mermaid:
graph LR
A((A))
B((B))
C((C))
D((D))
A --- B
B --- C
C --- D
Caminho Simples

mermaid:
graph LR
A((A))
B((B))
C((C))
D((D))
A --- B
B --- C
C --- D
Trilha (Trail)

mermaid:
graph LR
A((A))
B((B))
C((C))
A --- B
B --- C
C --- A
Passeio (Walk)

mermaid:
graph LR
A((A))
B((B))
C((C))
A --- B
B --- C
Caminho Dirigido

mermaid:
graph LR
A((A))
B((B))
C((C))
D((D))
A --> B
B --> C
C --> D
Caminho Mínimo

mermaid:
graph LR
A((A))
B((B))
C((C))
D((D))
A ---|2| B
A ---|8| C
B ---|3| D
C ---|2| D
Comparação

| Conceito | Repete vértices | Repete arestas |
| Passeio (Walk) | sim | sim |
| Trilha (Trail) | sim | não |
| Caminho (Path) | não | não |
| Caminho Simples | não | não |
| Caminho Dirigido | não | não |
| Caminho Mínimo | depende | depende |
Hierarquia

Passeio (Walk)
│
├── Pode repetir tudo
│
▼
Trilha (Trail)
│
├── Não repete arestas
│
▼
Caminho (Path)
│
├── Não repete vértices
│
▼
Caminho Simples
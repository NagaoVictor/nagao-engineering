\# Grafo

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



\# Vértice

```mermaid

graph LR



A((A))

```



\# Aresta

```mermaid

graph LR



A((A))

B((B))



A --- B

```



\# Grafo Direcionado (Digrafo)

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



\# Grafo Não Direcionado

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



\# Grafo Rotulado

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



Ou 



```mermaid

graph LR



A((A))

B((B))



A -->|amizade| B

```



\# Grafo Ponderado

Cada aresta possui um peso.

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



\# Grafo Simples

Sem laços e sem arestas paralelas.

```mermaid

graph LR



A((A))

B((B))

C((C))



A --- B

A --- C

B --- C

```



\# Multigrafo

Um multigrafo permite arestas paralelas entre dois vértices.

```mermaid

graph LR



A((A))

X((" "))

B((B))



A --- B

A --- X

X --- B

```



\# Pseudografo

Um pseudografo permite laços (loops).

```mermaid

graph LR



A((A))

B((B))



A --> L((" "))

L --> A



A --- B

```



\# Incidência

Uma aresta é incidente aos vértices que ela conecta.

```mermaid

graph LR



A((A))

B((B))

e(("e"))



A --- e

e --- B

```



\# Adjacência

Dois vértices são adjacentes quando existe uma aresta entre eles.

```mermaid

graph LR



A((A))

B((B))

C((C))



A --- B

B --- C

```



\# Grau

O grau é o número de arestas incidentes em um vértice.

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



grau(A)=3, grau(B)=1, grau(C)=1, grau(D)=1



\# Grau de Entrada (In-degree)

Conta quantas arestas chegam ao vértice.

```mermaid

graph LR



A((A))

B((B))

C((C))



A --> C

B --> C

```

entrada(C)=2



\# Grau de Saída (Out-degree)

Conta quantas arestas saem do vértice.

```mermaid

graph LR



A((A))

B((B))

C((C))



A --> B

A --> C

```

saída(A)=2



\# Laço (Loop)

Uma aresta liga um vértice a ele mesmo.

```mermaid

graph LR



A((A))

L((" "))



A --> L

L --> A

```



\# Arestas Paralelas

Mais de uma aresta conecta o mesmo par de vértices.

```mermaid

graph LR



A((A))

B((B))

X((" "))



A --- B

A --- X

X --- B

```



\# Isomorfismo

Dois grafos são isomorfos quando possuem a mesma estrutura, mesmo que os nomes dos vértices sejam diferentes.

```mermaid

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

```

A ↔ X, B ↔ Y, C ↔ Z



\# Caminho



Um \*\*caminho\*\* é uma sequência de vértices conectados por arestas, onde cada vértice consecutivo possui uma aresta entre eles.



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



Exemplo:



```text

A → B → C → D → E

```



\---



\# Comprimento do Caminho



O \*\*comprimento\*\* de um caminho é a quantidade de arestas percorridas.



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



```text

A → B → C → D

```



Número de arestas:



```text

3

```



\---



\# Caminho Simples



Um \*\*caminho simples\*\* não repete vértices.



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



```text

A → B → C → D

```



Todos os vértices aparecem apenas uma vez.



\---



\# Trilha (Trail)



Uma \*\*trilha\*\* não repete arestas.



Os vértices podem ser repetidos.



```mermaid

graph LR



A((A))

B((B))

C((C))



A --- B

B --- C

C --- A

```



Exemplo:



```text

A → B → C → A

```



Nenhuma aresta foi utilizada duas vezes.



\---



\# Passeio (Walk)



Um \*\*passeio\*\* é a forma mais geral.



Pode repetir vértices e também repetir arestas.



```mermaid

graph LR



A((A))

B((B))

C((C))



A --- B

B --- C

```



Exemplo:



```text

A → B → C → B → A → B

```



Tudo pode ser repetido.



\---



\# Caminho Dirigido



Em um digrafo, todas as arestas devem ser percorridas respeitando sua direção.



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



Caminho válido:



```text

A → B → C → D

```



Não é permitido:



```text

D → C

```



pois a direção da aresta é oposta.



\---



\# Caminho Mínimo (Shortest Path)



É o caminho de menor custo entre dois vértices.



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



Possibilidades:



```text

A → B → D



Custo = 2 + 3 = 5

```



```text

A → C → D



Custo = 8 + 2 = 10

```



Logo,



```text

Caminho mínimo



A → B → D

```



\---



\# Comparação



| Conceito | Repete vértices | Repete arestas |

|-----------|:---------------:|:--------------:|

| Passeio (Walk) | ✅ | ✅ |

| Trilha (Trail) | ✅ | ❌ |

| Caminho (Path) | ❌ | ❌ |

| Caminho Simples | ❌ | ❌ |

| Caminho Dirigido | ❌ | ❌ (respeitando a direção) |

| Caminho Mínimo | Depende | Depende |



\---



\# Hierarquia



```text

Passeio (Walk)

&#x20;       │

&#x20;       ├────────── Pode repetir tudo

&#x20;       │

&#x20;       ▼

Trilha (Trail)

&#x20;       │

&#x20;       ├────────── Não repete arestas

&#x20;       │

&#x20;       ▼

Caminho (Path)

&#x20;       │

&#x20;       ├────────── Não repete vértices

&#x20;       │

&#x20;       ▼

Caminho Simples

```


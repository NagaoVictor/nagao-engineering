\# Relações



\## O que é?



Uma relação define uma conexão entre elementos de um ou mais conjuntos.



Enquanto um conjunto responde \*\*"quais elementos existem?"\*\*, uma relação responde:



> \*\*"Como esses elementos estão conectados?"\*\*



Na computação, relações aparecem em bancos de dados, grafos, redes sociais, sistemas de permissões, dependências entre tarefas e muito mais.



\---



\## Exemplo



Considere o conjunto de pessoas:



```text

P = {Ana, Bruno, Carlos}

```



Agora definimos a relação \*\*"é amigo de"\*\*.



```text

(Ana, Bruno)



(Bruno, Carlos)



(Carlos, Ana)

```



Cada par representa uma relação entre duas pessoas.



Visualmente:



```text

Ana ------> Bruno

&#x20;^           |

&#x20;|           |

&#x20;|           v

Carlos <-----

```



\---



\## Como resolver



Uma relação é formada por pares ordenados.



```text

(A, B)

```



Significa:



> "A possui alguma relação com B."



No nosso exemplo:



```text

(Ana, Bruno)

```



Lemos:



> Ana é amiga de Bruno.



Da mesma forma:



```text

(Bruno, Carlos)

```



Lemos:



> Bruno é amigo de Carlos.



Observe que isso \*\*não garante\*\* que:



```text

(Carlos, Bruno)

```



Também exista.



Tudo depende da relação definida.



\---



\## Algumas propriedades importantes



\### Reflexiva



Todo elemento se relaciona consigo mesmo.



Exemplo:



```text

(Ana, Ana)



(Bruno, Bruno)



(Carlos, Carlos)

```



\---



\### Simétrica



Se



```text

(Ana, Bruno)

```



existe,



então



```text

(Bruno, Ana)

```



também deve existir.



Exemplo:



```text

Ana ↔ Bruno

```



\---



\### Antissimétrica



Se



```text

(A, B)

```



e



```text

(B, A)

```



existem ao mesmo tempo,



então necessariamente:



```text

A = B

```



Essa propriedade aparece bastante em relações de ordem.



\---



\### Transitiva



Se



```text

(A, B)

```



e



```text

(B, C)

```



existem,



então também deve existir



```text

(A, C)

```



Exemplo:



Se



```text

3 < 5



5 < 8

```



então



```text

3 < 8

```



\---



\## O que aprender com isso



Uma relação pode possuir uma ou várias propriedades.



| Propriedade | Pergunta |

|------------|----------|

| Reflexiva | Todo elemento se relaciona consigo mesmo? |

| Simétrica | A relação funciona nos dois sentidos? |

| Antissimétrica | Os dois sentidos só existem quando os elementos são iguais? |

| Transitiva | A relação pode ser "encadeada"? |



Essas propriedades permitem classificar diferentes tipos de relações.



\---



\## Onde aparece na computação?



\- Banco de dados (relacionamentos entre tabelas)

\- Grafos

\- Redes sociais

\- Sistemas de permissões

\- Dependências entre tarefas

\- Sistemas distribuídos

\- Compiladores

\- Inteligência Artificial



\---



\## Resumo



| Conceito | Ideia |

|----------|-------|

| \*\*Relação\*\* | Conexão entre dois elementos. |

| \*\*Par ordenado\*\* | Representa uma ligação entre dois objetos. |

| \*\*Reflexiva\*\* | Todo elemento aponta para si mesmo. |

| \*\*Simétrica\*\* | A relação funciona nos dois sentidos. |

| \*\*Antissimétrica\*\* | Os dois sentidos só acontecem quando os elementos são iguais. |

| \*\*Transitiva\*\* | Relações podem ser encadeadas. |



\---



> \*\*Modelo mental\*\*

>

> Imagine um grafo.

>

> Os elementos são os \*\*nós\*\*.

>

> As relações são as \*\*arestas\*\* que ligam esses nós.

>

> A matemática estuda justamente quais regras essas conexões obedecem.


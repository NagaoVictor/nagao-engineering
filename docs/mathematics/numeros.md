# Teoria dos Numeros
1 Conjuntos dos Números Reais<br>
&emsp;1.1 Aritmética em $\mathbb{R}$ <br>
&emsp;1.2 A relação de ordem em $\mathbb{R}$ <br> 
&emsp;1.3 A completude do conjunto dos reais <br> 
&emsp;1.4 A representação geométrica <br>
&emsp;1.5 Supremo e ínfimo <br>
2 Produtos Notáveis e Equações<br>
&emsp;2.1 Identidades algébricas <br>
&emsp;2.2 Módulo e equações modulares <br>
&emsp;2.3 Equações de segundo grau <br>
&emsp;2.4 Equações polinomiais <br>
3 Sistemas de Equações <br>
&emsp;3.1 Sistemas lineares eliminação <br>
&emsp;3.2 Miscelânea <br>
4 Sequências Elementares <br>
&emsp;4.1 Fórmulas posicionais e recorrências <br>
&emsp;4.2 Progressões <br>
&emsp;4.3 Recorrência lineares de ordens 2 e 3 <br>
&emsp;4.4 Somatórios e produtórios <br>
5 Indução Finita <br>
6 Binômio de Newton <br>
&emsp;6.1 Números binomiais <br>
&emsp;6.2 A fórmula do binômio <br>
7 Desigualdades Elementares
&emsp;7.1 A desigualdade triangular <br>
&emsp;7.2 A desigualdade entre as médias <br>
&emsp;7.3 A desigualdade de Cauchy <br>
&emsp;7.4 Mais desigualdades <br>

**Referência:** <br> 
*Tópicos de Matemática Elementar. Volume 1, Números Reais.* <br>
*Antonio Caminha Muniz Neto* <br>

Capa Design: <br>
$\sqrt{a \pm \sqrt{b}} = \sqrt{\frac{a + \sqrt{a^2 - b^2}}{2}} \pm \sqrt{\frac{a - \sqrt{a^2 - b^2}}{2}}$ <br>
$\frac{a_{1}+a_{2}+...+a_{n}}{n} \geq \sqrt[n]{a_{1}a_{2}...a_{n}}$ <br>

1.1 Aritmética em $\mathbb{R}$ <br><br>
$b = aq + r$ e $0 \leq r < a$ <br><br>

$\frac{1}{8} = 0,125 = \frac{1}{10}+\frac{1}{10^2}+\frac{5}{10^3}$

$\frac{1}{12} = 0,08333... = \frac{8}{10^2} + \frac{3}{10^3} + \frac{3}{10^4} + \frac{3}{10^5} + ...$

$0 < \frac{1}{12} - ( \frac{8}{10^2} + \frac{3}{10^3} + \frac{3}{10^4} + ... + \frac{3}{10^k}) \leq \frac{1}{10^n}$

$Erro = \frac{1}{12} - (\frac{8}{10^2} + \frac{3}{10^3} + \frac{3}{10^4} + ... + \frac{3}{10^k}) = \frac{1}{3.10^k}$


(a) Se $a>0$, então $-a<0$ e vice-versa.

(b) Se $a>0$, então

$$
\begin{cases}
b>0 \implies ab>0\\
b<0 \implies ab<0
\end{cases}
$$

(c) Se $a<0$, então

$$
\begin{cases}
b>0 \implies ab<0\\
b<0 \implies ab>0
\end{cases}
$$

(d) $a>b \implies a+c>b+c$

(e) $a>b,\ c>d \implies a+c>b+d$

(f) Se $a>b$, então

$$
\begin{cases}
c>0 \implies ac>bc\\
c<0 \implies ac<bc
\end{cases}
$$

(g) $a\neq0 \implies a^2>0$

(h) $a>0 \iff \dfrac{1}{a}>0$

(i) Se $a$ e $b$ têm o mesmo sinal e $a>b$, então

$$
\frac{1}{a}<\frac{1}{b}
$$

1 Prove os itens (b), (c) e (g) da proposição 1.2.

Item (b): $ba>0$, para $a,b>0$, $ab>0$  <br><br>
Para provar:<br>
&emsp;&emsp;$ab<0, a>0$ e $b<0$ <br>
Sabemos que: <br>
&emsp;&emsp;$b<0$ <br>
Pela proposição (a), <br>  
&emsp;&emsp;$-b>0$ <br>
Como: <br>
&emsp;&emsp;$a>0$ <br>
E: <br>
&emsp;&emsp;$-b>0$ <br>
O produto é positivo: <br>
&emsp;&emsp;$a(-b)>0$ <br>
Agora usamos apenas álgebra: <br>
&emsp;&emsp;$a(-b) = -(ab)$ <br>
Logo:<br>
&emsp;&emsp;$-(ab)>0$ <br>
Aplicando novamente a proposição (a): <br>
&emsp;&emsp;$ab<0$

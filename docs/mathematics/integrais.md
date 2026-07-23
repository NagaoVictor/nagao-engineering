\# Integrais Fundamentais



\## Identidades Trigonométricas



$\\sin^2(x)=\\frac{1-\\cos(2x)}{2}$



<br>



$\\cos^2(x)=\\frac{1+\\cos(2x)}{2}$



\---



\# Integrais Trigonométricas Básicas



$\\int \\sin(x)\\,dx=-\\cos(x)+C$



<br>



$\\int \\cos(x)\\,dx=\\sin(x)+C$



<br>



$\\int \\tan(x)\\,dx=\\ln|\\sec(x)|+C$



<br>



$\\int \\cot(x)\\,dx=\\ln|\\sin(x)|+C$



<br>



$\\int \\sec^2(x)\\,dx=\\tan(x)+C$



<br>



$\\int \\csc^2(x)\\,dx=-\\cot(x)+C$



<br>



$\\int \\sec(x)\\tan(x)\\,dx=\\sec(x)+C$



<br>



$\\int \\csc(x)\\cot(x)\\,dx=-\\csc(x)+C$



<br>



$\\int \\sec(x)\\,dx=\\ln\\left|\\sec(x)+\\tan(x)\\right|+C$



<br>



$\\int \\csc(x)\\,dx=-\\ln\\left|\\csc(x)+\\cot(x)\\right|+C$



\---



\# Integrais Exponenciais



$\\int e^x\\,dx=e^x+C$



<br>



$\\int a^x\\,dx=\\frac{a^x}{\\ln(a)}+C,\\qquad a>0,\\;a\\neq1$



\---



\# Integrais Logarítmicas



$\\int \\frac{1}{x}\\,dx=\\ln|x|+C$



<br>



$\\int \\log\_a(x)\\,dx=\\frac{x\\ln(x)-x}{\\ln(a)}+C$



\---



\# Integrais Hiperbólicas



$\\int \\sinh(x)\\,dx=\\cosh(x)+C$



<br>



$\\int \\cosh(x)\\,dx=\\sinh(x)+C$



<br>



$\\int \\operatorname{sech}^2(x)\\,dx=\\tanh(x)+C$



<br>



$\\int \\operatorname{csch}^2(x)\\,dx=-\\coth(x)+C$



<br>



$\\int \\operatorname{sech}(x)\\operatorname{tanh}(x)\\,dx=-\\operatorname{sech}(x)+C$



<br>



$\\int \\operatorname{csch}(x)\\operatorname{coth}(x)\\,dx=-\\operatorname{csch}(x)+C$



\---



\# Regra Geral da Substituição (u-substitution)



Se



$u=g(x)$



e



$du=g'(x)\\,dx$



então



$\\int f(g(x))\\,g'(x)\\,dx=\\int f(u)\\,du$



\---



\# Integração por Partes



Se



$u=f(x)$



e



$dv=g(x)\\,dx$



então



$\\int u\\,dv=uv-\\int v\\,du$



\---



\# Integrais Racionais



$\\int \\frac{1}{a^2+x^2}\\,dx=\\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right)+C$



<br>



$\\int \\frac{1}{\\sqrt{a^2-x^2}}\\,dx=\\arcsin\\left(\\frac{x}{a}\\right)+C$



<br>



$\\int \\frac{1}{x^2-a^2}\\,dx=\\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right|+C$



\---



\# Integrais Definidas



$\\int\_a^b f(x)\\,dx=F(b)-F(a)$



onde



$F'(x)=f(x)$



\---



\# Propriedades das Integrais



$\\int (f(x)+g(x))\\,dx=\\int f(x)\\,dx+\\int g(x)\\,dx$



<br>



$\\int (f(x)-g(x))\\,dx=\\int f(x)\\,dx-\\int g(x)\\,dx$



<br>



$\\int c\\,f(x)\\,dx=c\\int f(x)\\,dx$



\---



\# Teorema Fundamental do Cálculo



Se



$F'(x)=f(x)$



então



$\\frac{d}{dx}\\left(\\int\_a^x f(t)\\,dt\\right)=f(x)$



\---



\# Integrais Impróprias



$\\int\_a^{\\infty}f(x)\\,dx=\\lim\_{b\\to\\infty}\\int\_a^b f(x)\\,dx$



<br>



$\\int\_{-\\infty}^{\\infty}f(x)\\,dx=

\\lim\_{a\\to-\\infty}\\int\_a^0f(x)\\,dx

\+

\\lim\_{b\\to\\infty}\\int\_0^bf(x)\\,dx$


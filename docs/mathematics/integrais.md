\# Integrais Fundamentais



\## Identidades Trigonométricas



$$

\\sin^2(x)=\\frac{1-\\cos(2x)}{2}

$$



$$

\\cos^2(x)=\\frac{1+\\cos(2x)}{2}

$$



\---



\# Integrais Trigonométricas Básicas



$$

\\int \\sin(x)\\,dx=-\\cos(x)+C

$$



$$

\\int \\cos(x)\\,dx=\\sin(x)+C

$$



$$

\\int \\tan(x)\\,dx=\\ln|\\sec(x)|+C

$$



$$

\\int \\cot(x)\\,dx=\\ln|\\sin(x)|+C

$$



$$

\\int \\sec^2(x)\\,dx=\\tan(x)+C

$$



$$

\\int \\csc^2(x)\\,dx=-\\cot(x)+C

$$



$$

\\int \\sec(x)\\tan(x)\\,dx=\\sec(x)+C

$$



$$

\\int \\csc(x)\\cot(x)\\,dx=-\\csc(x)+C

$$



$$

\\int \\sec(x)\\,dx=\\ln\\left|\\sec(x)+\\tan(x)\\right|+C

$$



$$

\\int \\csc(x)\\,dx=-\\ln\\left|\\csc(x)+\\cot(x)\\right|+C

$$



\---



\# Integrais Exponenciais



$$

\\int e^x\\,dx=e^x+C

$$



$$

\\int a^x\\,dx=\\frac{a^x}{\\ln(a)}+C,\\qquad a>0,\\;a\\neq1

$$



\---



\# Integrais Logarítmicas



$$

\\int\\frac1x\\,dx=\\ln|x|+C

$$



$$

\\int\\log\_a(x)\\,dx=\\frac{x\\ln(x)-x}{\\ln(a)}+C

$$



\---



\# Integrais Hiperbólicas



$$

\\int\\sinh(x)\\,dx=\\cosh(x)+C

$$



$$

\\int\\cosh(x)\\,dx=\\sinh(x)+C

$$



$$

\\int\\operatorname{sech}^2(x)\\,dx=\\tanh(x)+C

$$



$$

\\int\\operatorname{csch}^2(x)\\,dx=-\\coth(x)+C

$$



\---



\# Regra Geral da Substituição



Se



$$

u=g(x)

$$



então



$$

du=g'(x)\\,dx

$$



e



$$

\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du

$$



\---



\# Integração por Partes



$$

\\int u\\,dv=uv-\\int v\\,du

$$



\---



\# Integrais Definidas



$$

\\int\_a^b f(x)\\,dx=F(b)-F(a)

$$



onde



$$

F'(x)=f(x)

$$



\---



\# Propriedades



$$

\\int(f+g)\\,dx=\\int f\\,dx+\\int g\\,dx

$$



$$

\\int(f-g)\\,dx=\\int f\\,dx-\\int g\\,dx

$$



$$

\\int cf\\,dx=c\\int f\\,dx

$$



\---



\# Teorema Fundamental do Cálculo



$$

\\frac{d}{dx}\\left(\\int\_a^x f(t)\\,dt\\right)=f(x)

$$



\---



\# Integrais Impróprias



$$

\\int\_a^\\infty f(x)\\,dx

=

\\lim\_{b\\to\\infty}\\int\_a^b f(x)\\,dx

$$



$$

\\int\_{-\\infty}^{\\infty}f(x)\\,dx

=

\\lim\_{a\\to-\\infty}\\int\_a^0f(x)\\,dx

\+

\\lim\_{b\\to\\infty}\\int\_0^bf(x)\\,dx

$$


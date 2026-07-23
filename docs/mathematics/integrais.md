\# Integrais Fundamentais



\## Integral da constante



$f(x)=k$



$\\int k\\,dx=kx+C$



\---



\## Integral do monômio



$f(x)=x^n$



$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C \\qquad (n\\neq-1)$



$f(x)=ax^n$



$\\int ax^n\\,dx=\\frac{ax^{n+1}}{n+1}+C$



\---



\## Integral da soma



$\\int(f+g)\\,dx=\\int f\\,dx+\\int g\\,dx$



\---



\## Integral da diferença



$\\int(f-g)\\,dx=\\int f\\,dx-\\int g\\,dx$



\---



\## Constante multiplicativa



$\\int cf(x)\\,dx=c\\int f(x)\\,dx$



\---



\# Integração por Substituição



\## Regra da Cadeia Inversa



$u=g(x)$



$du=g'(x)\\,dx$



$\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du$



\---



\# Integração por Partes



\## Regra do Produto Inversa



$\\int u\\,dv=uv-\\int v\\,du$



\---



\# Integrais Exponenciais



$\\int e^x\\,dx=e^x+C$



$\\int a^x\\,dx=\\frac{a^x}{\\ln(a)}+C$



\---



\# Integrais Logarítmicas



$\\int\\frac1x\\,dx=\\ln|x|+C$



$\\int\\ln(x)\\,dx=x\\ln(x)-x+C$



$\\int\\log\_a(x)\\,dx=\\frac{x\\ln(x)-x}{\\ln(a)}+C$



\---



\# Integrais Trigonométricas



\## Formato Simples



$\\int\\sin(x)\\,dx=-\\cos(x)+C$



$\\int\\cos(x)\\,dx=\\sin(x)+C$



$\\int\\tan(x)\\,dx=\\ln|\\sec(x)|+C$



$\\int\\cot(x)\\,dx=\\ln|\\sin(x)|+C$



$\\int\\sec^2(x)\\,dx=\\tan(x)+C$



$\\int\\csc^2(x)\\,dx=-\\cot(x)+C$



$\\int\\sec(x)\\tan(x)\\,dx=\\sec(x)+C$



$\\int\\csc(x)\\cot(x)\\,dx=-\\csc(x)+C$



$\\int\\sec(x)\\,dx=\\ln\\left|\\sec(x)+\\tan(x)\\right|+C$



$\\int\\csc(x)\\,dx=-\\ln\\left|\\csc(x)+\\cot(x)\\right|+C$



\---



\# Integrais Trigonométricas Inversas



$\\int\\frac1{\\sqrt{1-x^2}}\\,dx=\\arcsin(x)+C$



$\\int\\frac{-1}{\\sqrt{1-x^2}}\\,dx=\\arccos(x)+C$



$\\int\\frac1{1+x^2}\\,dx=\\arctan(x)+C$



$\\int\\frac{-1}{1+x^2}\\,dx=\\operatorname{arccot}(x)+C$



$\\int\\frac1{|x|\\sqrt{x^2-1}}\\,dx=\\operatorname{arcsec}(x)+C$



$\\int\\frac{-1}{|x|\\sqrt{x^2-1}}\\,dx=\\operatorname{arccsc}(x)+C$



\---



\# Integrais Hiperbólicas



\## Definições Algébricas



$\\sinh(x)=\\frac{e^x-e^{-x}}2$



$\\cosh(x)=\\frac{e^x+e^{-x}}2$



$\\tanh(x)=\\frac{e^x-e^{-x}}{e^x+e^{-x}}$



$\\coth(x)=\\frac{e^x+e^{-x}}{e^x-e^{-x}}$



$\\operatorname{sech}(x)=\\frac2{e^x+e^{-x}}$



$\\operatorname{csch}(x)=\\frac2{e^x-e^{-x}}$



\---



\## Integrais Hiperbólicas



$\\int\\sinh(x)\\,dx=\\cosh(x)+C$



$\\int\\cosh(x)\\,dx=\\sinh(x)+C$



$\\int\\tanh(x)\\,dx=\\ln(\\cosh(x))+C$



$\\int\\coth(x)\\,dx=\\ln|\\sinh(x)|+C$



$\\int\\operatorname{sech}^2(x)\\,dx=\\tanh(x)+C$



$\\int\\operatorname{csch}^2(x)\\,dx=-\\coth(x)+C$



$\\int\\operatorname{sech}(x)\\operatorname{tanh}(x)\\,dx=-\\operatorname{sech}(x)+C$



$\\int\\operatorname{csch}(x)\\operatorname{coth}(x)\\,dx=-\\operatorname{csch}(x)+C$



\---



\# Integrais Racionais



$\\int\\frac1{a^2+x^2}\\,dx=\\frac1a\\arctan\\left(\\frac xa\\right)+C$



$\\int\\frac1{\\sqrt{a^2-x^2}}\\,dx=\\arcsin\\left(\\frac xa\\right)+C$



$\\int\\frac1{x^2-a^2}\\,dx=\\frac1{2a}\\ln\\left|\\frac{x-a}{x+a}\\right|+C$



\---



\# Integrais Definidas



$\\int\_a^bf(x)\\,dx=F(b)-F(a)$



$F'(x)=f(x)$



\---



\# Teorema Fundamental do Cálculo



$\\frac d{dx}\\left(\\int\_a^xf(t)\\,dt\\right)=f(x)$



\---



\# Integrais Impróprias



$\\int\_a^\\infty f(x)\\,dx=\\lim\_{b\\to\\infty}\\int\_a^bf(x)\\,dx$



$\\int\_{-\\infty}^{\\infty}f(x)\\,dx=\\lim\_{a\\to-\\infty}\\int\_a^0f(x)\\,dx+\\lim\_{b\\to\\infty}\\int\_0^bf(x)\\,dx$


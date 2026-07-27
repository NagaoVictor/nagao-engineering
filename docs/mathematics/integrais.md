# Integrais Fundamentais


## Integral da constante



$f(x)=k$



$\int k\,dx=kx+C$



## Integral do monômio



$f(x)=x^n$



$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C \qquad (n\neq-1)$



$f(x)=ax^n$



$\int ax^n\,dx=\frac{ax^{n+1}}{n+1}+C$



## Propriedades da Integral



$\int(f+g)\,dx=\int f\,dx+\int g\,dx$



$\int(f-g)\,dx=\int f\,dx-\int g\,dx$



$\int c\,f(x)\,dx=c\int f(x)\,dx$



---


# Métodos de Integração



## Regra da Substituição



$u=g(x)$



$du=g'(x)\,dx$



$\int f(g(x))g'(x)\,dx=\int f(u)\,du$



## Integração por Partes



$\int u\,dv=uv-\int v\,du$



---



# Integrais Exponenciais



$\int e^x\,dx=e^x+C$



$\int a^x\,dx=\frac{a^x}{\ln(a)}+C$



---



# Integrais Logarítmicas



$\int\frac{1}{x}\,dx=\ln|x|+C$



$\int\ln(x)\,dx=x\ln(x)-x+C$



$\int\log\_a(x)\,dx=\frac{x\ln(x)-x}{\ln(a)}+C$



---



# Integrais Trigonométricas



## Formato Simples



$\int\sin(x)\,dx=-\cos(x)+C$



$\int\cos(x)\,dx=\sin(x)+C$



$\int\tan(x)\,dx=\ln|\sec(x)|+C$



$\int\cot(x)\,dx=\ln|\sin(x)|+C$



$\int\sec^2(x)\,dx=\tan(x)+C$



$\int\csc^2(x)\,dx=-\cot(x)+C$



$\int\sec(x)\tan(x)\,dx=\sec(x)+C$



$\int\csc(x)\cot(x)\,dx=-\csc(x)+C$



$\int\sec(x)\,dx=\ln|\sec(x)+\tan(x)|+C$



$\int\csc(x)\,dx=-\ln|\csc(x)+\cot(x)|+C$



---



# Integrais Trigonométricas Inversas



$\int\frac{1}{\sqrt{1-x^2}}\,dx=\arcsin(x)+C$



$\int\frac{-1}{\sqrt{1-x^2}}\,dx=\arccos(x)+C$



$\int\frac{1}{1+x^2}\,dx=\arctan(x)+C$



$\int\frac{-1}{1+x^2}\,dx=\mathrm{arccot}(x)+C$



$\int\frac{1}{|x|\sqrt{x^2-1}}\,dx=\mathrm{arcsec}(x)+C$



$\int\frac{-1}{|x|\sqrt{x^2-1}}\,dx=\mathrm{arccsc}(x)+C$



---



# Funções Hiperbólicas



## Definições Algébricas



$\sinh(x)=\frac{e^x-e^{-x}}{2}$



$\cosh(x)=\frac{e^x+e^{-x}}{2}$



$\tanh(x)=\frac{e^x-e^{-x}}{e^x+e^{-x}}$



$\coth(x)=\frac{e^x+e^{-x}}{e^x-e^{-x}}$



$\mathrm{sech}(x)=\frac{2}{e^x+e^{-x}}$



$\mathrm{csch}(x)=\frac{2}{e^x-e^{-x}}$



---



# Integrais Hiperbólicas



$\int\sinh(x)\,dx=\cosh(x)+C$



$\int\cosh(x)\,dx=\sinh(x)+C$



$\int\tanh(x)\,dx=\ln(\cosh(x))+C$



$\int\coth(x)\,dx=\ln|\sinh(x)|+C$



$\int\mathrm{sech}^2(x)\,dx=\tanh(x)+C$



$\int\mathrm{csch}^2(x)\,dx=-\coth(x)+C$



$\int\mathrm{sech}(x)\tanh(x)\,dx=-\mathrm{sech}(x)+C$



$\int\mathrm{csch}(x)\coth(x)\,dx=-\mathrm{csch}(x)+C$



---



# Integrais Racionais



$\int\frac{1}{a^2+x^2}\,dx=\frac{1}{a}\arctan\left(\frac{x}{a}\right)+C$



$\int\frac{1}{\sqrt{a^2-x^2}}\,dx=\arcsin\left(\frac{x}{a}\right)+C$



$\int\frac{1}{x^2-a^2}\,dx=\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C$



---



# Integrais Definidas



$\int\_a^b f(x)\,dx=F(b)-F(a)$



$F'(x)=f(x)$



---



# Teorema Fundamental do Cálculo



$\frac{d}{dx}\left(\int\_a^x f(t)\,dt\right)=f(x)$



---



# Integrais Impróprias



$\int\_a^{\infty}f(x)\,dx=\lim\_{b\to\infty}\int\_a^b f(x)\,dx$



$\int\_{-\infty}^{\infty}f(x)\,dx=\lim\_{a\to-\infty}\int\_a^0f(x)\,dx+\lim\_{b\to\infty}\int\_0^bf(x)\,dx$


# Exemplos Clássicos de Resolução de Integrais

## Integrais por substituição

Aqui dedicarei as itegrais ao professor **Math Sorcerer**
Relações fundamentais <br>

$\int \frac{1}{x^4}\,dx$ = $\int x^{-4}\,dx$ = $\frac{x^{-3}}{-3} + C$

$\int \frac{1}{\sqrt{5x}}\,dx$ <br>{$u = 5x \to du = 5\, dx \to \frac{du}{5} = dx$} <br>$\frac{1}{5}\int\frac{1}{\sqrt{u}}du$ 

$\int 2x^2 + \frac{1}{(4x)^2}\, dx$ = $\int 2x^2 + \frac{1}{16}x^{-2}\, dx$ = $\frac{2}{3}x^{3}-\frac{1}{16}x^{-1} + C$

$\int \frac{1}{\cos^2x}\, dx$ = $\int \sec^2x \, dx$ = $\tan x + C$

$\int \sqrt{x} + \frac{1}{8\sqrt{x}}\, dx$ = $\int x^{\frac{1}{2}} + \frac{1}{8}x^{\frac{-1}{2}}\, dx$ = $\frac{2}{3}x^{\frac{2}{3}} - \frac{1}{4}x^{\frac{-1}{2}} + C$

$\int \frac{t - t^3}{\sqrt{t}}\,dt$ = $\int \frac{t}{t^{\frac{1}{2}}} - \frac{t^3}{t^{\frac{1}{2}}}\, dt$ = $\int t^{\frac{1}{2}} - t^{\frac{5}{2}}\, dt$ = $\frac{2}{3}t^{\frac{3}{2}}- \frac{2}{7}t^{\frac{7}{2}} + C$

$\int 2(\sec^2\theta - 7\sin\theta)\, d\theta$ = $2\int (\sec^2\theta - 7\sin\theta)\, d\theta = 2(\tan\theta + 7\cos\theta) + C$

$\int(x+1)(3x-2)\, dx$ = $\int(3x^2 - 2x + 3x - 2)\,dx$ = $x^3 + \frac{x^2}{2} - 2x + C$

$\int \sec y\tan y - \csc^2y\, dy$ = $\sec y + \cot y + C$

$\int \theta^8 + \sec^2\theta\, d\theta$ = $\frac{\theta^9}{9} + \tan^2\theta + C$

$\int \frac{\cos x}{1 - \cos^2x}\, dx$ = $\int \frac{\cos x}{\sin^2x}\, dx$ = $\int \frac{\cos x}{\sin x}.\frac{1}{\sin x}\, dx$ = $\int \cot x \csc x\, dx$ = $-\csc x + C$ 

$\int \frac{\sin 2x}{\sin x}\, dx$ = $\int \frac{2\sin x \cos x}{\sin x}\, dx$ = $2\int \cos x\, dx$ = $2\sin x + C$

$\int \frac{3x}{(x^2 + 17)^5}\, dx$,
$$
\left\{ 
\begin{array}{l}
  u = x^2 + 17\\
  du = 2x\, dx\\
  \frac{du}{2} = x\, dx
\end{array} 
\right.
$$
= $ \frac{3}{2} \int u^{-5}\, du = \frac{3}{2}(\frac{u^{-4}}{-4} + C) = \frac{-3}{8}(x^2 + 17)^{-4} + C$ 






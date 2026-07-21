# Derivadas Fundamentais

## Derivada da constante é zero
$f(x) = 5 \implies f'(x) = 0$

## Derivada do monômio (Regra do Tombo)
$(x^n)' = n \cdot x^{n-1}$

$(a \cdot x^n)' = a \cdot n \cdot x^{n-1}$

## Derivada do Produto
$(f \cdot g)' = f' \cdot g + f \cdot g'$

## Derivada do Quociente
$\left(\frac{f}{g}\right)' = \frac{f' \cdot g - f \cdot g'}{g^2}$

## Regra da Cadeia
$y = f(u) \quad \text{e} \quad u = g(x)$

$y' = f'(u) \cdot u'$

---

# Funções Exponenciais e Logarítmicas

## Derivadas Exponenciais
$y = a^x \quad (a > 0 \quad \text{e} \quad a \neq 1)$

$y' = a^x \cdot \ln(a)$

$y = e^x \implies y' = e^x$

## Derivadas Logarítmicas
$y = \log_a(x) \quad (a > 0 \quad \text{e} \quad a \neq 1)$

$y' = \frac{1}{x \cdot \ln(a)}$

$y = \ln(x) \implies y' = \frac{1}{x}$

---

# Derivadas Trigonométricas

## Formato Simples (em relação a x)
$\sin'(x) = \cos(x)$

$\cos'(x) = -\sin(x)$

$\tan'(x) = \sec^2(x)$

$\cot'(x) = -\csc^2(x)$

$\sec'(x) = \sec(x) \cdot \tan(x)$

$\csc'(x) = -\csc(x) \cdot \cot(x)$

## Formato Composto (Regra da Cadeia em relação a u)
$\sin'(u) = \cos(u) \cdot u'$

$\cos'(u) = -\sin(u) \cdot u'$

$\tan'(u) = \sec^2(u) \cdot u'$

$\cot'(u) = -\csc^2(u) \cdot u'$

$\sec'(u) = \sec(u) \cdot \tan(u) \cdot u'$

$\csc'(u) = -\csc(u) \cdot \cot(u) \cdot u'$

---

# Derivada Trigonométrica Inversa

$y = \arcsin(x) \implies y' = \frac{1}{\sqrt{1-x^2}} = \frac{u'}{\sqrt{1-u^2}}$
$f:[-1,1] \to \left[-\frac{\pi}{2},\frac{\pi}{2}\right]$

$y = \arccos(x) \implies y' = \frac{-1}{\sqrt{1-x^2}} = \frac{-u'}{\sqrt{1-u^2}}$
$f:[-1,1] \to [0,\pi]$

$y = \arctan(x) \implies y' = \frac{1}{1+x^2} = \frac{u'}{1+u^2}$
$f:\mathbb{R} \to \left(-\frac{\pi}{2},\frac{\pi}{2}\right)$

$y = \operatorname{arccot}(x) \implies y' = \frac{-1}{1+x^2} = \frac{-u'}{1+u^2}$
$f: \mathbb{R} \to (0, \pi)$

$y = \operatorname{arcsec}(x) \implies y' = \frac{1}{|x| \sqrt{x^2-1}} = \frac{u'}{|u| \sqrt{u^2-1}}$
$f: (-\infty, -1] \cup [1, \infty) \to [0, \pi] \setminus \left\{\frac{\pi}{2}\right\}$

$y = \operatorname{arccsc}(x) \implies y' = \frac{-1}{|x| \sqrt{x^2-1}} = \frac{-u'}{|u| \sqrt{u^2-1}}$
$f: (-\infty, -1] \cup [1, \infty) \to \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \setminus \{0\}$

---

# Funções Hiperbólicas

## Definições Algébricas
$\sinh(x) = \frac{e^x - e^{-x}}{2}$

$\cosh(x) = \frac{e^x + e^{-x}}{2}$

$\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$

$\coth(x) = \frac{e^x + e^{-x}}{e^x - e^{-x}}$

$\operatorname{sech}(x) = \frac{2}{e^x + e^{-x}}$

$\operatorname{csch}(x) = \frac{2}{e^x - e^{-x}}$

## Derivadas Hiperbólicas Simples e Compostas
$\sinh'(x) = \cosh(x) \implies \sinh'(u) = \cosh(u) \cdot u'$

$\cosh'(x) = \sinh(x) \implies \cosh'(u) = \sinh(u) \cdot u'$

$\tanh'(x) = \operatorname{sech}^2(x) \implies \tanh'(u) = \operatorname{sech}^2(u) \cdot u'$

$\coth'(x) = -\operatorname{csch}^2(x) \implies \coth'(u) = -\operatorname{csch}^2(u) \cdot u'$

$\operatorname{sech}'(x) = -\operatorname{sech}(x)\tanh(x) \implies \operatorname{sech}'(u) = -\operatorname{sech}(u)\tanh(u) \cdot u'$

$\operatorname{csch}'(x) = -\operatorname{csch}(x)\coth(x) \implies \operatorname{csch}'(u) = -\operatorname{csch}(u)\coth(u) \cdot u'$

---

# Derivadas Hiperbólicas Inversas

$y = \operatorname{arcsinh}(x) \implies y' = \frac{1}{\sqrt{x^2 + 1}} = \frac{u'}{\sqrt{u^2 + 1}}$

$y = \operatorname{arccosh}(x) \implies y' = \frac{1}{\sqrt{x^2 - 1}} = \frac{u'}{\sqrt{u^2 - 1}}$

$y = \operatorname{arctanh}(x) \implies y' = \frac{1}{1 - x^2} = \frac{u'}{1 - u^2}$

$y = \operatorname{arccoth}(x) \implies y' = \frac{1}{1 - x^2} = \frac{u'}{1 - u^2}$

$y = \operatorname{arcsech}(x) \implies y' = \frac{-1}{x\sqrt{1 - x^2}} = \frac{-u'}{u\sqrt{1 - u^2}}$

$y = \operatorname{arccsch}(x) \implies y' = \frac{-1}{|x|\sqrt{1 + x^2}} = \frac{-u'}{|u|\sqrt{1 + u^2}}$

---

# Derivadas de Ordem Superior

$\frac{d^2f}{dx^2} = f''(x) = (f')'$

$\frac{d^nf}{dx^n} = f^{(n)}(x)$

---

# Polinômio de Taylor

$f: I \to \mathbb{R}$

$$\sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!}(x-c)^n$$

$$P_{n}(x) = f(c) + f'(c)(x-c) + \frac{f''(c)}{2!}(x-c)^2 + \dots + \frac{f^{(n)}(c)}{n!}(x-c)^n$$

## Exemplo: Série de Taylor para $e^x$ (Maclaurin)
$$P(x) = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \frac{x^5}{5!} + \frac{x^6}{6!} \approx e^x$$

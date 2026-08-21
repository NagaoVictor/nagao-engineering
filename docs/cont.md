# Valor do Carro 

- Valor do carro com a garantia da bateria híbrida
  1.410.420 ienes

- Valor **estimado** sem a garantia da bateria híbrida
  1.410.430 ienes - 126.000 ienes
  ** Levando em conta o valor da garantia do Toyota Yaris com um valor $\approx$ 84.000 ienes
  $1.410.430 - 126.000$ = $1.284.430$

------------------------------------------------

## Valor das **Parcelas** calculadas à Juros Simples <br>
 $p$ = $\frac{v - i}{periodo}$<br>
  - p = Parcela calculada <br>
  - v = Valor total do carro <br>
  - i = A parcela inicial <br>
  - periodo = Quantidade de meses parcelado <br>

### Valor da Parcela Calculada
$p$ = $\frac{1410420 - 49252}{71}$<br>
$p$ = $19169.38$

------------------------------------------------

## Aumento Relativo da Parcela
  O objetivo deste cálculo é entender quais são os motivos de um aumento excessivo do valor de uma parcela.
  Ele calculará o valor em porcentagem do valor combinado em relação ao valor real pago.<br>
  $v$ = $c.x$ $\to$<br>
  $x$ = $\frac{v}{c}$<br>
  - v = Valor total pago após o periodo<br>
  - c = Valor combinado<br>
  - x = A porcentagem de aumento do valor do carro<br>

  $v$ = $\frac{28900}{19171.38}$ $\approx  151\%$ <br>
  Sabendo deste aumento de 151%, quais seriam os critérios de calculo para um aumento de 51% do valor já calculado?

------------------------------------------------
	
## Valor em Ienes
   Com base no cálculo acima, é necessário a estimativa do preço total pago em 6 anos <br>
   Existe dois modos para calcular o valor relativo do carro: <br>
   **Cálculo de porcentagem** e **Cálculo total**
   
####   **Cálculo de Porcentagem**
   $x$ = $p*c$<br>
   - p = Porcentagem<br>
   - c = Valor combinado<br>
   - x = Valor total à pagar <br>
   $x$ = $1.51 * 1,410,430$ = $2,101,152.00$

####  **Cálculo Total**
   $x$ = $i + (p * t)$<br>
   - i = Valor de entrada<br>
   - p = Valor da parcela<br>
   - t = periodo<br>
   $x$ = $49252 + (28900 * 71)$ = $2,101,152$

OBS: Os valores são aproximados em 2 casas decimais!

------------------------------------------------

## Juros Composto

$m$=$c(1+i)^t$<br>
   - m = montante<br>
   - c = capital<br>
   - i = taxa de juros (em numeros decimais)<br>
   - t = periodo de investimento em mês <br>

$2101152 = 1410420 (1+i)^{72}$<br>
$\approx 1,48973 = (1+i)^{72}$<br>
$\approx \sqrt[72]{1,48973} = (1+i)$<br>
$\approx \sqrt[72]{1,48973} - 1= i$<br>
$\approx 1.0055514 - 1= i$<br>
$\approx 0.0055514 = i$

  OBS: Isso significa que o valor é 0.0056<br>
  equivalente à 0.5551%  mensal à juros compostos<br>

------------------------------------------------
	
## Juros Composto Método de Euler

$\frac{dm}{dt}$ = $m.k$ <br>
$\frac{dm}{m}$ = $k. \, dt$ <br>
$\int \frac{dm}{m}$ = $\int k. \, dt$ <br>
$\ln{m}$ = $k.t + c$ <br>
$m$ = $e^{k.t + c}$ <br>
$m$ = $m_{0}e^{k.t}$ <br>
$2101152$ = $1410420e^{72k}$ <br>
$\approx 1,48973 = e^{72k}$ <br>
$\approx \sqrt[72]{1,48973} = e^k$<br>
$\approx 1.0055514 = e^k$<br>
$\ln{1.0055514} \approx 0.00553604$

OBS: Isso significa que o valor é 0.00553604<br>
  equivalente à 0.553604%  mensal à juros compostos<br>
  Quase o resultado método de juros compostos acima
	

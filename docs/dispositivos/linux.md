\# Pasta de acesso aos dispositivos externos



\## Tipos de dispositivos

\- /dev/ttyUSB0

\- /dev/ttyS0

\- /dev/i2c-1

\- /dev/spidev0.0

\- /dev/gpiochip0

\- /dev/video0

\- /dev/input/event0

\- /dev/can0



# Raspberry Pi Pico

Vamos começar com uma abordagem diferente!

Existe quatro modos de alterar informações no C via software ou Hardware 
<br>
que são elas

---

| entrada | neutra | const | volatile | volatile const |
| --- | --- | --- | --- |
| Software | 1 | 0 | 1 | 0 |
| Hardware | 0 | 0 | 1 | 1 |

---

```python



import time



def periodo\_vazao(litros, vazao):

&#x20;   d = Device()

&#x20;   print("O liquido teste escorre 40 litros em 15 segundos")

&#x20;   galao = 0

&#x20;   vazao\_segundos = vazao 

&#x20;   while (galao <= litros): # O Galão continuará enchendo enquanto for menor que litros

&#x20;       if litros - galao < vazao\_segundos: # A taxa constante de vazao (A quantidade de substancia que cai por segundo), caso sejá menor que a diferença entre o galão e a quantidade de líquido, o sistema precisa apenas respingar

&#x20;           vazao\_segundos = litros - galao # Aqui o vazamento virá apenas os pequenos respingos para dar a medida certa

&#x20;           print(galao+vazao\_segundos)

&#x20;           break

&#x20;       time.sleep(1)

&#x20;       galao+=vazao\_segundos # Aumento da quantidade relacionado a taxa de vazão

&#x20;       print(galao)

&#x20;       if (galao >= 20) and (galao < (20+vazao\_segundos)):

&#x20;           d.sensor\_continuo\_ativo() # Ligar o sensor quando estiver em 20 Litros

&#x20;           print(d.\_evento)

&#x20;       print("-------------------")



&#x20;   d.sensor\_limite\_desativo()

&#x20;   d.sensor\_continuo\_desativo() # Desligar o sensor apos finalizar os 40 litros

&#x20;   print(d.\_porta)

&#x20;          



class Device:

&#x20;   \_instancia = None

&#x20;   def \_\_new\_\_(cls):

&#x20;       if cls.\_instancia is None:

&#x20;           cls.\_instancia = super().\_\_new\_\_(cls)

&#x20;       return cls.\_instancia

&#x20;   info = """ Um galão cilíndrico contendo 3 entradas para para substâncias distintas """

&#x20;  

&#x20;   def \_\_init\_\_(self):

&#x20;       # Porta do galão

&#x20;       self.\_porta = 0

&#x20;       # Sensor

&#x20;       self.\_evento = "Desligado"

&#x20;       self.sensor\_continuo\_status = 0 # Se o sensor limite ligar mas o sensor continuo nao ligar, deu problema no sensor

&#x20;       # Setor de despejamento de substância

&#x20;       self.sub\_a = 0 # Porta da substância A

&#x20;       self.sub\_b = 0 # Porta da substância B

&#x20;       self.sub\_c = 0 # Porta da substância C

&#x20;       self.\_conteudo = "Desligado" # Situação do despejamento da substancia

&#x20;       self.\_sinal = "Vermelho" # Led externo da componta que será ativo



&#x20;   # Controle do fluido que irá entrar na máquina

&#x20;  

&#x20;   def controle\_substancia(self, substancia\_a, substancia\_b, substancia\_c):

&#x20;       self.sub\_a = substancia\_a

&#x20;       self.sub\_b = substancia\_b

&#x20;       self.sub\_c = substancia\_c

&#x20;      

&#x20;  

&#x20;   def get\_vazao(self):

&#x20;       if (self.sub\_a == 1) and (self.sub\_b == 1) and (self.sub\_c == 1):

&#x20;           self.\_conteudo = "Despejando substancia"

&#x20;           self.\_sinal = "Verde"

&#x20;           return self.\_conteudo

&#x20;       elif self.sub\_a == 0 and self.sub\_b == 0 and self.sub\_c == 0:

&#x20;           self.\_conteudo = "Desligado"

&#x20;           self.\_sinal = "Vermelho"

&#x20;           return self.\_conteudo

&#x20;       else:

&#x20;           self.\_conteudo = "Ligue todas as substancias"

&#x20;           self.\_sinal = "Vermelho"

&#x20;           return self.\_conteudo

&#x20; # -----------------------------------------------------------------------------------------------------



&#x20; # Porta do galão que despejará o fluido para o setor de mistura

&#x20;   @property

&#x20;   def porta(self):

&#x20;       if self.\_porta == 0:

&#x20;           return "Porta fechada"

&#x20;       else:

&#x20;           return "Porta aberta"



&#x20;   @porta.setter

&#x20;   def porta(self, valor):

&#x20;       self.\_porta = valor



&#x20; # -----------------------------------------------------------------------------------------------------

&#x20;  

&#x20; # Sensores de controle de vazão

&#x20;  

&#x20;   def sensor\_continuo\_ativo(self):

&#x20;       self.\_evento = "Atingiu 20cm do galão"

&#x20;       self.sensor\_continuo\_status = 1

&#x20;       return self.\_evento

&#x20;       

&#x20;   def sensor\_continuo\_desativo(self):

&#x20;       self.\_evento = "Abaixo de 20 centímetros"

&#x20;       self.sensor\_continuo\_status = 0

&#x20;       return self.\_evento



&#x20;   def sensor\_limite\_ativo(self, situacao):

&#x20;       if self.sensor\_continuo\_status == 0: # Sensor S1 não pode estar desligado se o sensor S2 estiver ativo

&#x20;           self.\_evento = "Sensor S1 não está respondendo"

&#x20;           self.porta = 0

&#x20;           return self.\_evento

&#x20;       else:

&#x20;           self.\_evento = "Atingiu 40cm do galão"

&#x20;           self.porta = 1

&#x20;           return self.\_evento

&#x20;           

&#x20;   def sensor\_limite\_desativo(self):

&#x20;       self.porta = 0



d = Device()

d.sensor\_continuo\_ativo()

print(d.sensor\_continuo\_status)

d.sensor\_continuo\_desativo()

print(d.sensor\_continuo\_status)



periodo\_vazao(40, 2.7)



```


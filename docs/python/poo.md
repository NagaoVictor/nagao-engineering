```python

import time

timer = 0.01

def periodo_vazao(litros, vazao, retorno): #(Tamanho em Litros, Quanto tempo demorar para encher o galão, quanto tempo demora para esvaziar o galao)
    d = Device()
    print("O liquido teste escorre 40 litros em 15 segundos")
    galao = 0
    vazao_segundos = vazao 
    while (galao <= litros): # O Galão continuará enchendo enquanto for menor que litros
        if litros - galao < vazao_segundos: # A taxa constante de vazao (A quantidade de substancia que cai por segundo), caso sejá menor que a diferença entre o galão e a quantidade de líquido, o sistema precisa apenas respingar
            time.sleep(timer)
            vazao_segundos = litros - galao # Aqui o vazamento virá apenas os pequenos respingos para dar a medida certa
            galao = galao+vazao_segundos
            print(f"{galao: .2f} L")
            break
        time.sleep(timer)
        galao+=vazao_segundos # Aumento da quantidade relacionado a taxa de vazão
        print(f"{galao: .2f} L")
        if (galao >= 20) and (galao < (20+vazao_segundos)):
            d.sensor_continuo_ativo() # Ligar o sensor quando estiver em 20 Litros
            #print(d._evento)
        print("-------------------")
    print("-------------------")
# Estático: Ponto onde o fluído atinge a marca de 40cm do galão e espera respostas das próxmas etapas

    d.sensor_limite_ativo() # Tivando o sensor após a marca de 40 cm, dando abertura à porta
    print(d.porta)
    print("\n\n")
    # Abertura da porta após encher até 40 cm
    time.sleep(2) # Começo da vazão durante o periodo de abertura da porta
    d.sensor_limite_desativo() # Desligar o sensor apos finalizar os 40 litros e começar a vazar o líquido

# Retorno: Saída do tanque para o próximo tanque

    saida_do_tanque = (galao/retorno)
    print(f"{galao: .2f} L")
     print("-------------------")
    while (galao >= 0):
        
        time.sleep(timer) # Tempo para despejar todo os 40 cm para a próxima etapa
        
        if ((galao - saida_do_tanque) < saida_do_tanque):
            #saida_do_tanque = galao - saida_do_tanque
            galao = galao-saida_do_tanque
            time.sleep(timer)
            print(f"{int(galao)} L")
            print("-------------------")
            time.sleep(timer)
            print("0 L")
            print("-------------------")
            break
        galao-=saida_do_tanque
        print(f"{galao: .2f} L")
        if (galao >= 20) and (galao < (20+saida_do_tanque)):
            d.retorno()
            d.sensor_continuo_desativo() # Desliga o sensor quando estiver próximo à 20 Litros
            print(d._evento)
        print("-------------------")
            
    d.sensor_limite_desativo() # Desligamento do sensor após a marca de 20 cm
    print(d.porta)
           

class Device:
    _instancia = None
    def __new__(cls):
        if cls._instancia is None:
            cls.instancia = super().__new__(cls)
        return cls._instancia
    info = """ Um galão cilíndrico contendo 3 entradas para para substâncias distintas """
   
    def _init_(self):
        # Porta do galão
        self._porta = 0
        # Sensor
        self._evento = "Desligado"
        self.sensor_continuo_status = 0 # Se o sensor limite ligar mas o sensor continuo nao ligar, deu problema no sensor
        # Setor de despejamento de substância
        self.sub_a = 0 # Porta da substância A
        self.sub_b = 0 # Porta da substância B
        self.sub_c = 0 # Porta da substância C
        self._conteudo = "Desligado" # Situação do despejamento da substancia
        self._sinal = "Vermelho" # Led externo da componta que será ativo

    # Controle do fluido que irá entrar na máquina
   
    def controle_substancia(self, substancia_a, substancia_b, substancia_c):
        self.sub_a = substancia_a
        self.sub_b = substancia_b
        self.sub_c = substancia_c
       
   
    def get_vazao(self):
        if (self.sub_a == 1) and (self.sub_b == 1) and (self.sub_c == 1):
            self._conteudo = "Despejando substancia"
            self._sinal = "Verde"
            return self._conteudo
        elif self.sub_a == 0 and self.sub_b == 0 and self.sub_c == 0:
            self._conteudo = "Desligado"
            self._sinal = "Vermelho"
            return self._conteudo
        else:
            self._conteudo = "Ligue todas as substancias"
            self._sinal = "Vermelho"
            return self._conteudo
  # -----------------------------------------------------------------------------------------------------

  # Porta do galão que despejará o fluido para o setor de mistura
    def abrir_porta(self):
        self._porta = 1

    def fechar_porta(self):
        self._porta = 0
    
    @property
    def porta(self):
        if self._porta == 0:
            return "Porta fechada"
        else:
            return "Porta aberta"

    @porta.setter
    def porta(self, valor):
        self._porta = valor

  # -----------------------------------------------------------------------------------------------------
   
  # Sensores de controle de vazão
   
    def sensor_continuo_ativo(self):
        self._evento = "Atingiu 20cm do galão"
        self.sensor_continuo_status = 1
        return self._evento
        
    def sensor_continuo_desativo(self):
        self._evento = "Abaixo de 20 centímetros"
        self.sensor_continuo_status = 0
        return self._evento

    def sensor_limite_ativo(self):
        if self.sensor_continuo_status == 0: # Sensor S1 não pode estar desligado se o sensor S2 estiver ativo
            self._evento = "Sensor S1 não está respondendo"
            self.porta = 0
            return self._evento
        else:
            self._evento = "Atingiu 40cm do galão"
            self.porta = 1
            return self._evento
            
    def sensor_limite_desativo(self):
        self._evento = "Começou a vazão"
        self.porta = 0

    def retorno(self):
        self.sensor_continuo_status = 0
        self._evento = "Reduziu para 20cm"
        return self._evento

d = Device()
d.sensor_continuo_ativo()
print(d.sensor_continuo_status)
d.sensor_continuo_desativo()
print(d.sensor_continuo_status)
```

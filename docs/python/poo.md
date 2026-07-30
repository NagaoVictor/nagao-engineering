import time

def periodo_vazao(litros, vazao):
    d = Device()
    print("O liquido teste escorre 40 litros em 15 segundos")
    galao = 0
    vazao_segundos = vazao 
    while (galao <= litros): # O Galão continuará enchendo enquanto for menor que litros
        if litros - galao < vazao_segundos: # A taxa constante de vazao (A quantidade de substancia que cai por segundo), caso sejá menor que a diferença entre o galão e a quantidade de líquido, o sistema precisa apenas respingar
            vazao_segundos = litros - galao # Aqui o vazamento virá apenas os pequenos respingos para dar a medida certa
            print(galao+vazao_segundos)
            break
        time.sleep(1)
        galao += vazao_segundos # Aumento da quantidade relacionado a taxa de vazão
        print(galao)
        if (galao >= 20) and (galao < (20+vazao_segundos)):
            d.sensor_continuo_ativo() # Ligar o sensor quando estiver em 20 Litros
            print(d._evento)
        print("-------------------")

    d.sensor_limite_desativo()
    d.sensor_continuo_desativo() # Desligar o sensor apos finalizar os 40 litros
    print(d._porta)

class Device:
    _instancia = None
    def __new__(cls):
        if cls._instancia is None:
            cls._instancia = super().__new__(cls)
        return cls._instancia
    info = """ Um galão cilíndrico contendo 3 entradas para para substâncias distintas """
    
    def __init__(self):
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

    # Porta do galão que despejará o fluido para o setor de mistura
    @property
    def porta(self):
        if self._porta == 0:
            return "Porta fechada"
        else:
            return "Porta aberta"

    @porta.setter
    def porta(self, valor):
        self._porta = valor

    # Sensores de controle de vazão
    def sensor_continuo_ativo(self):
        self._evento = "Atingiu 20cm do galão"
        self.sensor_continuo_status = 1
        return self._evento
        
    def sensor_continuo_desativo(self):
        self._evento = "Abaixo de 20 centímetros"
        self.sensor_continuo_status = 0
        return self._evento

    def sensor_limite_ativo(self, situacao):
        if self.sensor_continuo_status == 0: # Sensor S1 não pode estar desligado se o sensor S2 estiver ativo
            self._evento = "Sensor S1 não está respondendo"
            self.porta = 0
            return self._evento
        else:
            self._evento = "Atingiu 40cm do galão"
            self.porta = 1
            return self._evento
            
    def sensor_limite_desativo(self):
        self.porta = 0

d = Device()
d.sensor_continuo_ativo()
print(d.sensor_continuo_status)
d.sensor_continuo_desativo()
print(d.sensor_continuo_status)

periodo_vazao(40, 2.7)
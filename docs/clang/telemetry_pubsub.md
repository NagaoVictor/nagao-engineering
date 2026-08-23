# Telemetry PubSub (telemetry_pubsub.c)

Nos arquivos shared_counter.c e producer_consumer_sem.c, usamos memória compartilhada pura (mmap). A memória compartilhada é como um <br>
quadro-negro na parede: qualquer um pode ler ou escrever a qualquer momento, mas você precisa gerenciar rigorosamente o acesso para não <br>
apagar o que o outro escreveu (por isso usamos o semáforo).<br>

Aqui, subimos um degrau na abstração do IPC e entramos no mundo das Filas de Mensagens POSIX (mq_\*). <br>

O Conceito: O Que é uma Fila de Mensagens?
Diferente da memória compartilhada (onde os processos enxergam bytes crus), a fila de mensagens do kernel se comporta como um sistema de correio estruturado: <br>
    Mensagens Orientadas a Blocos: Os dados não são bytes soltos; eles são enviados e recebidos em pacotes discretos (mensagens) com tamanhos definidos. Se você <br>
envia uma struct de 64 bytes de telemetria, o receptor lê exatamente esses 64 bytes de uma vez só.<br>
    Bufferização Gerenciada pelo Kernel: O kernel do Linux assume a responsabilidade de enfileirar, ordenar (por prioridade) e entregar as mensagens de forma segura e atômica.<br>
    Bloqueio Automático (Blocking/Non-blocking): Se a fila estiver vazia, o receptor dorme automaticamente até que alguém envie uma mensagem. Se a fila estiver cheia, <br>
o remetente espera espaço livre. Você não precisa programar semáforos manuais, pois o próprio kernel gerencia a sincronização interna da fila.<br>

O Código em C: Simulando Telemetria Pub/Sub
Vamos criar um cenário onde um processo gera pacotes de telemetria (sensores fictícios) e envia para uma fila do sistema, enquanto outro processo consome <br>
esses dados de forma assíncrona.<br>

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <mqueue.h>
#include <sys/wait.h>
#include <time.h>

#define QUEUE_NAME  "/telemetry_queue"
#define MAX_MSG_SIZE sizeof(TelemetryPacket)

typedef struct {
    int sensor_id;
    float temperature;
    unsigned long timestamp;
} TelemetryPacket;

int main(void) {
    // 1. Configuração dos Atributos da Fila
    struct mq_attr attr;
    attr.mq_flags = 0;       // Flags de comportamento (0 = padrão bloqueante)
    attr.mq_maxmsg = 10;     // Capacidade máxima de mensagens na fila
    attr.mq_msgsize = MAX_MSG_SIZE; // Tamanho máximo de cada mensagem
    attr.mq_curmsgs = 0;

    // Remove a fila caso ela já exista de uma execução anterior abortada
    mq_unlink(QUEUE_NAME);

    // 2. Criação da Fila de Mensagens no Kernel
    // O_CREAT: Cria se não existir
    // O_RDWR: Leitura e escrita
    // 0644: Permissões de arquivo padrão
    mqd_t mq = mq_open(QUEUE_NAME, O_CREAT | O_RDWR, 0644, &attr);
    if (mq == (mqd_t)-1) {
        perror("mq_open falhou");
        exit(EXIT_FAILURE);
    }

    printf("[Sistema] Fila de mensagens %s criada com sucesso.\n", QUEUE_NAME);

    // 3. Fork para separar Produtor de Telemetria e Consumidor
    pid_t pid = fork();
    if (pid < 0) {
        perror("fork falhou");
        mq_close(mq);
        mq_unlink(QUEUE_NAME);
        exit(EXIT_FAILURE);
    }

    if (pid == 0) {
        // --- CONTEXTO DO FILHO (CONSUMIDOR / PROCESSADOR DE TELEMETRIA) ---
        // Abre a fila apenas para leitura
        mqd_t mq_consumer = mq_open(QUEUE_NAME, O_RDONLY);
        if (mq_consumer == (mqd_t)-1) {
            perror("[Consumidor] mq_open falhou");
            _exit(EXIT_FAILURE);
        }

        TelemetryPacket packet;
        unsigned int priority;

        // Loop para ler 5 pacotes de telemetria enviados pelo pai
        for (int i = 0; i < 5; i++) {
            // mq_receive bloqueia automaticamente se a fila estiver vazia
            ssize_t bytes_read = mq_receive(mq_consumer, (char *)&packet, MAX_MSG_SIZE, &priority);
            
            if (bytes_read < 0) {
                perror("[Consumidor] mq_receive falhou");
                break;
            }

            printf("[Consumidor] Recebido -> ID: %d | Temp: %.2f°C | Prioridade: %u\n", 
                   packet.sensor_id, packet.temperature, priority);
        }

        mq_close(mq_consumer);
        _exit(EXIT_SUCCESS);

    } else {
        // --- CONTEXTO DO PAI (PRODUTOR DE TELEMETRIA) ---
        // Simula a captura de dados de hardware/sensores
        for (int i = 1; i <= 5; i++) {
            TelemetryPacket packet;
            packet.sensor_id = 101;
            packet.temperature = 25.0f + (i * 1.5f);
            packet.timestamp = (unsigned long)time(NULL);

            // Envia a struct inteira para a fila. 
            // Prioridade 'i' (mensagens com maior número rodam com precedência dependendo do design)
            if (mq_send(mq, (const char *)&packet, sizeof(TelemetryPacket), (unsigned int)i) < 0) {
                perror("[Produtor] mq_send falhou");
            } else {
                printf("[Produtor] Enviado pacote %d para a fila.\n", i);
            }

            sleep(1); // Simula o intervalo de amostragem do hardware
        }

        // Aguarda o filho terminar
        wait(NULL);

        // 4. Limpeza e remoção global da fila do kernel
        mq_close(mq);
        mq_unlink(QUEUE_NAME);
        printf("[Sistema] Fila destruída e recursos limpos.\n");
    }

    return 0;
}
```
# Compilação e Execução
Como compilar e executar: <br>
Lembre-se das flags de tempo real (-lrt) e threads se necessário no seu ambiente Linux: <br>

gcc -Wall -Wextra -pthread telemetry_pubsub.c -lrt -o telemetry_pubsub <br>
./telemetry_pubsub <br>




```output
[Sistema] Fila de mensagens /telemetry_queue criada com sucesso.
[Produtor] Enviado pacote 1 para a fila.
[Consumidor] Recebido -> ID: 101 | Temp: 26.50°C | Prioridade: 1
[Produtor] Enviado pacote 2 para a fila.
[Consumidor] Recebido -> ID: 101 | Temp: 28.00°C | Prioridade: 2
[Produtor] Enviado pacote 3 para a fila.
[Consumidor] Recebido -> ID: 101 | Temp: 29.50°C | Prioridade: 3
[Produtor] Enviado pacote 4 para a fila.
[Consumidor] Recebido -> ID: 101 | Temp: 31.00°C | Prioridade: 4
[Produtor] Enviado pacote 5 para a fila.
[Consumidor] Recebido -> ID: 101 | Temp: 32.50°C | Prioridade: 5
[Sistema] Fila destruída e recursos limpos.
```
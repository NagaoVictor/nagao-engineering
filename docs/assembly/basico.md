# Assembly Básico

```assembly

section .text
global _start

_start:
    ; Passo 1: Empurrar a string "/flag" para a pilha (stack) para obter o ponteiro dela
    mov rax, 0x67616c662f    ; Equivalente a "galf/" em hex (little-endian: "/flag")
    push rax

    ; O registrador RDI precisa apontar para a string "/flag"
    mov rdi, rsp            

    ; Passo 2: Chamar sys_open(filename="/flag", flags=0 (O_RDONLY), mode=0)
    xor rax, rax            ; RAX = 0 
    mov al, 2               ; RAX = 2 (número da syscall open)
    xor rsi, rsi            ; RSI = 0 (O_RDONLY)
    syscall                 ; Dispara o kernel para abrir o arquivo

    ; O descritor do arquivo (file descriptor) retornado fica em RAX. 
    ; Precisamos passá-lo para RDI para a próxima syscall (read).
    mov rdi, rax            

    ; Passo 3: Chamar sys_read(fd, buffer, tamanho)
    ; Onde vamos guardar o conteúdo da flag? Na própria pilha!
    sub rsp, 0x50           ; Abre espaço de 80 bytes na pilha para o buffer
    mov rsi, rsp            ; RSI aponta para esse espaço vazio (onde os dados serão salvos)
    mov rdx, 0x50           ; Tamanho máximo que queremos ler (80 bytes)
    xor rax, rax            ; RAX = 0 (número da syscall read)
    syscall                 ; Dispara o kernel para ler do arquivo para a pilha

    ; Passo 4: Chamar sys_write(stdout, buffer, tamanho)
    ; O descritor do stdout (saída padrão na tela) é 1.
    mov rdi, 1              ; RDI = 1 (stdout)
    ; O RSI já aponta para onde a flag foi lida na pilha, então podemos mantê-lo!
    mov rdx, rax            ; O sys_read retorna em RAX a quantidade exata de bytes lidos. Usamos isso como tamanho!
    mov al, 1               ; RAX = 1 (número da syscall write)
    syscall                 ; Dispara o kernel para escrever a flag na tela

    ; Passo 5: Chamar sys_exit(0) para o programa fechar bonitinho
    xor rdi, rdi            ; Status de saída = 0
    mov al, 60              ; RAX = 60 (número da syscall exit no x86_64)
    syscall                 ; Fim da execução
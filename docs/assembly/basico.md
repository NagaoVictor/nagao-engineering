# Assembly Básico



```assembly

section .text

global _start



_start:

&#x20;   ; Passo 1: Empurrar a string "/flag" para a pilha (stack) para obter o ponteiro dela

&#x20;   ; Usamos 8 bytes (divididos em partes porque o push aceita inteiros)

&#x20;   mov rax, 0x67616c662f    ; Equivalente a "galf/" em hex (invertido por causa do formato little-endian: "/flag")

&#x20;   push rax

&#x20;   

&#x20;   ; O registrador RDI precisa apontar para a string "/flag"

&#x20;   mov rdi, rsp            

&#x20;   

&#x20;   ; Passo 2: Chamar sys_open(filename="/flag", flags=0 (O_RDONLY), mode=0)

&#x20;   xor rax, rax            ; RAX = 0 (mas na verdade para open a syscall é 2)

&#x20;   mov al, 2               ; RAX = 2 (número da syscall open)

&#x20;   xor rsi, rsi            ; RSI = 0 (O_RDONLY)

&#x20;   syscall                 ; Dispara a interrupção para o Kernel abrir o arquivo

&#x20;   

&#x20;   ; O descritor do arquivo (file descriptor) retornado fica em RAX. Vamos movê-lo para RDI.

&#x20;   mov rdi, rax            ; RDI agora guarda o descritor do arquivo da flag.



&#x20;   ; Passo 3: Chamar sys_read(fd, buffer, tamanho)

&#x20;   -- (continuamos daqui na próxima etapa)

´´´




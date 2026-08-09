# Assembly Básico

```asm

section .text<br>
global _start<br>

_start:
&#x20;   ; Passo 1: Empurrar a string "/flag" para a pilha (stack) para obter o ponteiro dela <br>
&#x20;   ; Usamos 8 bytes (divididos em partes porque o push aceita inteiros)<br><br>
&#x20;   mov rax, 0x67616c662f    ; Equivalente a "galf/" em hex (invertido por causa do formato little-endian: "/flag")
&#x20;   push rax<br>

&#x20;   ; O registrador RDI precisa apontar para a string "/flag"<br>
&#x20;   mov rdi, rsp    <br>        

&#x20;   ; Passo 2: Chamar sys_open(filename="/flag", flags=0 (O_RDONLY), mode=0)<br>
&#x20;   xor rax, rax            ; RAX = 0 (mas na verdade para open a syscall é 2)<br>
&#x20;   mov al, 2               ; RAX = 2 (número da syscall open)<br>
&#x20;   xor rsi, rsi            ; RSI = 0 (O_RDONLY)<br>
&#x20;   syscall                 ; Dispara a interrupção para o Kernel abrir o arquivo<br>

&#x20;   ; O descritor do arquivo (file descriptor) retornado fica em RAX. Vamos movê-lo para RDI.<br>
&#x20;   mov rdi, rax            ; RDI agora guarda o descritor do arquivo da flag.<br>

&#x20;   ; Passo 3: Chamar sys_read(fd, buffer, tamanho)<br>
&#x20;   -- (continuamos daqui na próxima etapa)<br>




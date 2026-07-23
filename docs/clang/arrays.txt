## Estruturas de Array

```c
#include <stdio.h>

int main(){
  int values[5] = {10, 20, 30, 40 ,50};

  for (int i = 0; i < 5; i ++){
    printf("Values[%d] = %d\n", i, values[i]);
  }
  return 0;

}
```


```c
#include <stdio.h>

int main(){
  int squares[10];
  
  for (int i = 0; i < 10; i++){
    squares[i] = i * i;
  }
  
  for (int i = 0; i < 10; i++){
    printf("%d ", squares[i]);
  }
  
  printf("\n");
  return 0;
}
```

```c
#include <stdio.h>

int main(){
  int numbers[] = {1, 2, 3, 4, 5};
  int n = sizeof(numbers)/ sizeof(numbers[0]);
  int sum = 0;
  
  for (int i = 0; i < n; i++){
    sum += numbers[i];
  }
  
  printf("Sum = %d\n", sum);
  return 0;
}
```

```c
#include <stdio.h>

int main(){
  int values[] = {8, 12, 3, 99, 17};
  int n = sizeof(values) / sizeof(values[0]);
  int max = values[0];
  
  for (int i = 1; i < n; i++){
    if (values[i] > max){
      max = values[i];
    }

  }
  
  printf("Maximum values = %d\n", max);
  return 0;

}
```

```c
#include <stdio.h>

int main(){
  int values[] = {10, 20, 30, 40, 50};
  int target = 30;
  int n = sizeof(values) / sizeof(values[0]);
  int found = -1;

  for (int i = 0; i < n; i++){
    if (values[i] == target){
      found = i;
      break;
    }
  }

  printf("Indice = %d\n", found);
  
  return 0;
}
```

```c
#include <stdio.h>

int main(){
  char *commands[] = {
    "forward", "backward", "left", "right", "stop"
  };
  
  int n = sizeof(commands) / sizeof(commands[0]);

  for (int i = 0; i < n; i ++){
    printf("%s\n", commands[i]);
  }
  return 0;

}
```

```c
#include <stdio.h>

typedef struct {
  char name[20];
  int score;
} Player;


int main(){
  Player players[] = {
    {"Victor1", 100},
    {"Victor2", 150},
    {"Victor3", 120}
  };

  int n = sizeof(players)/sizeof(players[0]);
  
  for (int i = 0; i < n; i++){
    printf("%s -> %d\n", players[i].name, players[i].score);
  }
  return 0;

}
```

```c
#include <stdio.h>

#define SIZE 5

int main(){
  int buffer[SIZE] = {0};
  int head = 0;
  
  for (int i = 1; i <= 10; i++){
    buffer[head] = i;
    head = (head + 1) % SIZE;
  }

  for (int i = 0; i < SIZE; i++){
    printf("%d ", buffer[i]);
  }
  printf("\n");
  return 0;

}
```

```c
#include <stdio.h>

int main(void){
  int matrix[3][3] = {
    {1,2,3},
    {4,5,6},
    {7,8,9}
  };

  for (int i = 0; i < 3; i++){
    for (int j = 0; j < 3; j++){
      printf("%d ", matrix[i][j]);
    }
    printf("\n");
  }
  
  return 0;
}
```

```c
#include <stdio.h>
#include <time.h>

#define MAX_EVENTS 10

typedef struct {
  char type;
  long timestamp;
} Event;

int main(){
  Evenr queue[MAX_EVENTS];
  int count = 0;

  queue[count++] = (Event){'F', time(NULL)};
  queue[count++] = (Event){'L', time(NULL)};
  queue[count++] = (Event){'S', time(NULL)};

  for (int i = 0; i < count; i++){
    printf("Event %c in to %ld\n", queue[i].type, queue[i].timestamp);
  }
  return 0;
}
```

```c

```

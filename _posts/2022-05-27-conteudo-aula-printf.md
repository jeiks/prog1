---
title: Conteúdo da Aula - 27/05 (printf)
layout: post
---

# Conteúdo da aula
Nessa aula (dia 27/05), construímos um simples programa em C e trabalhamos com escritas na tela.
Segue, com exemplos, o que vimos em sala e mais alguns detalhes.

Segundo o seguinte código:

{% highlight c linenos %}
#include <stdio.h>
 
int main() {
    printf("Oi mundo!\n");
    return 0;
}
/* comentário longo */
// comentário de linha
{% endhighlight %}

**Linha 1**: ```<stdio.h>``` é a informação de qual biblioteca que fornecerá as funções de entrada e saída. Nesse caso, o ```printf()``` (usado na linha 4).
> O uso do ```#include``` adiciona funcionalidade aos programas em C.

**Linha 2**: Uma linha em branco. A linguagem C ignora a linha em branco. Mas nós o usamos para tornar o código mais legível.
> A legibilidade é muito importante para a manutenção de códigos e também para ajudar no momento da implementação.

**Linha 3**: qualquer *identificador* que é seguido por chaves é uma função em C. Ao usar uma função que já está pronta, como o ```printf```, note que não há chaves após os parênteses. Mas o criar uma função, como o ```main```, note que há chaves ```{}```. Elas informam o *escopo* da função, ou seja, o código que pertence a função está após ```{``` e antes de ```}```.<br>
> *A função ```main``` tem papel importante e principal na criação dos nossos programas, pois é ela que será executada pelo sistema operacional (Windows ou Linux). Se não existir essa função em nossos códigos, executar o programa não será possível.*

**Linha 4**: ```printf()``` é uma função usada para imprimir texto na tela. Em nosso exemplo, ele produzirá o "Oi mundo!" seguido de ENTER na tela.<br>
> O ```printf()``` sempre deve seguir o seguinte modelo:<br>
  ```printf("FORMATO", dado1, dado2, ..., dadoN);```<br>
  Assim, sempre você deverá colocar uma string de **formato** e, depois, as contantes ou variáveis para ele imprimir na tela. Exemplos:<br>
  ```printf("Nome: jacson");```<br>
  ```printf("Nome: %s", "jacson");```<br>
  ```printf("Nota: 10");```<br>
  ```printf("Nota: %d", 10);```<br>
  ```printf("Nome: Jacson, Nota: 10");```<br>
  Note que os dados (dado1, dado2, ..., dadoN) devem sempre ter um "%" referente na string **formato**:<br>
  ```printf("Nome: %s Nota: %d", "jacson", 10);``` ("jacson" para %s; e 10 para %d)<br>

**Linha 5**: O ```return 0``` termina a função e retorna esse valor ao sistema operacional. Nesse caso, está retornando ```0``` simbolizando que o programa não apresentou erros.
> Se o programa der algum erro, como divisão por zero ou acesso a um local proibido, o programa será terminado antes e outro número, diferente de zero, será retornado.

**Linha 6**: Não se esqueça de adicionar ess colchete de fechamento ```}```, pois é ele que encerra a função principal, seu escopo.

**Linha 7**: Tudo que está após ```/*``` e antes de ```*/``` é um comentário que pode se estender por várias linhas. Qualquer comentário em C é ignorado pelo compilador e não fará parte de seu programa, só de seu código fonte.
> Exemplo de comentário maior:<br>
  ```/* O pessoal da sala é muito dedicado```<br>
  ```e está animado a aprender a programar.```<br>
  ```Por isso, farão vários exercícios todos os dias. */```

**Linha 8**: Comentário simples. Tudo após o ```//``` e o final da linha será considerado um comentário
> Exemplo de comentário em duas linhas usando ```//```:<br>
  ```// primeira linha comentando```<br>
  ```// segunda linha comentando```

**Observe que**: Toda instrução C termina com um ponto e vírgula ```;```. Isso é usado para indicar onde acabou cada instrução. Se estiver faltando algum ponto e vírgula, o programa não será compilado e o compilador mostrará um erro na tela.

**Lembre-se:(( o compilador ignora os espaços em branco que não estão dentro de uma string. No entanto, várias linhas tornam o código mais **legível**.
> O corpo de int main()também pode ser escrito como:<br>
  ```int main(){printf("Hello World!");return 0;}```


## Um pouco mais do *printf()*

O ```printf()``` aceita muitos especificadores (formados na combinação com um sinal de porcentagem ```%```) de dados para serem impressos na tela. A melhor forma de aprender isso é praticando.<br>
Por isso, compile o código abaixo, o execute, mude seus valores para entender melhor e, então:
* crie uma tabela explicando cada especificador apresentado.

{%highlight c linenos%}
#include <stdio.h>

int main()
{
    int aux;
    printf("Formato  %%c: %c\n", 'j');
    printf("Formato  %%s: %s\n", "Jacson");
    printf("Formato  %%d: %d\n", 7);
    printf("Formato  %%d: %d\n", -7);
    printf("Formato  %%i: %i\n", 7);
    printf("Formato  %%i: %i\n", -7);
    printf("Formato  %%u: %u\n", 7);
    printf("Formato  %%u: %u\n", -70000);
    printf("Formato  %%o: %o\n", 1023);
    printf("Formato  %%o: %#o\n", 1023);
    printf("Formato  %%f: %f\n", 1023);
    printf("Formato  %%f: %f\n", 1023.0);
    printf("Formato  %%x: %x\n", 1023);
    printf("Formato %%#x: %#x\n", 1023);
    printf("Formato %%#X: %#X\n", 1023);
    printf("Formato  %%e: %e\n", 1023);
    printf("Formato  %%e: %e\n", 1023.0);
    printf("Formato  %%e: %e\n", 1023.);
    printf("Formato  %%E: %E\n", 1023.);
    printf("Formato  %%g: %g\n", 1023.3);
    printf("Formato  %%G: %G\n", 198e-7);
    printf("Formato  %%G: %G\n", 198e-3);
    printf("Formato  %%p: %p\n", 21232);
    printf("Formato  %%p: %p\n", &aux);
    printf("Formato  %%%%: %%\n");
}
{%endhighlight%}

Além disso, também vimos que os especificadores aceitam incrementos.<br>
No código acima, por exemplo, você pode notar a tralha ```#``` (***number***) antes do **x** em ```%x```. Ele adiciona o *0x* antes do número, para indicar que é hexadecimal.<br>
Para entender melhor, compile o código abaixo, o execute e mude seus valores. Então:
* para cada linha que possui um especificador, explique qual modificação é causada pelo incremento adicionado:

{%highlight c linenos%}
#include <stdio.h>

int main()
{
    printf("Formato %%c:\n");
    printf(" (%c, %c)\n", 'j', 'a');
    printf(" (%10c, %10c)\n", 'j', 'a');
    printf(" (%-10c, %-10c)\n", 'j', 'a');
    printf("\n");
    printf("Formato %%s:\n");
    printf(" (%s, %s)\n", "Jacson", "Silva");
    printf(" (%10s, %10s)\n", "Jacson", "Silva");
    printf(" (%-10s, %-10s)\n", "Jacson", "Silva");
    printf("\n");
    printf("Formato %%d:\n");
    printf(" (%d, %d)\n", 7, 7);
    printf(" (%10d, %10d)\n", 7, 7);
    printf(" (%-10d, %-10d)\n", 7, 7);
    printf(" (%010d, %010d)\n", 7, 7);
    printf("\n");
    printf("Formato  %%f:\n");
    printf(" (%f, %f)\n", 77.3, 77.3);
    printf(" (%.2f, %.2f)\n", 77.3, 77.3);
    printf(" (%10.2f, %10.2f)\n", 77.3, 77.3);
    printf(" (%-10.2f, %-10.2f)\n", 77.3, 77.3);
    printf(" (%010.2f, %010.2f)\n", 77.3, 77.3);
    printf("\n");
}
{%endhighlight%}

## Um pouco de constantes e variáveis

Nos ```printf()``` acima, utilizamos as *strings* e números de forma explícita. Mas podemos utilizar variáveis:

{%highlight c linenos%}
#include <stdio.h>

int main()
{
    char nome[] = "jacson";
    float nota = 9.7;
    printf("Nome: %s, Nota: %.2f\n", nome, nota);
}
{%endhighlight%}

Essas variáveis podem ter seus valores modificados:

{%highlight c linenos%}
#include <stdio.h>
// para trabalhar com strings, temos que usar as funções da biblioteca seguinte:
#include <string.h>

int main()
{
    char nome[] = "jacson";
    float nota = 9.7;
    
    printf("Nome: %s, Nota: %.2f\n", nome, nota);
    
    // copiando novo valor para a variável "nome":
    strcpy(nome, "silva");
    // modificando a variável "nota":
    nota = 7;
    printf("Nome: %s, Nota: %.2f\n", nome, nota);
}
{%endhighlight%}

E para trabalhar com constantes, temos que adicionar a palavra reservada ```const``` antes da declaração da variável:

{%highlight c linenos%}
#include <stdio.h>

int main()
{
    const char nome[] = "jacson";
    const float nota = 9.7;
    printf("Nome: %s, Nota: %.2f\n", nome, nota);
}
{%endhighlight%}

Diferente das variáveis, os valores aqui não podem ser alterados. O compilador já provocará um erro para informar a atribuição de um novo valor a uma constante.<br>
Para verificar isso, tente compilar o seguinte código:

{%highlight c linenos%}
#include <stdio.h>
// para trabalhar com strings, temos que usar as funções da biblioteca seguinte:
#include <string.h>

int main()
{
    const char nome[] = "jacson";
    const float nota = 9.7;
    
    printf("Nome: %s, Nota: %.2f\n", nome, nota);
    
    // copiando novo valor para a variável "nome":
    strcpy(nome, "silva");
    // modificando a variável "nota":
    nota = 7.0;
    printf("Nome: %s, Nota: %.2f\n", nome, nota);
}
{%endhighlight%}

Também há outra propriedade que podemos utilizar na linguagem C: as *macros*.<br>
Uma *macro* é definida pela diretiva ```#define```:

{%highlight c linenos%}
#include <stdio.h>
#define NOME "Jacson"
#define NOTA 9.7

int main()
{
    printf("Nome: %s, Nota: %.2f\n", NOME, NOTA);
}
{%endhighlight%}
<p style='margin-top: -10px'>Saída gerada:</p>
{%highlight sh%}
Nome: Jacson, Nota: 9.70
{%endhighlight%}

**Obs.**: macros não são constantes. As macros são utilizadas pelo pré-compilador, isto é, antes do programa ser compilado, um programa que auxilia o compilador faz a troca de todas as macros pelo valor que você colocou na frente de seu identificador. Só então que o programa é compilado. Note o seguinte exemplo:

{%highlight c linenos%}
#include <stdio.h>
#define NOME "Jacson"
#define NOME_VAR_NOTA nota
#define VERIFICA_IDADE(X) (X>=18)?"maior de idade":"menor de idade"
// o que eu usei acima é chamado de "E TERNÁRIO", ele funciona assim:
// (CONDICIONAL)?VALOR_SE_CONDICIONAL_DER_VERDADEIRO:VALOR_SE_CONDICIONAL_DER_FALSO

int main()
{
    float nota = 7.0;
    printf("O %s é %s\n", NOME, VERIFICA_IDADE(36));
    printf("Nota: %.2f\n", NOME_VAR_NOTA);
}
{%endhighlight%}

Saída gerada:

{%highlight sh%}
O Jacson é maior de idade
Nota: 7.00
{%endhighlight%}

<br>
<hr/>
> **Opcional**:<br>
  Antes do programa ser compilado, essas macros ```#define``` e também as macros ```#include``` são processadas pelo pré-processador C, que as substitui pelo código necessário.<br>
  Vamos ver isso funcionando fazendo esse exemplo:
>  {%highlight c%}
    //arquivo teste.c
    #include <stdio.h>
    #define NOME "Jacson"
    #define NOTA 9.7

    int main()
    {
        printf("Nome: %s, Nota: %.2f\n", NOME, NOTA);
    }
  {%endhighlight%}
>  E vamos executar o **pré-processador** ao invés do **gcc**:<br>
  ```cpp teste.c```<br>
  E ele produzirá um código parecido com este:<br>

> {%highlight c%}
  //muitas linhas de código
  //...  
  # 6 "teste.c"
   int main()
    {
        printf("Nome: %s, Nota: %.2f\n", "Jacson", 9.7);
    }
  {%endhighlight%}
> Você pode ver que o ```#define``` NOME e NOTA não existem mais no código que será compilado.
<hr/>

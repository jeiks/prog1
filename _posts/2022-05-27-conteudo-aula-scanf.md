---
title: Conteúdo da Aula - 27/05 (extra, scanf)
layout: post
---
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

# Conteúdo Extra da aula *scanf()*
O ```scanf()``` é a forma mais comum de lermos dados em C.
Seu funcionamento é parecido com o printf. Porém, é necessário que entendamos um pouco de variáveis e de endereços de memória para que fique mais fácil de utilizá-lo.<br/>
Siga o raciocínio com o seguinte código (vou evitar comentários já colocados no post do ```printf```):

{% highlight c linenos %}
#include <stdio.h>
 
int main() {
    int idade;
    printf("Digite sua idade: ");
    scanf("%d", &idade);
    return 0;
}
{% endhighlight %}

**Linha 1**: ```<stdio.h>``` é a informação de qual biblioteca que fornecerá as funções de entrada e saída. Nesse caso, o ```printf()``` (usado na linha 5 e o ```scanf()``` (usado na linha 6).

**Linha 4**: aqui ocorre a declaração da variável ```idade```. O ```scanf()``` sempre vai ler um conteúdo para uma variável, por isso, devemos sempre declarar as variáveis necessárias que iremos trabalhar.
> Ao declarar uma variável, utilizamos nomes reservados pela linguagem de programação.
  Esses nomes determinam que tipo de variável será. Nesse exemplo, utilizamos ```int```.
  <br/>A variável também informa ao compilador qual é o tamanho que deve ser alocado na memória para ela.
  <br/>Nesse exemplo, é um inteiro e possui 4 bytes na arquitetura 64 bits (se quiser verificar isso, tem um programinha abaixo, no *Extra 1*).
  <br/>Como o inteiro tem 4 bytes, sendo cada byte de tamanho 8 bits e esse tipo de dado ```int``` possui sinal (primeiro bit 0: positivo, primeiro bit 1: negativo), temos 4*8-1 bits para representar os números. Assim, como cada bit pode representar dois valores, temos:<br/>
  $$ 2^{4*8-1} = 2147483648 $$, ou seja, ele consegue representar 2147483648 números sem contar o sinal. <br/>Por isso, sua representação de números positivos é $$ [0, ..., 2147483647] $$ (como o zero está no meio, são 2147483648 números).
  <br/>Porém, note que não temos a representação do zero negativo (graças ao [complemento de 2](https://www.youtube.com/watch?v=tbMTOYlf92M)) e, por isso, a representação de números negativos é $$ [-2147483648, ..., -1] $$.

*Memória*: ao ler a declaração dessa variável, o compilador toma conhecimento que você precisa de 4 bytes na memória para essa variável.<br/>
Para facilitar, pense da seguinte forma:
1. são alocados 4 bytes na memória para essa variável;
2. se o programa deseja escrever na memória, ele deve indicar qual é o endereço desejado.
<br/> Para isso, deve-se colocar um ```&``` (e comercial) antes do identificador (no exemplo, ```idade```, devemos colocar ```&idade```) (exemplo no *Extra 2*).
3. se o programa deseja ler da memória, ele deve indicar qual é o rótulo desejado (no exemplo, simplesmente utilizar ```idade```).

**Linha 5**: o ```scanf()``` não foi feito para imprimir na tela. Por isso, devemos utilizar o ```printf()``` sempre que quisermos imprimir algo na tela.

**Linha 6**: o ```scanf()``` utiliza o formato e as variáveis da mesma forma que o ```printf()```, sendo:
<br/>```scanf("string com o formato", variavel1, ..., variavelN)```
> Por isso:
  * para ler um inteiro, deve utilizar ```%d```;
  * para ler um float, deve utilizar ```%f```;
  * etc.
> 
> Mas há diferenças, sendo as principais:
> * você não pode fazer a leitura para uma constante, só para uma variável. 
> * você deve sempre informar qual é o endereço da variável, ou seja, sempre usar o ```&```.
  Por isso, aqui, a variável ```idade``` veio escrita como ```&idade```. Isso sempre deve ser feito com as variáveis do programa<br/>(obs.: no caso de vetores, que ainda será estudado, isso será um pouquinho diferente).

***Agora, como exercício, tente fazer um programa para ler diferentes tipos de variáveis***
  
### Extra 1

O código explicado abaixo serve para verificar o tamanho e o limite de um inteiro ```int```. Execute-o para conferir.

{% highlight c %}
// adicionando a biblioteca de entrada e saída:
#include <stdio.h>
// adicionando a biblioteca de operações matemáticas:
// vamos usar o pow(), onde pow(2,3) = 2^3 = 8
#include <math.h>

int main()
{
    int numero;
    // verificando seu tamanho em bytes com a função sizeof()
    // e multiplicando por 4 para saber quantos bits tem (em %ld, o "l" significa longo):
    printf("Tamanho da variável 'numero': %ld bytes = %ld bits\n",
            sizeof(numero), sizeof(numero)*8);
    // atribuindo o maior valor possível para a variável numero:
    numero = (int) pow(2, 4*8-1);
    printf("Valor existente em 'numero':  %d\n", numero);
    // vamos incrementar com mais 1 o valor armazenado em numero:
    numero++;
    // vamos ver o que ocorreu:
    printf("Valor existente em 'numero': %d\n", numero);
}
{% endhighlight %}

Saída na tela:
{% highlight sh %}
Tamanho da variável 'numero': 4 bytes = 32 bits
Valor existente em 'numero':  2147483647
Valor existente em 'numero': -2147483648
{% endhighlight %}

### Extra 2

O código explicado abaixo serve para que possamos ver o endereço e o valor das variáveis na memória do computador. Execute-o para conferir.

{% highlight c %}
// adicionando a biblioteca de entarda e saída:
#include <stdio.h>

int main()
{
    // declarando que vamos utilizar um inteiro:
    int num_int;
    // decalrando que vamos utilizar um ponto flutuante:
    float num_float;

    printf("Tamanho da variável 'num_int'   na memória: %ld bytes\n"  , sizeof(num_int));
    printf("Tamanho da variável 'num_float' na memória: %ld bytes\n\n", sizeof(num_float));

    printf("Escreva um inteiro: ");
    scanf("%d", &num_int);

    printf("Escreva um float: ");
    scanf("%f", &num_float);

    printf("\nO 'um_int' está na:");
    printf("\n * posição de memória: %p", &num_int);
    printf("\n * valor dentro dessa posição de memória: %d", num_int);
    printf("\n");
    printf("\nO 'um_float' está na:");
    printf("\n * posição de memória: %p", &num_float);
    printf("\n * valor dentro dessa posição de memória: %.1f", num_float);
    printf("\n");
}
{% endhighlight %}

{% highlight sh %}
Tamanho da variável 'num_int'   na memória: 4 bytes
Tamanho da variável 'num_float' na memória: 4 bytes

Escreva um inteiro: 10
Escreva um float: 10.7

O 'um_int' está na:
 * posição de memória: 0x7ffc2b110160
 * valor dentro dessa posição de memória: 10

O 'um_float' está na:
 * posição de memória: 0x7ffc2b110164
 * valor dentro dessa posição de memória: 10.7
{% endhighlight %}

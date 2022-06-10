---  
title: Laços de Repetição  
date: 2022-06-10 15:10:00 -0300  
layout: post  
---

Estudem o capítulo 3 do [livro texto](https://drive.google.com/file/d/12pJXzerYzzJrkV_CLCAUX0K6ucX7EI51/view?usp=sharing).

Adicionalmente, segue uma explicação adicional. Por favor, tentem compilar e executar cada um dos exemplos de código.

Muitas vezes, em programas em **C**, torna-se necessário repetir trechos de código por uma certa quantidade de vezes. Algumas vezes, conhecemos a quantidade de repetições (iterações), mas outras vezes a quantidade de iterações é determinada somente na hora que o programa está executando.

Suponham, por exemplo, o problema que fizemos em sala, onde deve-se calcular o caixa da semana para o vovô Inácio, recebendo o valor de cada dia:
{% highlight c %}
#include <stdio.h>
int main() {
    float recebido, pagamentos, soma, auxilio;
    recebido = 0;
    pagamentos = 0;
    soma = 0;

    // Segunda-Feira:
    printf("Digite o valor recebido na segunda-feira: ");
    scanf("%f", &auxilio);
    recebido += auxilio;
    printf("Digite o valor pago na segunda-feira: ");
    scanf("%f", &auxilio);
    pagamentos += auxilio;
    // soma:
    soma = recebido - pagamentos;
    printf("[Valor do caixa atual: R$ %.2f]\n", soma);
    // avisos:
    if (soma > 2000) {
        printf("AVISO:\n");
        printf("  Total de dinheiro recebido: R$ %.2f\n", recebido);
        printf("  Total de pagamentos realizados: R$ %.2f\n", pagamentos);
        printf("  Saldo atual: R$ %.2f\n", soma);
    } else if (soma < -500) {
        printf("AVISO:\n");
        printf("  Total de dinheiro recebido: R$ %.2f\n", recebido);
        printf("  Total de pagamentos realizados: R$ %.2f\n", pagamentos);
        printf("  Saldo atual: R$ %.2f\n", soma);
    }
    
    // Terça-Feira:
	// mesmo código de cima, mas para terça feira
	
	// Repete o código de novo para o resto da semana
}
{% endhighlight %}

Há três formas de iterações de códigos em **C**.
{% highlight c %}
// utilizando o for:
for (valor_inicial; teste_condicional; incremento_ou_decremento)
{
	escopo a executar
}

// utilizando o while:
while (teste_condicional)
{
	escopo a executar
}

// utilizando do-while
do {
	escopo a executar
} while(teste_condicional);
{% endhighlight %}

Para ficar mais fácil de gravar, traduza para o português as palavras chaves (for=para;while=enquanto;do=faça) e pense assim:
* laço ```for```:
	* *para* o ```valor_inicial``` igual a um número, eu repito:
		* se o ```teste_condicional``` for verdadeiro:
			* executo o ```escopo a executar```,
			* faço o ```incremento_ou_decremento```
		* senão, saio do laço.
* laço ```while```:
	* *enquanto* o ```teste_condicional``` for verdadeiro, repita:
		* ```escopo a executar```
* laço ```do-while```:
	* *faça* (ou execute) repetidamente:
		* o ```escopo a executar```
		* se ```teste_condicional``` for falso, saia do laço.

No exemplos abaixo, vamos simplesmente escrever na tela os números de 1 à 10 utilizando cada um desses tipos de laços. Tente entender como é a execução de cada um. Para isso, anote a saída na tela e o valor das variáveis em cada iteração (repetição do laço).
{% highlight c %}
// Utilizando o for:
#include <stdio.h>
int main()
{
	int num = 1, i;
	for (i=0;i<5;i++)
	{
		printf("Numero: %d\n", num++);
	}
}

// Utilizando o while:
#include <stdio.h>
int main()
{
	int num = 1, i=0;
	while (i < 5)
	{
		printf("Numero: %d\n", num++);
		i++;
	}
}

// Utilizando o do-while:
#include <stdio.h>
int main()
{
	int num = 1, i=0;
	do
	{
		printf("Numero: %d\n", num++);
		i++;
	}while (i < 5);
}
{% endhighlight %}

A principal diferença entre eles é que o ```for``` já possui o incremento em um de seus argumentos. Já o ```while``` e o ```do-while``` necessitam que você controle o valor da variável que será controlada no ```teste_condicional```. Se você não fizer esse controle, o seu programa ficará agarrado executando o ```escopo a executar``` para sempre (ou até que você peça o sistema operacional para finalizar o programa).

Assim, o programa para ajudar o vovô Inácio pode ser refeito da seguinte forma:

{% highlight c %}
#include <stdio.h>
int main() {
    float recebido, pagamentos, soma, auxilio;
    int dia;
    recebido = 0;
    pagamentos = 0;
    soma = 0;

	printf("Por favor, considere:\n");
	printf("1: segunda-feira\n");
	printf("2: terça-feira\n");
	printf("3: quarta-feira\n");
	printf("4: quinta-feira\n");
	printf("5: sexta-feira\n");
	
	for (dia=1 ; dia<=5; dia++)
	{
		printf("\n[Dia: %d]\n", dia);
		printf("  Digite o valor recebido: ");
		scanf("%f", &auxilio);
		recebido += auxilio;
		printf("  Digite o valor dos pagamentos: ");
		scanf("%f", &auxilio);
		pagamentos += auxilio;
		// soma:
		soma = recebido - pagamentos;
		printf("[Valor do caixa atual: R$ %.2f]\n", soma);
		// aviso:
		if (soma > 2000 || soma < -500) //podemos melhorar aqui também
		{
			printf("===== AVISO: =====\n");
			printf("  Total de dinheiro recebido: R$ %.2f\n", recebido);
			printf("  Total de pagamentos realizados: R$ %.2f\n", pagamentos);
			printf("  Saldo atual: R$ %.2f\n", soma);
			printf("==================\n");
		}
	}
}
{% endhighlight %}

Como podemos ver, o código ficou bem menor e com menos repetições.

Tente reescrever esse código uma vez utilizando ```for``` e outra utilzando ```do-while```.

Ah.. note que as repetições podem ser incrementando ou decrementando as variáveis. Exemplo:
{% highlight c %}
#include <stdio.h>
// Incrementando:
int main()
{
	int num;
	for (num=0 ; num<5 ; num++)
	{
		printf("Numero: %d\n", num);
	}
}
{% endhighlight %}

{% highlight c %}
#include <stdio.h>
// Decrementando:
int main()
{
	int num;
	for (num=5 ; num>0 ; num--)
	{
		printf("Numero: %d\n", num);
	}
}

{% endhighlight %}

Execute esses programas e verifique a saída de cada um na tela.


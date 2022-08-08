---
title:  Estruturas, funções e ponteiros
date:   2022-08-01 18:39:09 -0300
layout: post
---

Os estudos, podem seguir os seguintes livros:
- **ref1**: [Aguiar, M. O., Silva, R. F. *Linguagem C: Introdução ao C em 10 aulas*.](https://drive.google.com/file/d/12pJXzerYzzJrkV_CLCAUX0K6ucX7EI51/view?usp=sharing)
- **ref2**: Paul Deitel, Harvey Deitel. *C: Como Programar*. Pearson, 2011.

Capítulos:
* **Estruturas**: Cap 6 da **ref1**. E sessões 10.1 à 10.7 da **ref2**.<br>Exercícios:
    1. Diga se cada uma das seguintes afirmações é verdadeira ou falsa. Se falsa, explique porquê.
        - As estruturas podem conter apenas um tipo de dado.
        - O identificador (que vai após as chaves "}") de uma estrutura é opcional.
        - Os membros de diferentes estruturas devem ter nomes exclusivos.
        - A palavra-chave typedef é usada para definir novos tipos de dados.
        - As estruturas são sempre passadas a funções por meio de chamadas por referência.
    1. Faça:
        - Defina uma estrutura chamada *objeto* contendo as variáveis:
            *numero*, do tipo *int*; array (vetor)
            *nome*, do tipo *char*, que pode ter o comprimento de até 25 caracteres.
        - Utilize o *typedef* para nomear esse novo tipo de dado com o identificador *tipoObjeto*.
        - Declare uma variável estática do tipo de dado *tipoObjeto*.
        - Declare uma variável dinâmica (ponteiro e *malloc*) do tipo de dado *tipoObjeto*.
        - Declare um vetor estático de 3 posições do tipo de dado *tipoObjeto*.
        - Declare um vetor dinâmico (ponteiro e *malloc*) de 3 posições do tipo de dado *tipoObjeto*.
        - Faça a leitura de um número e um nome para cada uma das variáveis anteriores.
        - Escreva na tela o valor dessas variáveis.
    1. Faça:
        - Crie uma estrutura para armazenar dados de um livro. Ela deve ter o nome *tipoLivro* e deve ser composta de: *nome* do tipo char, *autor* do tipo char e *ano* de publicação do tipo int.
        - Agora, crie uma estrutura para armazenar uma sessão de livros composta de: *nome* (tipo char) da sessão, *quantidade* (tipo int) de livros armazenados na sessão e um vetor (tipo *tipoLivro*) de 20 livros (é o máximo de livros que poderão ser armazenados na sessão).
        - Crie um programa para perguntar o ome da sessão, quantos livros deseja armazenar na sessão e ler todas as informações necessárias de cada livro.
        - Depois, escreva as informações lidas na tela.
* **Funções**: Capítulo 7 da **ref1**. E capítulo 5 da **ref2**.<br>Exercícios:
    1. Responda as perguntas abaixo para o programa a seguir:
        ```c
        #include <stdio.h>
        int cubo(int y) {
            return y * y;
        }
        void main() {
            int x;
            for (x = 1; x <= 5; x++)
                printf("%d\n", cubo(x));
        }
        ```
        - O que é escopo?
        - Qual o escopo da variável x?
        - Qual o escopo da variável y?
        - De onde pode ser acessada a variável x?
        - De onde pode ser acessada a variável y?
        - De onde pode ser chamada a função cubo?
        - Quais os valores impressos na tela?
    1. Crie uma função para calcular a hipotenusa de um triângulo. Ela deve receber dois argumentos (lado1 e lado2: ponto flutuante, i.e., float) e deve retornar um ponto flutuante referente ao valor da hipotenusa.
    1. Crie uma função para retornar o menor valor entre três inteiros.
    1. Crie uma função que não recebe nenhum argumento e não retorna nenhum valor. Ela deve só escrever uma mensagem na tela.
    1. Dada o seguinte tipo de dado já definido:
        ```c
        typedef struct {
            char nome[20];
            float peso, altura;
        } tipoIMC;
        ```
        - Crie uma função que receba uma variável dessa estrutura em seu argumento e que retorne o valor do IMC.
        - Crie uma função que receba uma variável dessa estrutura em seu argumento, mas passada por referência (i.e., usando ponteiro) e que retorne o valor do IMC.
        - Crie uma função que seja capaz de receber um vetor do tipo *tipoIMC* e que retorne a média dos IMCs (calculada por uma das funções criadas acima) calculada sobre todos os componentes do vetor.
        - Crie uma função que seja capaz de receber um vetor do tipo *tipoIMC* e que escreva na tela o nome da pessoa com o maior IMCs e o nome da pessoa com menor IMC.
    1. Encontre o erro em cada um dos seguintes códigos, faça sua identação e mostre a correção de cada um:
        - a)
        ```c
        int g(void) {
        printf("Dentro da funcao g\n");
        int h(void) {
        printf("Dentro da funcao h\n");
        }
        }
        ```
        - b)
        ```c
        int soma(int x, int y) {
        int resultado;
        resultado = x + y;
        ```
        - c)
        ```c
        int soma(int n) {
        if (n == 0) return 0;
        else
        n + soma(n - 1);
        ```
        - d)
        ```c
        void f(float a); {
        float a;
        printf("%f", a);
        }
        ```
        - e)
        ```c
        void produto(void) {
        int a, b, c, result;
        printf("Entre com tres inteiros: ") scanf)"%d%d%d", &a, &b, &c);
        result = a * b *
        c; printf("O resultado e %d", result); return result;
        }
        ```
    1. Faça um programa que teste as seguintes funções prontas da linguagem C.<br>
        Observação: é necessário incluir a biblioteca *math.h*:
        ```c
        #include <math.h>
        ```
        E na hora de compilar, deve adicionar o *-lm*.
        
        |Função|Descrição|Exemplos|
        |------|---------|--------|
        |sqrt(x)  | Raiz quadrada de x              | sqrt(900.0) é 30<br>sqrt(9.0) é 10|
        |exp(x)   | Função exponecial de e^x        | exp(1.0) é 2.718282<br>exp(2.0) é 7.389056|
        |log(x)   | Logaritmo natural de x (base e) | log (2.718282) é 1.0<br>log (7.389056) é 2.0|
        |log10(x) | Log de x (base 10)              | log10(1.0) é 0.0<br>log10(10.0) é 1.0<br>log10(100.0) é 10.0|
        |fabs(x)  | Valor absoluto de x             | Se x > 0 então fabs(x) é x<br>Se x = 0 então fabs(x) é 0.0<br>Se x < 0 então fabs(x) é –x|
        |ceil(x)  | Arredonda x para o menor inteiro | ceil(9.2) é 10<br>ceil(-9.8) é -9|
        |floor(x) | Arredonda x para o maior inteiro | floor(9.2) é 9<br>floor(-9.8) é -10|
        |pow(x,y) | x elevado a potencia y                       | pow(2,7) é 128.0<br>pow(9, .5) é 3.0|
        |fmod(x,y)| Resto de x/y, mas com ponto flutuante |fmod(13.657, 2.333) é 1.992|
        |sin(x)   | Seno trigonométrico de x em rad              |sin(0.0) é 0|
        |cos(x)   | Cosseno trigonométrico de x em rad           |tos(0.0) é 1|
        |tan(x)   | Tangente trigonométrico de x em rad          |tan(0.0) é 0|

* **Ponteiros**: Capítulo 9 da **ref1**. E capítulo 7 da **ref2**.
    - Observações:
        ```c
        #include <stdio.h>
        #include <stdlib.h>

        int main()
        {
            float *notas, *aux;
            int i;
            //(o número 5 foi escolhido aleatoriamente como tamanho do vetor)
            //Essa instrução:
            //notas = malloc(5*sizeof(float));
            //é igual a essa:
            notas = calloc(5, sizeof(float));

            //vamos ler o valor de 5 notas:
            for (i=0;i<5;i++)
            {
                printf("Digite o valor da nota %d: ", i);
                //Essa instrução:
                //scanf("%f", notas[i]);
                //é igual a essa:
                scanf("%f", (notas+i)); //soma-se: endereço_inicial+salto*tamanho_da_variável
                                        //ou seja: notas + i*sizeof(float)
            }
            // vendo se leu tudo corretamente:
            for (i=0;i<5;i++)
                printf("Nota %d: %.2f\n", i, notas[i]);
            
            //achando a maior nota:
            aux = &notas[0]; //ponteiro "aux" apontando para a primeira nota
            for (i=1;i<5;i++) //percorrendo os demais elementos de notas
            {
                if (notas[i] > *aux)
                    aux = &notas[i];
            }
            printf("A maior nota é %.2f\n", *aux);
            printf("Mas eu não sei sua posição, pois não guardei o valor de 'i'.\n");
            //liberando as posições alocadas pelo calloc para o vetor:
            free(notas);
        }
        ```
    - Exercícios:
        1. Declare um vetor dinâmico (usando ponteiro e malloc -- ou malloc) do tipo float com 10 elementos e inicialize os elementos com os valores 0.0, 1.1, 2.2, ..., 9.9.
        1. Declare uma variável estática e um ponteiro, ambos tipo float. Faça com que o ponteiro aponte para a variável estática e o utilize para trocar o valor da variável estática.
        1. No programa de exemplo acima, mude o ```printf``` de:
            ```c
            for (i=0;i<5;i++)
                printf("Nota %d: %.2f\n", i, notas[i]);
            ```
            para seguir o exemplo de acesso ao vetor apresentado no ```scanf``` abaixo:
            ```c
            for (i=0;i<5;i++)
            {
                printf("Digite o valor da nota %d: ", i);
                scanf("%f", (notas+i));
            }
            ```
        1. Crie uma função que receba, como referência, um número do tipo *float* e o altere para seu dobro.
        1. Crie um vetor dinâmico com 5 posições e uma função que deverá encontrar o menor elemento dele. A função deve receber o vetor por referência.
        1. Crie um novo tipo de dado com idade e altura. Depois, uma variável dinâmica que armazene 4 estruturas desse novo tipo de dado. Então, uma função para encontrar a menor idade e a maior altura.
        1. Passe todas as variáveis do programa abaixo para ponteiros:
            ```c
            #include <stdio.h>
            #include <string.h>

            #define TAM 5

            typedef struct {
                char nome[20];
                float valor;
            }tipoProduto;

            void copia_produto(tipoProduto *origem, tipoProduto *destino)
            {
                // copia a string origem.nome para a destino.nome:
                strcpy(destino->nome, origem->nome);
                destino->valor = origem->valor;
            }

            int main()
            {
                tipoProduto produtos[TAM], mais_caro;
                int i;
                for (i=0;i<TAM;i++)
                {
                    printf("Produto %d:\n", i);
                    printf("  Nome: ");
                    scanf("%s",  produtos[i].nome);
                    printf("  Valor: ");
                    scanf("%f", &produtos[i].valor);
                }

                // considero o primeiro como o mais caro:
                copia_produto(&produtos[0], &mais_caro);

                // percorrendo e comparando com os demais:
                for (i=1;i<TAM;i++)
                {
                    if (produtos[i].valor > mais_caro.valor)
                    {
                        copia_produto(&produtos[i], &mais_caro);
                    }
                }

                printf("O produto mais caro é o \"%s\", custando R$ %.2f\n", mais_caro.nome, mais_caro.valor);
            }
            ```
        



Nos livros, tem mais exercícios. Aproveitem para fazer aprender cada vez mais.

<hr>
<br>
Você pode ter acesso à **ref2** pela UFES através da Biblioteca Virtual. Para isso:
* Faça o cadastro na Biblioteca Digital Cengage seguindo [esses passos](https://biblioteca.ufes.br/sites/biblioteca.ufes.br/files/field/anexo/tutorial_para_realicar_cadasgro_para_acesso_a_biblioteca_digital_cengage.pdf).
* Após isso, logue na [plataforma virtual da Cengage](https://plataforma.bvirtual.com.br/Account/Login) e procure pelo livro.

<hr>
<br>
Também criei esses resumos de estruturas e um de funções:
* [Resumo de estruturas]({{site.baseurl}}{% link files/estruturas.pdf %})
* [Resumo de funções]({{site.baseurl}}{% link files/funcoes.pdf %})

Abraços

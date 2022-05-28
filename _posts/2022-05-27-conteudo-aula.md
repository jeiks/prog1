---
title: Conteúdo da Aula - 27/05
layout: default
---

**Tópicos abordados:**
* Utilização de GNU/Linux para a criação dos programas;
* Explicação e exploração dos conceitos de escrita na tela.

### Utilizando GNU/Linux para programar

Optou-se por utilizar um editor de textos simples e o [GCC](https://pt.wikipedia.org/wiki/GNU_Compiler_Collection) para programar e compilar os códigos aprendidos em sala.

Por isso, como a maioria concordou, começamos a utilizar o GNU/Linux.

Como prosseguir?<br>
Siga uma das alternativas abaixo:
* Para utilizar o GCC, siga o seguinte tutorial: [Como compilar um programa utilizando o GCC](https://pt.wikihow.com/Compilar-um-Programa-Usando-o-Compilador-GNU-(GCC))
* Caso queria instalar o GNU/Linux em seu computador, siga o seguinte tutorial: [Windows e Ubuntu em dual boot](https://www.youtube.com/watch?v=lUKpbJv6rQ0)
* Caso queria utilizar o GNU/Linux dentro de seu Windows através do WSI, siga o seguinte tutorial: [Instalar WSL no Windows 11](https://www.youtube.com/watch?v=mKkJnAcX570)
* Caso tenha problemas com um dos tutoriais acima, ou precise de ajuda, entre em contato comigo por e-mail.

### Conteúdo da aula
Nessa aula (dia 27/05), construímos um simples programa em C e trabalhamos com escritas na tela.
Segue um resumo, com exemplos, de tudo que vimos em sala.

Segundo o seguinte código:

{% highlight c linenos %}
#include <stdio.h>
 
int main() {
    printf("Hello World!");
    return 0;
}
{% endhighlight %}

Linha 1: estamos aqui, informando ao compilador que

---
title: Conteúdo da Aula - 27/05 (GNU/Linux)
layout: post
---

# Utilizando GNU/Linux para programar

Optou-se por utilizar um editor de textos simples e o [GCC](https://pt.wikipedia.org/wiki/GNU_Compiler_Collection) para programar e compilar os códigos aprendidos em sala.

Por isso, como a maioria concordou, começamos a utilizar o GNU/Linux.

Como prosseguir?<br>
Siga uma das alternativas abaixo:
* Para utilizar o GCC, siga o seguinte tutorial: [Como compilar um programa utilizando o GCC](https://pt.wikihow.com/Compilar-um-Programa-Usando-o-Compilador-GNU-(GCC))
* Caso queria instalar o GNU/Linux em seu computador, siga o seguinte tutorial: [Windows e Ubuntu em dual boot](https://www.youtube.com/watch?v=lUKpbJv6rQ0)
* Caso queria utilizar o GNU/Linux dentro de seu Windows através do WSI, siga o seguinte tutorial: [Instalar WSL no Windows 11](https://www.youtube.com/watch?v=mKkJnAcX570)
* Caso tenha problemas com um dos tutoriais acima, ou precise de ajuda, entre em contato comigo por e-mail.

### Como gerar/fazer/criar seu programa
1. Inicialmente, você deve abrir um editor de textos qualquer. Existem vários editores de texto, mas no laboratório, estamos utilizando um que se chama [Gedit](https://wiki.gnome.org/Apps/Gedit). Nele que você criará o seu código, ou seja, seu código fonte.
> Sempre que for digitar um código em C para criar seu programa, ele deverá ser digitado aqui.
2. No editor de textos, escreva seu código e salve em um diretório (pasta) de fácil acesso.
> Para evitar trabalho ao acessar, não use letras em maiúsculo ou espaços em branco nos nomes de arquivos e de diretórios que criar.
3. Após isso, abra um terminal (console),
 * verifique o diretório que você está:<br>
   ```pwd```
 * verifique se seu arquivo está ali, listando os arquivos desse diretório:<br>
   ```ls```
 * caso você tenha criado um outro diretório e armazenado seu arquivo nele, você deve entrar no diretório assim:<br>
   ```cd seu_diretorio```
   > Lembre-se que o GNU/Linux diferencia letras minúsculas de maiúsculas. Assim, ```cd diretorio``` é diferente de ```cd Diretorio```.
 * supondo que o arquivo com código fonte se chama *"aula.c"*, você pode listar ele diretamente assim:<br>
   ```ls a*.c```<br>
   e você pode começar a digitar o nome do arquivo e pressionar TAB uma ou duas vezes para que o terminal complete o nome do arquivo para você.
   > Caso tenha mais arquivos com os mesmos caracteres iniciais, ao pressionar o TAB duas vezes, serão apresentados todos os arquivos que casarem com o padrão que você digitou.
   <br>Para que o TAB complete somente com o nome desejado (e pressionando só uma vez), você deve ir adicionando caracteres até que se forme um padrão que só o seu arquivo desejado possui.
   <br>E, como aprendermos, o asterisco (```*```) é um caractere especial que casa com qualquer conjunto de caracteres (inclusive nenhum). Ele é chamado de expressão regular e, por isso, substitui o *ula* de *"aula.c"* no exemplo acima;
 * Você pode conferir o conteúdo do arquivo (para ver se é o seu mesmo) com o comando:<br>
   ```cat aula.c```
 * E pode compilar (transformar seu código fonte para binário, ou seja, código da máquina) com o comando:
   ```gcc aula.c -o aula.e```<br>
   > Para o *gcc*, o ```-o``` significa *output*, ou seja, qual será a saída, o local que ele deve salvar o programa executável.
   <br>Nós escolhemos *aula.e* nesse exemplo, mas para o GNU/Linux, o *.e* não faz diferença.
   <br>Porém, se for no Windows, o arquivo executável deverá terminar com *.exe*:
   <br>```gcc aula.c -o aula.exe```
 * Agora, para executar o programa, você deve informar qual é sua localização.<br>
   Como aprendemos em sala, toda vez que usamos o ponto ```.```, estamos indicando o diretório que estamos atualmente.<br>
   E vimos que a barra ```/``` separa o nome do diretório do nome do arquivo. Por isso, vamos executar nosso programa assim:<br>
   ```./aula.e```<br>
   onde: ```.``` é o diretório atual e ```/``` indica que queremos algo dentro dele. Completamos então com ```aula.e```, que é o nome de nosso arquivo executável (código de máquina).

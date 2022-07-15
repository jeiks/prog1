$(document).ready(function(){

add_exercise('.problem1',
             '1. Defina o valor da posição (30,12) da matriz como 87:',
             'int matriz[40][40];#n'+
             'matriz[##INPUT::29##][##INPUT::11##] ##INPUT::=## ##INPUT::87##;'
);
add_exercise('.problem2',
             '2. Leia um inteiro para a posição (10,5) da matriz:',
             'int matriz[10][10];#n'+
             'scanf("##INPUT::%d##", ##INPUT::&####INPUT::matriz##[##INPUT::9##][##INPUT::4##]);'
);
add_exercise('.problem3',
             '3. Leia um inteiro para a posição (5,6) da matriz:',
             'int matriz[10][10];#n'+
             'scanf("##INPUT::%d##", ##INPUT::&####INPUT::matriz####INPUT::[4][5]##);'
);
add_exercise('.problem4',
             '4. Imprima na tela os valores da linha 1 da matriz:',
             'int matriz[10][10], i;#n'+
             'for (i=0;i<10;i++)#n'+
             '#tprintf("##INPUT::%d## ", ##INPUT::matriz####INPUT::[0]####INPUT::[i]##);#n' +
             'printf("\n");'
);
add_exercise('.problem5',
             '5. Imprima na tela os valores da coluna 1 da matriz:',
             'int matriz[10][10], i;#n'+
             'for (i=0;i<10;i++)#n'+
             '#tprintf("##INPUT::%d## ", ##INPUT::matriz####INPUT::[i]####INPUT::[0]##);#n' +
             'printf("\n");'
);
add_exercise('.problem6',
            '6. Complete o código abaixo:',
            '#include &lt;stdio.h> #nint main() { #n&nbsp;&nbsp;&nbsp;&nbsp;float matrizA[10][10], matrizB[10][10], soma[10][10]; #n&nbsp;&nbsp;&nbsp;&nbsp;int linhas, colunas, i, j; #n#n&nbsp;&nbsp;&nbsp;&nbsp;printf("Digite as dimensões das matrizes:\n"); #n&nbsp;&nbsp;&nbsp;&nbsp;scanf("%d %d", ##INPUT::&linhas##, ##INPUT::&colunas##); #n#n&nbsp;&nbsp;&nbsp;&nbsp;printf("Digite os elementos da Matriz A:\n"); #n&nbsp;&nbsp;&nbsp;&nbsp;for (i=0;i<##INPUT::linhas##;i++) #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (j=0;j<##INPUT::colunas##;j++) #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanf("##INPUT::%f##", ##INPUT::&####INPUT::matrizA####INPUT::[i][j]##); #n#n&nbsp;&nbsp;&nbsp;&nbsp;printf("Digite os elementos da Matriz B:\n"); #n&nbsp;&nbsp;&nbsp;&nbsp;for (##INPUT::i##=0;##INPUT::i##<linhas;##INPUT::i++##) #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (##INPUT::j##=0;##INPUT::j##<colunas;##INPUT::j++##) #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanf("##INPUT::%f##", ##INPUT::&####INPUT::matrizB##[##INPUT::i##][##INPUT::j##]);#n#n&nbsp;&nbsp;&nbsp;&nbsp;//fazendo a soma: #n&nbsp;&nbsp;&nbsp;&nbsp;for (i=0;i<##INPUT::linhas##;i++) #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (j=0;j<##INPUT::colunas##;j++) #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;soma##INPUT::[i]####INPUT::[j]## = ##INPUT::matrizA##[##INPUT::i##][##INPUT::j##]+##INPUT::matrizB##[##INPUT::i##][##INPUT::j##]; #n#n&nbsp;&nbsp;&nbsp;&nbsp;printf("Resultado:\n"); #n&nbsp;&nbsp;&nbsp;&nbsp;for (i=0;i<##INPUT::linhas##;i++) { #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (j=0;j<##INPUT::colunas##;j++) #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("%6.2f ", ##INPUT::soma##[##INPUT::i##][##INPUT::j##]); #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("\n"); #n&nbsp;&nbsp;&nbsp;&nbsp;} #n}'
);

add_exercise('.problem7',
             '7. Complete o código abaixo:',
             '#include &lt;stdio.h> #nint main() { #n&nbsp;&nbsp;&nbsp;&nbsp;float notas[6][8], media[6], soma; #n&nbsp;&nbsp;&nbsp;&nbsp;char nomes[6][20]; #n&nbsp;&nbsp;&nbsp;&nbsp;int i, j; #n#n&nbsp;&nbsp;&nbsp;&nbsp;for (i=0;i<6;i++) { #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("Digite o nome do aluno ##INPUT::%d##: ", ##INPUT::i##); #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanf("##INPUT::%s##", ##INPUT::nomes[i]##); #n&nbsp;&nbsp;&nbsp;&nbsp;} #n#n&nbsp;&nbsp;&nbsp;&nbsp;for (i=0;i<6;i++) #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (j=0;j<8;j++) { #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("Digite a nota do aluno %s na disciplina %d: ", nomes[i], j); #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanf("##INPUT::%f##", ##INPUT::&####INPUT::notas##[##INPUT::i##][##INPUT::j##]); #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}#n#n&nbsp;&nbsp;&nbsp;&nbsp;// vamos somar as notas dos alunos: #n&nbsp;&nbsp;&nbsp;&nbsp;for (i=0;i<##INPUT::6##;i++) { #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;soma = ##INPUT::0##; #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (j=0;j<##INPUT::8##;j++) { #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;soma ##INPUT::+=## notas[##INPUT::i##][##INPUT::j##]; #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;media[##INPUT::i##] = soma/##INPUT::8##; #n&nbsp;&nbsp;&nbsp;&nbsp;}#n&nbsp;&nbsp;&nbsp;&nbsp;// média das médias: #n&nbsp;&nbsp;&nbsp;&nbsp;soma = 0; #n&nbsp;&nbsp;&nbsp;&nbsp;for (i=0;i<6;i++) #n&nbsp;&nbsp;&nbsp;&nbsp;   soma ##INPUT::+=## media[##INPUT::i##];#n#n&nbsp;&nbsp;&nbsp;&nbsp;// Sumário: #n&nbsp;&nbsp;&nbsp;&nbsp;for (i=0;i<6;i++) #n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("Média do aluno %d - %s: %.2f\n",#n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##INPUT::i##, ##INPUT::nomes####INPUT::[i]##, ##INPUT::media####INPUT::[i]##); #n#n&nbsp;&nbsp;&nbsp;&nbsp;printf("Média da turma: %.2f\n", soma/6); #n}'
);

//fim do jquery
});

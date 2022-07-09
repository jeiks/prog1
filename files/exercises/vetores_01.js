$(document).ready(function(){
    
add_exercise('.problem1',
                '1. Complete com o código correto para imprimir o número 50 na tela:',
                'int main(){#n' +
                '#tint meusNumeros[] = {25, 50, 75, 100};#n' +
                '#tprintf("%d", ##INPUT::meusNumeros[1]##);#n' +
                '}'
);
add_exercise('.problem2',
                '2. Crie um vetor (<i>array</i>) do tipo <i>int</i> chamado <i>meuVetor</i>:',
                'int ##INPUT::meuVetor####INPUT::[]## ##INPUT::=## {25, 50, 75, 100};'
);
add_exercise('.problem3',
                '3. Modifique o valor do primeiro elemento do vetor para 33:',
                'int vetor[] = {25, 50, 75, 100};#n' +
                '##INPUT::vetor[0]## ##INPUT::=## ##INPUT::33## ;'
);
add_exercise('.problem4',
                '4. Faça um <i>loop</i> pelos elementos do vetor usando um <i>for</i>:',
                'int meusNumeros[] = {25, 50, 75, 100};#n'+
                'int i;#n'+
                '##INPUT::for## (i = 0; i < 4; i++) {#n'+
                'printf("%d\n", ##INPUT::meusNumeros####INPUT::[i]##);#n'+
                '}'
);
add_exercise('.problem5',
                '5. Faça corretamente a leitura do vetor <i>notas</i>',
                'int main()#n' +
                '{#n' +
                '#tfloat notas[3];#n' +
                '#tint i;#n' +
                '#n' +
                '#t//lendo todas as notas:#n' +
                '#tfor (i=##INPUT::0## ; i<##INPUT::3## ; ##INPUT::i++##)#n' +
                '#t{#n' +
                '#t#tprintf("Digite a nota número ##INPUT::%d##: ", ##INPUT::i##);#n' +
                '#t#tscanf("%f", ##INPUT::&####INPUT::notas##[##INPUT::i##]);#n' +
                '#t}#n' +
                '#n' +
                '#tprintf("\nValores lidos:\n");#n' +
                '#ti=##INPUT::0##;#n' +
                '#twhile(i<##INPUT::3##)#n' +
                '#t{#n' +
                '#t#tprintf("Nota[##INPUT::%d##] = ##INPUT::%f##\n", ##INPUT::i##, ##INPUT::notas[i]##);#n' +
                '#t#ti++;#n' +
                '#t}#n' +
                '}#n'
);

//fim do jquery
});

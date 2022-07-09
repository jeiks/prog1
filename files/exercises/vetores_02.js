$(document).ready(function(){
    
add_exercise('.problem1',
            '1. Complete o código abaixo:',
            'int main()#n' +
            '{#n' +
            '#t// um índice do array sempre deve ser inteiro:#n' +
            '#tint i;#n' +
            '#t//declarando nosso vetor:#n' +
            '#tint notas[10];#n' +
            '#t#n' +
            '#tprintf("Esse laço é somente para mostrar o valor do índice:\n");#n' +
            '#tfor (i=##INPUT::0##;i<##INPUT::10##;##INPUT::i++##)#n' +
            '#t{#n' +
            '#t#tprintf("##INPUT::%d##\n", ##INPUT::i##);#n' +
            '#t}#n' +
            '#t#n' +
            '#tprintf("Agora que sabemos que a variável \'i\' assume todos os valores de índice do notas [0,...,9], vamos usá-la para escrever valores no vetor.\n");#n' +
            '#tfor (i=##INPUT::0##;##INPUT::i<10##;i++)#n' +
            '#t{#n' +
            '#t#tprintf("Índice: %d. ", i);#n' +
            '#t#tprintf("Valor que vou adicionar nessa posição do vetor: %d\n", i);#n' +
            '#t#t##INPUT::notas[i]## = ##INPUT::i##;#n' +
            '#t}#n' +
            '#t#n' +
            '#tprintf("Agora, vamos percorrer o vetor para verificar se foi como desejamos:\n");#n' +
            '#tfor (i=0;i<10;i++)#n' +
            '#t{#n' +
            '#t#tprintf("Índice %d, ou seja, notas[%d]: ", ##INPUT::i##, ##INPUT::i##);#n' +
            '#t#tprintf("%d\n", ##INPUT::notas[i]##);#n' +
            '#t}#n' +
            '}#n',
);

//fim do jquery
});

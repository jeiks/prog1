$(document).ready(function(){
    function format(txt)
    {
        return txt.replaceAll('#N', ' <br> ').
                   replaceAll('#n', ' <br> ').
                   replaceAll('#T', ' &nbsp;&nbsp;&nbsp;&nbsp; ').
                   replaceAll('#t', ' &nbsp;&nbsp;&nbsp;&nbsp; ').
                   replaceAll('\n', '\\n').
                   replaceAll('\t', '\\t');
    }

    function add_element(where, element, index)
    {
        if (element.startsWith("INPUT:"))
        {
            var answer = element.split(":")[1],
            input = $('<div>').append($('<input>').attr({
                type: 'text',
                id: 'input_'+index,
                maxlength: answer.length,
                size: answer.length
            })).css({'display':'inline'}),
            input_answer = $('<input>').attr({
                type: 'hidden',
                id: 'answer_'+index,
                value: answer
            });
            $(where).append(input);
            $(where).append(input_answer);
        }else $(where).append(format(element));
    }
    function toggle_value(element, where)
    {
        var idx = $(element).attr('id').split('_')[1],
            current_value = $(element).val(),
            aux_element = $(where).children('.code').find("input[id^='answer_"+idx+"']");
        //console.log(aux_element.val() + " -- " + current_value);
        $(element).val(aux_element.val());
        aux_element.val(current_value);
    }
    function toggle_answer(where)
    {
        var inputs = $(where).children('.code').find("input[id^='input_']");
        inputs.each(function(_, elem) { toggle_value(elem, where) });

        var text = $(where).find('#show span').text();
        if (text.startsWith('Mostrar')){
            $(where).find('#show span').text('Esconder resposta');
            $(where).find('#submit').hide();
        }else{
            $(where).find('#show span').text('Mostrar resposta');
            $(where).find('#submit').show();
        }
    }
    function check_answer(element, where)
    {
        var idx = $(element).attr('id').split('_')[1],
            answer = $(element).val(),
            correct_answer = $(where).children('.code').find("input[id^='answer_"+idx+"']").val();
        console.log(answer, correct_answer);
        return answer === correct_answer;
    }
    function submit_answer(where)
    {
        var wrong=0, inputs = $(where).children('.code').find("input[id^='input_']");
        inputs.each(function(_, element) {
            console.log(element);
            $(element).prop( "disabled", true );
            if (check_answer(element, where)){
                $(element).parent().addClass('correct_answer');
            }else{
                $(element).parent().addClass('wrong_answer');
                wrong++;
            }
        });
        if (wrong > 0)
        {
            $(where).find('#submit span').text('Tentar novamente');
            $(where).find('#submit').off('click').click(function(){ try_again(where); });
        }else{
            $(where).find('#submit span').text('Parabéns!!');
            $(where).find('.correct_answer').removeClass('correct_answer').addClass('correct_answer_final').prop('disabled', true);
            $(where).find('#submit').removeClass('with_arrow');
            $(where).find('#submit').off('click');
            $(where).find('#submit').css({'cursor':'auto', 'padding':'7px 100px'})
        }
        $(where).find('#show').hide();
    }
    function try_again(where)
    {
        var inputs = $(where).find("input[id^='input_']");
        inputs.each(function(_, elem) {
            $(elem).prop( "disabled", false );
            $(elem).parent().removeClass('correct_answer').removeClass('wrong_answer');
            $(where).find('#submit span').text('Submeter resposta');
        });
        $(where).find('#submit').off('click').click(function(){ submit_answer(where); });
        $(where).find('#show').show();
    }
    function create_problem_div(parent)
    {
        var div = $('<div>').addClass(parent.substring(1)).addClass('problem');
        div.append('\
                <div class="title"></div>\
                <div class="code"></div>\
                <div class="options">\
                    <button id="submit" class="with_arrow"><span>Submeter resposta</span></button>\
                    <button id="show" class="with_arrow"><span>Mostrar resposta</span></button>\
                </div>\
            ');
        $('body').append(div);
    }
    function add_exercise(parent, title, elements) 
    {
        create_problem_div(parent);
        $(parent).find('#submit').click(function(){ submit_answer(parent); });
        $(parent).find('#show').click(function(){ toggle_answer(parent); });
        $(parent+' .title').append($('<p>').html(title).css({'font-weight': 'bold'}));

        elements.split('##').forEach(function(e,i,a) { add_element(parent+' .code', e, i); });
    } 
    
    add_exercise('.problem1',
                 '1. Complete com o código correto para imprimir o número 50 na tela:',
                 'int main(){#n' +
                 '#tint meusNumeros[] = {25, 50, 75, 100};#n' +
                 '#tprintf("%d", ##INPUT:meusNumeros[1]##);#n' +
                 '}'
    );
    add_exercise('.problem2',
                 '2. Crie um vetor (<i>array</i>) do tipo <i>int</i> chamado <i>meuVetor</i>:',
                 'int ##INPUT:meuVetor####INPUT:[]## ##INPUT:=## {25, 50, 75, 100};'
    );
    add_exercise('.problem3',
                 '3. Modifique o valor do primeiro elemento do vetor para 33:',
                 'int vetor[] = {25, 50, 75, 100};#n' +
                 '##INPUT:vetor[0]## ##INPUT:=## ##INPUT:33## ;'
    );
    add_exercise('.problem4',
                 '4. Faça um <i>loop</i> pelos elementos do vetor usando um <i>for</i>:',
                 'int meusNumeros[] = {25, 50, 75, 100};#n'+
                 'int i;#n'+
                 '##INPUT:for## (i = 0; i < 4; i++) {#n'+
                 'printf("%d\n", ##INPUT:meusNumeros####INPUT:[i]##);#n'+
                 '}'
    );
    /*
    add_exercise('.problem5',
                 '5. Faça corretamente a leitura do vetor <i>notas</i>',
                 'int main()#n' +
                 '{#n' +
                 '#tfloat notas[3];#n' +
                 '#tint i;#n' +
                 '#n' +
                 '#t//lendo todas as notas:#n' +
                 '#tfor (i=##INPUT:0## ; i<##INPUT:3## ; ##INPUT:i++##)#n' +
                 '#t{#n' +
                 '#t#tprintf("Digite a nota número ##INPUT:%d##: ", ##INPUT:i##);#n' +
                 '#t#tscanf("%f", ##INPUT:&####INPUT:notas##[##INPUT:i##]);#n' +
                 '#t}#n' +
                 '#n' +
                 '#tprintf("\nValores lidos:\n");#n' +
                 '#ti=##INPUT:0##;#n' +
                 '#twhile(i<##INPUT:3##)#n' +
                 '#t{#n' +
                 '#t#tprintf("Nota[##INPUT:%d##] = ##INPUT:%f##\n", ##INPUT:i##, ##INPUT:notas[i]##);#n' +
                 '#t#ti++;#n' +
                 '#t}#n' +
                 '}#n'
    );
*/
//fim do jquery
});

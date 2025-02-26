$(function () {
    //Aula 33 -intro

    // document.getElementById("exemplo").innerHTML= "olá!";

    ////quando é ID usar #, se for classe usar ponto
    $("#exemplo").html("Olá!");

    // Aula 34 - Sintexe

    //hide css
    $("#esconder").click(function () {
        $(".exemplo").css("display", "none");
    });

    //Aula 35 - manipulando conteudo
    ////pegamos um texto dentro do html que ta dentro de um elemento
    var conteudo_html = $("#paragrafo-html").text();
    // console.log(conteudo_html);

    $("#paragrafo-html").html("Mudar o conteúdo do parágrafo");
    conteudo_html = $("#paragrafo-html").html();
    // console.log(conteudo_html);

    ///pegar atributo de um elemento
    var url_link = $("#paragrafo-link").attr("href");
    // console.log(url_link);

    //trocar valor do atributo 
    $("#paragrafo-link").attr("href", "http://udemy.com");
    var url_link = $("#paragrafo-link").attr("href");
    // console.log(url_link);

    ///com o id do botao
    $("#mudar_imagem").click(function () {
        ///entramos no elemento com o id...
        $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
        ///escondemos o botão:
        $("#mudar_imagem").hide();
    });


    ////empty deixa VAZIO mas não apaga o elemento
    $("#paragrafo-empty").empty();
    ////remove real EXCLUI o elemento da pagina
    $("#paragrafo-empty").remove();


    //Aula 36 - loop each


    var lista = ["HTML", "CSS", "Javascript", "jQuery", "PHP"];
    ///para cadaitem da lista, traga index e value
    $.each(lista, function (index, value) {
        // console.log("O elemento de indice [" + index + "}" + "Tem o valor de {" + value + "}");
    });


    var pessoa = {
        'nome': 'João Pedro',
        'DN': '20/01/1990',
        'CPF': '111.111.111-11'
    };
    ///para cada valor no map, traga key e value
    $.each(pessoa, function (key, value) {
        // console.log('O elemento de chave [' + key + '] tem o valor de ' + value);
    });


    ///acessar o elemento tipo ul(listahmtl) 0u thra(linhad de colunahtml)
    ///pegar cada item(li) do elemento ul com id #interesses... 
    var tipoInteresses = $("#interesses li")
    ///fazemos um loop na lista com vários li
    $.each(tipoInteresses, function (index, value) {
        // console.log('Cada elemento tem o index: ' +index+' com o valor: ' + $(value).text());
    });


    //Aula 37 - form
    ///pegar o que é digitado no input
    var conteudo_nome = $("#campo_nome").val();
    // console.log(conteudo_nome);

    //alterar o valor do input
    $("#campo_nome").val("José Dias");
    conteudo_input = $("#campa_nome").val();
    // console.log(conteudo_input);

    ///pegar value do dropdown
    var valor_selecionado = $("#options").val();
    // console.log(valor_selecionado);

    ///pegar o valor do elemente <options>Praia</options>
    var texto_selecionado = $('#options').find(":selected").text();
    // console.log(texto_selecionado);


    ///mostra toda vez que clica
    $("#options").change(function () {
        var novo_selecionado = $("#options").find(":selected").text();
    })

    ///buscar o elemento assim, e pega o value da opção "M,F,NONE"
    ///checkbox radio buttons
    var valor_radio_selecioando = $("input[name='genero']:checked").val();
    // console.log(valor_radio_selecioando); 

    ///pegar o nome do checkbox "Masculino" "Feminino" "Prefiro não dizer"
    ///colocar envolta de um <span> e acessar esse novo pai
    var texto_radio_selecioando = $("input[name='genero']:checked").parent('span').text();
    // console.log(texto_radio_selecioando); 

    ///toda vez que for alterada
    $("input[name=genero]:checked").change(function () {
        var novo_radio_selecioando = $("input[name='genero']:checked").parent('span').text();
        // console.log(novo_radio_selecioando); 
    })

    ///checkbox, precisam ser um array de selecionados
    $("input[name='interesse']").change(function () {
        ///pegamos o input TODO
        var checkbox_selecionados = $("input[name='interesse']:checked");
        ///cria a lista vazia 
        var texto = [];

        ///para cada item que entrar, terá um map com keys e values
        $.each(checkboxes_selecionados, function (index, value) {
            ///do item que acessamos no each, subimos para o pai e pegamos o text (...>Design<span/>)
            textos.push($(value).parent("span").text());
        });
    })



    ///Aula 38 - manipular class de css


    ///esconder elemento css
    $("#esconder").click(function () {
        $(".exemplo").css("display", "none");
        ///ou
        $(".exemplo").hide();
    });

    // Adicionar classe:
    $("#adicionar_classe").click(function () {
        $("#paragrafo-classes").addClass("styling");
    });

    // Remover classe:
    $("#remover_classe").click(function () {
        $("#paragrafo-classes").removeClass("styling");
    });

    ///acessa o o id do botao
    $("#alternar_classe").click(function () {
        ///com o id de ontem está a classe alvo, trocar pelo css desejado
        $("#paragrafo-classes").toggleClass("styling");
    });

    ///Aula 39 - eventos

    // $("elemento").evento(function () {
    // código a ser executado quando ocorrer o evento
    // });

    ///carregar comente quando toda a pagina estiver okay. Colocado lá na linha 1

    $(document).ready(function () {
        // Código JS / jQuery    
    });
    //ou apenas como 
    $(function () {
        // Código JS / jQuery  
    });

    ///varios eventos para apenas um elemento
    $("elemento").on({ click: function () { }, mouseenter: function () { } });

    ///desafio:
    $("#nome").keyup(
        function () {
            var textoDigitado = $("#nome").val();
            if (textoDigitado) {
                console.log('Aparece botao');
                $("#confirmar").show();
            } else {

                $("#confirmar").hide();

            }
        });

    ///Aula - 40 efeitos
    //$("elemento").hide(velocidade, callback);
    ///default: 400ms, slow 600ms, fast 100ms
    $("#botao-esconder").click(function () {
        $(this).hide(2000, function () {
            $("#texto-escondido").show();
        });

    });

    $("#toggle-tab").click(function () {
        ///hide and show
        // $("#tab-content").toggle();
        ///slide
        // $("#tab-content").slideToggle(500);
        ///fade o texto
        $("#tab-content").fadeToggle();
        $("#toggle-tab").toggleClass("flip");
    });

    ///Aula 41 - animate
    ///tudo de uma vez
    // $("#animar").click(function () {
    //     $("#quadrado").animate({
    //         //acrescentar tamanho no elemento
    //         width: "+=20px",
    //         height: '+=20px'
    //     }, 1000,);
    // });

    // ///uma vez de cada coisa
    // $("#animar").click(function(){

    //     $("#quadrado").animate({
    //         width: '+=20px',
    //     },500);

    //     $("#quadrado").animate({
    //         height: '+=20px'
    //     }),500;

    // });

    ///Aula 42 - metodos em cadeia
    $("#animar").click(function () {
        ///a cor está trocando no inicio da animacao
        $("#quadrado").animate({
            width: '+=20px',
        },800).animate({
            height: '+=20px'
        },800).css("background-color","green");


        ///colocamos a troco do css em um callback
        $("#quadrado").animate({
            width: '+=20px',
        }, 800).animate({
            height: '+=20px'
        }, 800, function () {
            $("#quadrado").css("background-color", "green")
        }).animate({ borderRadius: '20px' });

        ///e ainda colocar outro animate depois que o callback terminar, voltando o metodo em cadeia
        $("#quadrado").animate({
            width: '+=20px',
        }, 800).animate({
            height: '+=20px'
        }, 800, function () {
            $("#quadrado").css("background-color", "green")
        }).animate({ borderRadius: '+=5px' });

    });




});//ready
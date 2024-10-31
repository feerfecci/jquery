
                //Aula 33 -intro

// document.getElementById("exemplo").innerHTML= "olá!";

//quando é ID usar #, se for classe usar ponto
$("#exemplo").html("Olá!");

                // Aula 34 - Sintexe

$("#esconder").click(function(){
    $(".exemplo").css("display","none");
});

                //Aula 35 - manipulando conteudo

var conteudo_html = $("#paragrafo-html").text();
// console.log(conteudo_html);

$("#paragrafo-html").html("Mudar o conteúdo do parágrafo");
conteudo_html = $("#paragrafo-html").html();
// console.log(conteudo_html);

var url_link = $("#paragrafo-link").attr("href");
// console.log(url_link);

$("#paragrafo-link").attr("href", "http://udemy.com");
var url_link = $("#paragrafo-link").attr("href");
// console.log(url_link);


$("#mudar_imagem").click(function () {
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});


$("#paragrafo-empty").empty();
//empty deixa VAZIO mas não apaga o elemento
$("#paragrafo-empty").remove();
//remove real EXCLUI o elemento da pagina


                //Aula 36 - loop each



// var lista = ["HTML", "CSS", "Javascript", "jQuery", "PHP"];

// $.each(lista, function (index, value) {
//     console.log("O elemento de indice [" + index + "}" + "Tem o valor de {" + value + "}");
// });


// var pessoa = {
//     'nome': 'João Pedro',
//     'DN': '20/01/1990',
//     'CPF': '111.111.111-11'
// };

// $.each(pessoa, function( key, value ) {
//     console.log('O elemento de chave [' + key + '] tem o valor de ' + value);
// });


var tipoInteresses = $("#interesses li")
$.each(tipoInteresses,function(index, value){

    // console.log('Cada elemento tem o index: ' +index+' com o valor: ' + $(value).text());
} );


            //Aula 37 - form

var conteudo_nome=  $("#campo_nome").val();
// console.log(conteudo_nome);

var valor_selecionado = $("#options").val();
// console.log(valor_selecionado);

var texto_selecionado = $('#options').find(":selected").text();
// console.log(texto_selecionado);


$("#options").change(function(){
    var novo_selecionado = $("#options").find(":selected").text();
    console.log(novo_selecionado);
})
var logado = false;

//Verifica se acesso em localStorage é verdadeiro, se sim remove link para Login e permanece Perfil
if (localStorage.getItem("acesso") == "true") {
    logado = true;

    var element = document.getElementById('btnLogin');
    element.parentElement.removeChild(element);
};

//Verifica se acesso em localStorage não é verdadeiro, se sim remove link para Perfil e permanece Login
if (logado != true) {

    alert("Usuario não autenticado!");
    window.location.href = "../paginaLogin/login.html";
}

//Consulta no localStorage nome do usuario para mostrar no Certificado
var dadosUsuario = [];

dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));

for (let i = 0; i < dadosUsuario.length; i++) {
    const elemento = dadosUsuario[i];

    tempUsuario = {
        nome: elemento.nomeUsuario,
    }

    //Verifica qual botao foi pressionado e mostra no certificado nome do Curso referente
    var tdPressionado = localStorage.getItem('imprimir');

    cursoRealizado = JSON.parse(localStorage.getItem("cursoRealizado"));

    for (let i = 0; i < 1; i++) {

        nome1 = cursoRealizado[0];
        nome2 = cursoRealizado[1];
        nome3 = cursoRealizado[2];

    }

    if (tdPressionado == "td1") {

        nomeImprimir = localStorage.printPositiontd1;
    }

    if (tdPressionado == "td2") {

        nomeImprimir = localStorage.printPositiontd2;
    }

    if (tdPressionado == "td3") {

        nomeImprimir = localStorage.printPositiontd3;
    }


    var nomeTitulo = tempUsuario.nome;
    var nomeCurso = nomeImprimir;
    var dataAtual = new Date();

    const dataFormatada = dataAtual.toLocaleDateString();

    //Mostra no certificado nome,curso e data de conclusao.
    document.getElementById('nomeUser').innerHTML = nomeTitulo;
    document.getElementById('nomeCurso').innerHTML = nomeCurso;
    document.getElementById('data').innerHTML = dataFormatada;


}

    
//Funcao para gerar certificado em imprimir
function gerarpdf() { 

    $('.printable').html();
    window.print();

}


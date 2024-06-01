var logado = false;

//Verifica se acesso em localStorage é verdadeiro, se sim remove link para Login e permanece Perfil
if (localStorage.getItem("acesso") == "true") {
    logado = true;

    var element = document.getElementById('btnLogin');
    element.parentElement.removeChild(element);
};

//Verifica se logado não é verdadeiro, se sim redireciona para pagina de login
if (logado != true){
                
    alert("Usuario não autenticado!");
    window.location.href="../paginaLogin/login.html";
}

//Verifica se curso foi concluido
var cursoM2 = false
if (localStorage.getItem("cursoM2") == "true") {
    cursoM2 = true;

    var concluido = document.getElementById('concluir');
    concluido.parentElement.removeChild(concluido)
};


//funcao para armazenar informacao do curso concluido pelo usuario
function concluir() {

    localStorage.setItem("cursoM2", true);

    var cursoRealizado = JSON.parse(localStorage.getItem("cursoRealizado"));

    //valida se cursoRealizado ainda nao existe em localStorage
    if (cursoRealizado == null) {
        localStorage.setItem("cursoRealizado", "[]");
        cursoRealizado = [];

        var curso2 = document.getElementById('titulo2').innerHTML;
        var curso1;

        alert("Curso concluido com sucesso, Certificado disponivel no seu Perfil!");

        var temp = {
            nomeCurso1: curso1,
            nomeCurso2: curso2
        }

        cursoRealizado.push(temp);

        localStorage.setItem("cursoRealizado", JSON.stringify(cursoRealizado));

        window.location.href = "../paginaPerfil/perfil.html";

    } else {


        var curso2 = document.getElementById('titulo2').innerHTML;
        var curso1;

        alert("Curso concluido com sucesso, Certificado disponivel no seu Perfil!!");

        var temp = {
            nomeCurso1: curso1,
            nomeCurso2: curso2
        }

        cursoRealizado.push(temp);

        localStorage.setItem("cursoRealizado", JSON.stringify(cursoRealizado));

        window.location.href = "../paginaPerfil/perfil.html";
    }
}

var logado = false;

//Verifica se acesso em localStorage é verdadeiro, se sim remove link para Login e permanece Perfil
if (localStorage.getItem("acesso") == "true") {
    logado = true;

    var element = document.getElementById('btnLogin');
    element.parentElement.removeChild(element);
};

//Verifica se logado não é verdadeiro, se sim remove link para Perfil e permanece Login
if (logado != true) {

    var element = document.getElementById('btnPerfil');
    element.parentElement.removeChild(element);
}

//Função pesquisar nome dos cursos
function search() {
    
    let input = document.getElementById('searchbar').value;

    input = input.toLowerCase();

    let x = document.getElementsByClassName('nomeCurso');

    for (i = 0; i < x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.opacity = 0.2;

        }else{
            x[i].style.opacity = 1;
        }
    }
}
function logar() {

    var emailUsu = document.getElementById('email').value;
    var senhaUsu = document.getElementById('senha').value;


    let tempUsuario = {
        email: "",
        senha: ""
    }

    let dadosUsuario = [];

    dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));
    

    //Verifica se possui dados armazenados, se vazio não entra no for e exibe alert
    if (dadosUsuario != null) {

        for (let i = 0; i < dadosUsuario.length; i++) {
            const elemento = dadosUsuario[i];
            
            if (emailUsu.value == elemento.emailUsuario && senhaUsu.value == elemento.senhaUsuario);

            tempUsuario = {
                email: elemento.emailUsuario,
                senha: elemento.senhaUsuario
            }
            
            localStorage.setItem("acesso", true);

        }
        
            if (email.value == tempUsuario.email && senha.value == tempUsuario.senha ){
                window.location.href = "../paginaHome/index.html";
            } else {
                alert("Usuario ou senha Invalidos!")
            }
    } else {
        alert("Usuario não Cadastrado!")
    }
}
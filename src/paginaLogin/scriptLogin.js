function logar() {

    var emailUsu = document.getElementById('email').value;
    var senhaUsu = document.getElementById('senha').value;


    let tempUsuario = {
        email: "",
        senha: ""
    }

    let dadosUsuario = [];

    dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));

  
    for (let i = 0; i < dadosUsuario.length; i++) {
        const elemento = dadosUsuario[i];
        
        if (emailUsu.value == elemento.emailUsuario && senhaUsu.value == elemento.senhaUsuario);

        tempUsuario = {
            email: elemento.emailUsuario,
            senha: elemento.senhaUsuario
         }
  

    }
    
        if (email.value == tempUsuario.email && senha.value == tempUsuario.senha ){
            window.location.href = "logado.html";
        } else {
            alert("Usuario ou senha Invalidos!")
        }
}
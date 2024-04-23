function cadastrar() {
    

    if ( nomeCompleto.value === "" || nomeCompleto.value.length < 10 ) {
        alert("Preencha o campo nome corretamente!");
        nomeCompleto.focus();
        return;
    }

    if ( email.value == "" ) {
        alert("Preencha o formulario corretamente");
        email.focus();
        return;
    }

    if ( senha.value === "" || senha.length < 10) {
        alert("Preencha o formulario corretamente");
        senha.focus();
        return;
    }

    if ( confirmarSenha.value != senha.value ){
        alert("Confirmação de Senha e Senha não conferem.")
        confirmarSenha.focus();
        return;
    }

    var dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));

    if (dadosUsuario == null){
        localStorage.setItem("dadosUsuario", "[]");
        dadosUsuario = [];
    }

    var temp = {
        nomeUsuario: nomeCompleto.value,
        emailUsuario: email.value,
        senhaUsuario: senha.value,
        confSenhaUsuario: confirmarSenha.value,
    }

    dadosUsuario.push(temp); 

    localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));

    window.location.href="../paginaHome/index.html";
}



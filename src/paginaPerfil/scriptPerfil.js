    //Verifica de Usuario em  armazenado em LocalStorage e adiciona nome de usuario logado em tela de perfil
    var dadosUsuario = [];

    dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));

    for (let i = 0; i < dadosUsuario.length; i++) {
        const elemento = dadosUsuario[i];

        tempUsuario = {
            nome: elemento.nomeUsuario,
        }
        var nomeTitulo = tempUsuario.nome;

        document.getElementById('nomeTitulo').innerHTML = (" " + nomeTitulo);

    }

    //Verifica Cursos realizados pelo usuario e adiciona na tabela Meus Cursos
    var cursoRealizado = [];

    cursoRealizado = JSON.parse(localStorage.getItem("cursoRealizado"));

    var td1 = document.getElementById('td1');
    var td2 = document.getElementById('td2');
    var td3 = document.getElementById('td3');
    td1.style.display = "none";
    td2.style.display = "none";
    td3.style.display = "none";

    if (cursoRealizado != null) {

        for (let i = 0; i < 1; i++) {
   
            nome1 = cursoRealizado[0];
            nome2 = cursoRealizado[1];
            nome3 = cursoRealizado[2];

        }

        if (nome1) {
            td1.style.display = "inline";
            document.getElementById('tdCurso1').innerHTML = (nome1.nomeCurso1);
        }

        if (nome2) {
            td2.style.display = "inline";
            document.getElementById('tdCurso2').innerHTML = (nome2.nomeCurso2);
        }

        if (nome3) {
            td3.style.display = "inline";
            document.getElementById('tdCurso3').innerHTML = (nome3.nomeCurso3);
        }

    }
          

        //Verifica qual botao imprimir certificado da tabela foi pressionado e armazena.
        var el = document.getElementById('linha1');
        el.addEventListener('click', function (e) {
            localStorage.setItem("imprimir", e.target.id);

        });

        var el = document.getElementById('linha2');
        el.addEventListener('click', function (e) {
            localStorage.setItem("imprimir", e.target.id);

        });

        var el = document.getElementById('linha3');
        el.addEventListener('click', function (e) {
            localStorage.setItem("imprimir", e.target.id);

        });
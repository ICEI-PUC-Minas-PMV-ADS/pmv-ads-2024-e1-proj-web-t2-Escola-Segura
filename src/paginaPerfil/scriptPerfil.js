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
    var linha1 = document.getElementById('linha1');
    var linha2 = document.getElementById('linha2');
    var linha3 = document.getElementById('linha3');
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var num3 = document.getElementById('num3');

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

if (cursoRealizado != null) {

    var position1 = "vazio";
    var position2 = "vazio";
    var position3 = "vazio";

    for (let i = 0; i < cursoRealizado.length; i++) {

        nome = cursoRealizado[i];


        if (nome.nomeCurso1 == "CURSO DE PRIMEIROS SOCORROS – MÓDULO 1") {
            if (position1 == "vazio") {
                position1 = "ocupado";
                document.getElementById('num1').innerHTML = "1";
                td1.style.display = "inline-table";
                document.getElementById('tdCurso1').innerHTML = (nome.nomeCurso1);
                localStorage.setItem("printPositiontd1", nome.nomeCurso1);

            } else if (position1 == "ocupado" && position2 == "vazio") {
                position2 = "ocupado";
                document.getElementById('num2').innerHTML = "2";
                td2.style.display = "inline";
                document.getElementById('tdCurso2').innerHTML = (nome.nomeCurso1);
                localStorage.setItem("printPositiontd2", nome.nomeCurso1);

            } else if (position1 == "ocupado" && position2 == "ocupado" && position3 == "vazio") {
                position3 = "ocupado";
                document.getElementById('num3').innerHTML = "3";
                td3.style.display = "inline";
                document.getElementById('tdCurso3').innerHTML = (nome.nomeCurso1);
                localStorage.setItem("printPositiontd3", nome.nomeCurso1);
            }
        }

        if (nome.nomeCurso2 == "CURSO DE PRIMEIROS SOCORROS – MÓDULO 2") {
            if (position1 == "vazio") {
                position1 = "ocupado";
                document.getElementById('num1').innerHTML = "1";
                td1.style.display = "inline-table";
                document.getElementById('tdCurso1').innerHTML = (nome.nomeCurso2);
                localStorage.setItem("printPositiontd1", nome.nomeCurso2);

            } else if (position1 == "ocupado" && position2 == "vazio") {
                position2 = "ocupado";
                document.getElementById('num2').innerHTML = "2";
                td2.style.display = "inline";
                document.getElementById('tdCurso2').innerHTML = (nome.nomeCurso2);
                localStorage.setItem("printPositiontd2", nome.nomeCurso2);

            } else if (position1 == "ocupado" && position2 == "ocupado" && position3 == "vazio") {
                position3 = "ocupado";
                document.getElementById('num3').innerHTML = "3";
                td3.style.display = "inline";
                document.getElementById('tdCurso3').innerHTML = (nome.nomeCurso2);
                localStorage.setItem("printPositiontd3", nome.nomeCurso2);
            }
        }

        if (nome.nomeCurso3 == "Curso Como Previnir Acidentes Infantis Domésticos e Escolares") {
            if (position1 == "vazio") {
                position1 = "ocupado";
                document.getElementById('num1').innerHTML = "1";
                td1.style.display = "inline-table";
                document.getElementById('tdCurso1').innerHTML = (nome.nomeCurso3);
                localStorage.setItem("printPositiontd1", nome.nomeCurso3);

            } else if (position1 == "ocupado" && position2 == "vazio") {
                position2 = "ocupado";
                document.getElementById('num2').innerHTML = "2";
                td2.style.display = "inline";
                document.getElementById('tdCurso2').innerHTML = (nome.nomeCurso3);
                localStorage.setItem("printPositiontd2", nome.nomeCurso3);

            } else if (position1 == "ocupado" && position2 == "ocupado" && position3 == "vazio") {
                position3 = "ocupado";
                document.getElementById('num3').innerHTML = "3";
                td3.style.display = "inline";
                document.getElementById('tdCurso3').innerHTML = (nome.nomeCurso3);
                localStorage.setItem("printPositiontd3", nome.nomeCurso3);
            }
        }
    }

}
          

        
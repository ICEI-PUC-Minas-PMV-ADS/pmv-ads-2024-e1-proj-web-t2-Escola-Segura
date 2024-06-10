# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Os testes funcionais realizados na aplicação web são descritos a seguir.
<br><br>

1. CT-01: Verificar o funcionamento dos links da página Home.
<br><br>
Responsável: Julia.
<br><br>

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/143669562/92a2a030-6c5f-4ccc-9dc4-33314a3f9842

<hr>
2. CT-02: Verificar o cadastro de usuários.
<br><br>
Responsável: Rafael.
<br><br>
Usuário preenche os campos "Senha" e "Confirmaçāo de Senha" com valores diferentes.
<br><br>

![Captura de tela 2024-05-27 193757](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/1cfd7bd4-b107-4803-899d-0fa83e5223eb)


Usuario consegue se cadastrar e pagina retorna para tela login.

![Captura de tela 2024-05-27 194651](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/57c2dafe-7650-482d-b8dc-146c7f135225)


![login novo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/62859c8f-cec0-40d7-a14c-029b83f7970d)


Informações armazenadas no LocalStorage após usuário se cadastrar.

![Captura de tela 2024-05-27 194135](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/10a8d179-a3c2-4ca6-b2f4-b644330ac0d4)

<hr>
3. CT-03: Verificar o login de usuários.
<br><br>
Responsável: Lucas.
<br><br>
No exemplo abaixo o usuário preenche os campos "Email" e "Senha" com valores diferentes do usuário já cadastrado, o que resulta na mensagem de erro.
<br><br>
Quando corrigido e preencido as informações de usuário válidas, o login será bem sucedido e o usuárui é redirecionado para página Home onde é adicionado no Menu superfior o link para pagina de Perfil.
<br><br>
A Informação de usuário logado é armazenada em localStorage.
<br><br>

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/155129810/d086ebc1-75ee-4305-90a3-b4dceabc2d75
<hr>

4. CT-04: Verificar o funcionamento da pesquisa de contatos.
<br><br>
Responsável: Luiza Gabriela.
<br><br>
O usuário acessa a página de contatos emergenciais e pesquisa o contato desejado.

![WhatsApp Image 2024-06-09 at 14 49 01](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/143669562/36cf0e2f-2cba-46eb-a8a9-74468a286ed5)

E o sistema responde a pesquisa de acordo com o que o usuário necessita.

![WhatsApp Image 2024-06-09 at 14 49 02](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/143669562/388fb24b-fa5e-4049-97eb-19266ae395f9)

<hr>

5. CT-05: Pesquisar tutoriais.
<br><br>
Responsável: Luiza Gabriela.
<br><br>
Usúario acessa a página de tutoriais

![Captura de tela 2024-06-03 193537](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164196514/95ba6003-1d6a-4eb9-9e80-b3c60a88d38b)

Insere o nome do tutorial que deseja assistir

![Captura de tela 2024-06-03 193550](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164196514/3d977c4a-ba62-415d-bed0-b656f8923885)

e recebe as informações do tutorial que deseja assistir.

6. CT-06: Verificar funcionalidade de gerar certificado.
<br><br>
Responsável: Julia.
<br><br>
Usúario acessar o perfil

![Captura de tela 2024-06-03 193806](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164196514/9b72e684-78f0-46f8-af25-0e4e1818e22a)

clicar em certificados do curso concluído

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/143669562/c6543702-8873-454f-bfc4-f027440e63d8

o certificado é gerado e disponibilizado para baixar e imprimir.

<hr>

7. CT-07: Verificar detalhes dos cursos.
<br><br>
Responsável: Rafael.
<br><br>
Usuario acessa o menu cursos na tela home

![Captura de tela 2024-05-27 195813](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/505c7b56-938c-4369-804e-39fff15e3368)

Na tela cursos o usuario consegue visualizar as informações principais de cada curso em formato resumo.


![Captura de tela 2024-05-27 195253](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/8b9eb92c-d7aa-4b75-8fa5-2b31432b55da)
<br>
<br>
<hr>

8. CT-08: Verificar funcionalidade cursos realizados.
<br><br>
Responsável: Nizia
<br><br>
Usúario acessa a tela Perfil após ter concluido o curso


https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164581054/255ffd1f-2c87-4b98-98bb-a30ff028aa27

E consegue visualizar as informações e baixar o certificado do curso desejado.

<hr>
<br><br>

9. CT-09: Verificar página cursos.
<br><br>
Responsável: Lucas.
<br><br>
Usuário acessa página cursos onde visualiza os cursos disponiveis.
<br><br>

![Print_tela_pagina_cursos2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/155129810/188a1f0c-2df4-4cce-a603-46a28594af01)
<br>
<br>
<hr>
<br><br>

10. CT-10: Verificar página contatos.
<br><br>
Responsável: Lucas.
<br><br>
Usuário acessa página de contatos onde visualiza a lista de contatos emergenciais disponiveis.
<br><br>

![Print_tela_pagina_contatos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/155129810/a16799c6-e6e7-456c-9e4d-1500ab31531a)


## Avaliação

Os testes de software mostraram que os requisitos priorizados foram atendidos, funcionando como planejado


# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Os testes funcionais realizados na aplicação web são descritos a seguir.

<hr>
2. CT-02: Verificar o cadastro de usuários.
Responsável: Rafael.

Usuário preenche os campos "Senha" e "Confirmaçāo de Senha" com valores diferentes.

![Captura de tela 2024-05-27 193757](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/1cfd7bd4-b107-4803-899d-0fa83e5223eb)


Usuario consegue se cadastrar e pagina retorna para tela login.

![Captura de tela 2024-05-27 194651](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/57c2dafe-7650-482d-b8dc-146c7f135225)


![login novo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/62859c8f-cec0-40d7-a14c-029b83f7970d)


Informações armazenadas no LocalStorage após usuário se cadastrar.

![Captura de tela 2024-05-27 194135](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/10a8d179-a3c2-4ca6-b2f4-b644330ac0d4)

<hr>
3. CT-03: Verificar o login de usuários.
Responsável: Lucas.

Usuário preenche os campos "Email" e "Senha" com valores diferentes do usuário já cadastrado.

![Captura de tela 2024-05-27 182209](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/4f92f6f1-cdc5-4bbd-801f-bc3c918cedf8)

Se as informações de usuário forem válidas, o login será bem sucedido e redirecionado para pagina home e link pagina de perfil é adicionado no menu.

![tela de login com email e senha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/3302d7db-fd83-4570-b031-bb0f059d419f)

![Captura de tela 2024-05-27 182403](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/184bc440-fc52-45a7-9b3f-c9027d929a57)

Informações armazenadas no LocalStorage do usuário logado.

![Captura de tela 2024-05-27 190425](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/1862e2d2-5928-4e49-a38a-bb2c8fdb7553)

<hr>

5. CT-05: Pesquisar tutoriais. Responsável: Luiza Gabriela.

Usúario acessa a página de tutoriais

![Captura de tela 2024-06-03 193537](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164196514/95ba6003-1d6a-4eb9-9e80-b3c60a88d38b)

Insere o nome do tutorial que deseja assistir

![Captura de tela 2024-06-03 193550](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164196514/3d977c4a-ba62-415d-bed0-b656f8923885)

e recebe as informações do tutorial que deseja assistir.

6. CT-06: Verificar funcionalidade de gerar certificado. Responsável: Luiza Gabriela.

Usúario acessar o perfil

![Captura de tela 2024-06-03 193806](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164196514/9b72e684-78f0-46f8-af25-0e4e1818e22a)

clicar em certificados do curso concluído

![Captura de tela 2024-06-03 193822](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164196514/8ebb351c-a6c6-49b9-9f1d-9fea286f9fd3)

o certificado é gerado e disponibilizado para baixar e imprimir.

8. CT-07: Verificar detalhes dos cursos. Responsável: Rafael.

Usuario acessa o menu cursos na tela home

![Captura de tela 2024-05-27 195813](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/505c7b56-938c-4369-804e-39fff15e3368)

Na tela cursos o usuario consegue visualizar as informações principais de cada curso em formato resumo.


![Captura de tela 2024-05-27 195253](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164248210/8b9eb92c-d7aa-4b75-8fa5-2b31432b55da)

9. CT-08: Verificar funcionalidade cursos realizados
Responsável: Lucas

Usúario acessa a tela Perfil após ter concluido o curso


https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t2-Escola-Segura/assets/164581054/255ffd1f-2c87-4b98-98bb-a30ff028aa27

E consegue visualizar as informações e baixar o certificado do curso desejado.



## Avaliação

Os testes de software mostraram que os requisitos priorizados foram atendidos, funcionando como planejado


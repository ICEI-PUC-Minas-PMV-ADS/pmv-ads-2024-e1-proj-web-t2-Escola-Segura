# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:

* Site publicado na internet;
* Navegador da internet: Chrome, Firefox ou Edge.
Os testes funcionais a serem realizados na aplicação são descritos a seguir:

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-002: A aplicação deve permitir que o usuário faça login na sua conta.</li>
   <li>RF-004:  A aplicação deve oferecer um catálogo de cursos.</li>
   <li>RF-007:  A aplicação deve oferecer uma página de contatos emergenciais de todos os estados do Brasil.</li>
    
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Julia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o cadastro de usuarios  </td>
  <td>
   <ul>
    <li>RF-001: A aplicação deve permitir ao usuário cadastrar uma conta.</li>

   </ul>
  </td>
  <td>Realizar o cadastro com nome, e-mail e senha </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Clicar no botão de "cadastre-se".</li>
    <li>Iniciar o cadastro com nome, e-mail e senha.</li>
    <li>finalizar o processo clicando no botão "cadastrar".</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário e ao clicar em "cadastrar" deve redirecionar para pagina de login </td>
  <td>Rafael</td></td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o login de usuarios Home</td>
  <td>
   <ul>
   
   <li>RF-002: A aplicação deve permitir que o usuário faça login na sua conta.</li>
  
   </ul>
  </td>
  <td>Verificar se o login esta sendo feito corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links de login</li>
    <li>Digitar e-mail e senha </li>
    <li>Clicar no botão de "entrar"</li>
    
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a página home.	</td>
  <td>Lucas</td>
 </tr>
</table>

<table>
    <tr>
     <th>Caso de teste</th>
     <th>Requisitos associados</th>
     <th>Objetivo do teste</th>
     <th>Passos</th>
     <th>Critérios de êxito</th>
     <th>Responsável</th>
    </tr>
    <tr>
     <td>CT-04: Verificar o funcionamento da pesquisa de contatos</td>
     <td>
      <ul>
       <li>RF-003: A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar contatos de emegencia.</li>
      </ul>
     </td>
     <td>Verificar se a pesquisa de contatos emergenciais está funcionando corretamente.</td>
     <td>
      <ol>
       <li>Acessar o navegador.</li>
       <li>Informar o endereço do site.</li>
       <li>Visualizar a página Home.</li>
       <li>Clicar no link contatos.</li>
      </ol>
      </td>
     <td>A pagina deve oferecer busca de contatos emergenciais.</td>
     <td>Luiza</td>
    </tr>
   </table>

   <table>
    <tr>
     <th>Caso de teste</th>
     <th>Requisitos associados</th>
     <th>Objetivo do teste</th>
     <th>Passos</th>
     <th>Critérios de êxito</th>
     <th>Responsável</th>
    </tr>
    <tr>
     <td>CT-05: Verificar o funcionamento da pesquisa de tutoriais</td>
     <td>
      <ul>
       <li>RF-005: A aplicação deve oferecer uma funcionalidade de pesquisa para permitir ao usuário localizar tutoriais específicos.</li>
      </ul>
     </td>
     <td>Verificar se a pesquisa de tutoriais está funcionando corretamente.</td>
     <td>
      <ol>
       <li>Acessar o navegador.</li>
       <li>Informar o endereço do site.</li>
       <li>Visualizar a página Home.</li>
       <li>Clicar no link tutoriais.</li>
      </ol>
      </td>
     <td>A pagina deve oferecer busca de tutoriais.</td>
     <td>Luiza Gabriela</td>
    </tr>
   </table>

   <table>
    <tr>
     <th>Caso de teste</th>
     <th>Requisitos associados</th>
     <th>Objetivo do teste</th>
     <th>Passos</th>
     <th>Critérios de êxito</th>
     <th>Responsável</th>
    </tr>
    <tr>
     <td>CT-06: Verificar o funcionamento do gerador de certificado</td>
     <td>
      <ul>
       <li>RF-006: A aplicação deve permitir que o usuário gere seu certificado de conclusão de curso.</li>
      </ul>
     </td>
     <td>Verificar se o gerador de certificado está funcionando corretamente.</td>
     <td>
      <ol>
       <li>Acessar o navegador.</li>
       <li>Informar o endereço do site.</li>
       <li>Visualizar a página Home.</li>
       <li>Clicar no link perfil.</li>
       <li>Clicar em gerar certificado.</li>
      </ol>
      </td>
     <td>A página deve oferecer emição de certificado.</td>
     <td>Julia</td>
    </tr>
   </table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-07: Verificar detalhes dos cursos</td>
  <td>
   <ul>
    <li>RF-008:	A aplicação deve oferecer imagens de capa correspondente para cada curso e apostila.</li>
    <li>RF-010:	A aplicação deve permitir ao usuário visualizar as informações sobre o curso.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações referentes aos cursos estão disponíveis na página cursos</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página cursos.</li>
    <li>Visualizar as informações referentes aos cursos disponíveis na página.</li>
   </ol>
   </td>
  <td>Todas as informações, incluindo imagens das capas, referentes aos cursos estão disponíveis na página Cursos.</td>
  <td>Rafael</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-08: Verificar funcionalidade cursos realizados</td>
  <td>
   <ul>
    <li>RF-009:	A aplicação de permitir que o usuário visualize os cursos já realizados na página perfil.</li>
   </ul>
  </td>
  <td>Verificar se a página Perfil está apresentando as informações sobre os cursos realizados pelo usuário</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Perfil</li>
    <li>Visualizar as informações referentes aos cursos realizados</li>
   </ol>
   </td>
  <td>As informações de cursos realizados pelo usuário devem estar disponiveis na página Perfil.</td>
  <td>Nizia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-09: Verificar página cursos.</td>
  <td>
   <ul>
    <li>RF-004: A aplicação deve oferecer um catálogo de cursos.</li>
   </ul>
  </td>
  <td>Verificar a página Cursos está apresentando o cursos disponiveis</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Cursos</li>
    <li>Visualizar os cursos disponiveis</li>
   </ol>
   </td>
  <td>Todos os cursos devem ser apresentados na pagina de cursos.</td>
  <td>Lucas</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-10: Verificar página contatos</td>
  <td>
   <ul>
    <li>RF-007: A aplicação deve oferecer uma página de contatos emergenciais de todos os estados do Brasil.</li>
   </ul>
  </td>
  <td>Verificar a página contatos está apresentando lista de contatos emergenciais</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Contatos</li>
    <li>Visualizar a lista de contatos disponivel</li>
   </ol>
   </td>
  <td>Todos os contatos disponiveis devem esta listados na página.</td>
  <td>Lucas</td>
 </tr>
</table>

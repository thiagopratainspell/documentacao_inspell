# <span class="titulo_azul"> <b>Lista de Colaboradores Cadastrados</b> </span>

A <b>Página de Colaboradores</b> exibe a listagem de todos os <b>funcionários cadastrados</b> na plataforma, sejam admitidos, demitidos ou afastados, permitindo <b>visualizar</b>, <b>gerenciar</b> e realizar <b>ações</b> sobre cada registro.

![Image1](image/lista_de_colaboradores.png)

---

# <span class="titulo_azul"> <b>Principais Recursos e Componentes da Tela</b> </span>

## **1 - Filtros de Seleção** 
### Permite localizar colaboradores específicos na listagem

<table class="tabela-config">
  <thead>
    <tr>
      <th>Campo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>  
      <td>Pesquisar</td>
      <td>Campo de texto livre para buscar colaboradores pelo Nome</b> ou CPF</td>
    </tr>
    <tr>  
      <td>Status</td>
      <td>Filtra a listagem por situação do colaborador (Admitido, Demitido, Afastado ou Todos)</td>
        </tr>
  </tbody>
</table>

---

## **2 - Listagem de Colaboradores** 
### A tabela exibe as seguintes informações para cada colaborador cadastrado

<table class="tabela-config">
  <thead>
    <tr>
      <th>Campo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>  
      <td>Colaborador</td>
      <td>Foto ou iniciais do colaborador acompanhadas do nome completo</td>
    </tr>
    <tr>  
      <td>CPF</td>
      <td>Número do documento do colaborador</td>
    </tr>
    <tr>  
      <td>E-mail</td>
      <td>Endereço de e-mail cadastrado</td>
    </tr>
    <tr>  
      <td>Cargo</td>
      <td>Cargo atribuído ao colaborador</td>
    </tr>
    <tr>  
      <td>Status</td>
      <td>Situação atual do colaborador, indicada por um <i>badge</i> colorido (ex: Admitido)</td>
    </tr>
    <tr class="secao">
      <td colspan="2">Ações</td>
    </tr>
    <tr>  
      <td>✏️ Editar</td>
      <td>Abre o cadastro do colaborador para edição</td>
    </tr>
    <tr>  
      <td>🗑️ Excluir</td>
      <td>Remove o colaborador do sistema</td>
    </tr>
    <tr>  
      <td>👁️ Visualizar</td>
      <td>Exibe os detalhes do colaborador em modo leitura</td>
    </tr>
  </tbody>
</table>

---

!!! warning "Observações Importantes"
    - O sistema só permite **excluir colaboradores** que **<span style="color: red;">NÂO</span>** possuam **marcações de ponto** vinculadas a ele.
    - O iPonto Web só contabiliza **Colaboradores Admitidos** para o Controle de Capacidade. Colaboradores **demitidos** ou **afastados** não são considerados.
    - Caso você encontre **algum problema** durante o processo, não hesite em **buscar ajuda** com a nossa **equipe de suporte!**
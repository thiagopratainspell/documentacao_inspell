# <span class="titulo_azul"> <b>Página de Coletores Cadastrados</b> </span>

---

## **Aplicação**

&nbsp;&nbsp;&nbsp;&nbsp;A <b>Página de Coletores</b> exibe a listagem de todos os <b>equipamentos cadastrados</b> na plataforma, estajam **em operação** ou não, permitindo <b>visualizar</b>, <b>gerenciar</b> e realizar <b>ações</b> sobre cada registro.

---

## **Utilização**

&nbsp;&nbsp;&nbsp;&nbsp;A tela dispõe das seguintes **opções** para uso:

<figure markdown>
  ![Image2](../../../../image/cadastros/principais/coletores/lista_de_coletores.png)
  <figcaption>Interface de Cadastro de Coletores</b></figcaption>
</figure>

- *Botão* <span class="spanBotoes" style="background-color: #254BC3">+ Novo Coletor</span> ➡ Abre a tela de cadastro de um **novo coletor**, permitindo **incluir** suas informações e **adicioná-lo** ao sistema.
- *Filtros de Seleção:* Permite **filtar** os registros da tabela com base nos seguintes **métodos**:
    - *Pesquisar:* Busca os registros na **tabela** com base no texto inserido no **campo**. Filtra apenas o conteúdo das colunas (**Descrição** e **Modelo** ou **Local**).
    - *Status:* Filtra a tabela com base no **status** atual do coletor (**Todos**, **Em operação** e **Fora de Operação**.)
- *Tabela de Coletores Cadastrados:* Exibe, através de **5** colunas, informações **importantes** sobre cada **coletor** registrado no sistema, além de um menu de **ações** para **gerenciar** cada cadastro:
    - *Modelo / Marca do Coletor:* Exibe o **modelo**, a **marca** e a **foto** do coletor.
    - *Descrição:* Indica a **descrição** do coletor inserida durante o seu **cadastro**.
    - *Local de Instalação:* Mostra o local de instalação vinculado ao **coletor**, utilizado para .
    - *Status:* Indica o atual **status** do equipamento, ou seja, se ele está <span class="spanBotoes" style="background-color: #254BC3">Em Operação</span> ou <span class="spanBotoes" style="background-color: #8A8D93">Fora de Operação</span>
    - *Ações:* Exibe um **grupo de ações** que são utilizadas para gerenciar cada cadastro:
        - 🖊 ➡ Abre a tela de **edição** do coletor, permitindo alterar suas informações **técnicas** e de **identificação**.
        - 🗑 ➡ Exclui **permanentemente** o registro do coletor do sistema.
        - 👁 ➡ Abre o **cadastro** do equipamento em modo de **visualização**, ou seja, não permite **alterar** as suas informações, apenas **vê-las**. 

!!! danger "Atenção"
    O sistema só permite **excluir coletores** que **NÂO** possuam **marcações de ponto** vinculadas a ele.

!!! note "Informações"
    - Alguns equipamentos integrados com o **iPonto Web** necessitam do nosso **Agente de Comunicação iGateway** instalado na máquina para realizar a conexão. Para baixar o **instalador** do iGateway, **<a href="https://inspell.com.br/downloads/iponto/iGateway.exe" target="_blank">Clique Aqui</a>**.
    - Os equipamentos, quando colocados no estado de "**Fora de Operação**", deixam de ser exibidos na seção "**Coletores Vinculados**, no Cadastro de **Colaboradores**.
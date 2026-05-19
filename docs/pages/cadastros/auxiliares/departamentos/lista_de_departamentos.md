# <span class="titulo_azul"> <b>Página de Departamentos Cadastrados</b> </span>

---

## **Aplicação**

&nbsp;&nbsp;&nbsp;&nbsp;A <b>Página de Departamentos</b> exibe a listagem de todos os <b>registros cadastrados</b> na plataforma, ativos ou inativos, permitindo <b>gerenciar</b> e realizar <b>ações</b> sobre cada registro.

---

## **Utilização**

&nbsp;&nbsp;&nbsp;&nbsp;A tela dispõe das seguintes **opções** para uso:


![Image2](../../../../image/cadastros/auxiliares/departamentos/lista_de_departamentos.png)

- *Botão* <span class="spanBotoes" style="background-color: #254BC3">+ Novo Departamento</span> ➡ Abre a tela de cadastro de um **novo departamento**, permitindo **editar** suas informações e **adicioná-lo** ao sistema.
- *Filtros de Seleção:* Permite **filtrar** os registros da tabela com base nos seguintes **métodos**:
    - *Pesquisar:* Busca os registros na **tabela** com base no texto inserido no **campo**. Filtra apenas o conteúdo da coluna **Descrição**.
    - *Status:* Filtra a tabela com base no **status** atual do departamento (**Ativo** e **Inativo**.)
- *Tabela de Departamentos Cadastrados:* Exibe, através de **3** colunas, informações **importantes** sobre cada **departamento** registrado no sistema, além de um menu de **ações** para **gerenciar** cada cadastro:
    - *Descrição:* Exibe a **descrição** do departamento, utilizada para **identificação** na lista. É inserida durante o **cadastro** do departamento.
    - *Status:* Indica o atual **status** do departamento, ou seja, se ele está <span class="spanBotoes" style="background-color: #254BC3">Ativo</span> ou <span class="spanBotoes" style="background-color: #8A8D93">Inativo</span>
    - *Ações:* Exibe um **grupo de ações** que são utilizadas para gerenciar cada cadastro:
        - 🖊 ➡ Abre a tela de **edição** do departamento, permitindo alterar sua **descrição** e o seu **status**.
        - 🗑 ➡ Exclui **permanentemente** o registro do departamento do sistema.


!!! note "Informações"
    - O sistema só permite **excluir departamentos** que **<span style="color: red;">NÂO</span>** estejam vinculados com algum colaborador.
    - Para evitar **inconsistências**, o sistema **<span style="color: red;">NÂO</span>** permite incluir dois ou mais departamentos com exatamente o **mesmo nome**.
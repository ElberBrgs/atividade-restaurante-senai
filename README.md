# Sistema de Gestão de Restaurantes

Este projeto visa gerenciar informações de um restaurante, permitindo o cadastro, listagem e visualização de detalhes de pratos, com foco em uma experiência visual de cardápio. Os dados serão consumidos de uma API.

---

## Funcionalidades do Sistema

* **Tela Inicial:** Exibe o logo do restaurante e serve como ponto de entrada do sistema.
* **Tela de Cadastro de Prato:** Permite cadastrar um novo prato, informando:
    * Nome do Prato
    * Descrição
    * Preço
    * Categoria (Ex: Entrada, Prato Principal, Sobremesa, Bebida)
    * Disponibilidade (Ex: Em estoque, Esgotado)
    * URL da Imagem do Prato: Um campo para inserir o link de uma imagem do prato.
* **Tela de Cardápio (Listagem de Pratos):** Apresenta todos os pratos cadastrados de forma visualmente organizada, exibindo a imagem, nome e preço.

---

## Estrutura Sugerida das Páginas

* **Inicial:**
    Exibe o logo do restaurante e um menu para navegar para o cadastro de pratos ou para o Cardápio.
* **Cadastro de Prato:**
    Formulário para inserir os dados do prato, incluindo o campo para a URL da imagem. Ao salvar, os dados são enviados para uma API (ou salvos localmente, caso não haja backend).
* **Cardápio (Lista de Pratos):**
    Mostra todos os pratos cadastrados, exibindo a imagem do prato, o nome e o preço, organizados em um layout de grade ou similar, remetendo a um menu de restaurante visual. Pode ter opções de filtragem por categoria.

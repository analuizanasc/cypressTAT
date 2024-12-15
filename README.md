# Testes _end-to-end_ com Cypress

# Português

# Teste Ponta a Ponta com Cypress

Projeto de exemplo para demonstrar testes end-to-end (e2e) escritos com Cypress rodando no GitHub Actions.

## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (Eu usei a `2.34.1` ao escrever esta documentação)
- [Node.js](https://nodejs.org/en/) (Eu usei a `v18.15.0` ao escrever esta documentação)
- npm (Eu usei a `9.5.0` ao escrever esta documentação)

**Nota:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar).

## Configurando as variáveis de ambiente

Antes de executar os testes, é necessário configurar algumas variáveis de ambiente.

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) com o nome `cypress.env.json`, e defina os valores apropriados para todas as variáveis.

**Nota:** O arquivo `cypress.env.json` não é rastreado pelo git, pois está listado no arquivo `.gitignore`.

## Executando os testes

Neste projeto, você pode executar os testes nos modos interativo e headless, tanto em viewports de desktop quanto de tablet.

### Modo Headless

- Execute `npm test` (ou `npm t` para abreviar) para rodar todos os testes no modo headless usando um viewport de desktop.
- Execute `npm run test:tablet` para rodar os testes apropriados no modo headless usando um viewport de tablet.

### Modo Interativo

- Execute `npm run cy:open` para abrir o __Cypress App__ e rodar os testes no modo interativo usando um viewport de desktop.
- Execute `npm run cy:open:tablet` para abrir o __Cypress App__ e rodar os testes no modo interativo usando um viewport de tablet.

___

Feito por [Ana Luiza](https://github.com/analuizanasc).



# ENGLISH
# End-to-end Testing with Cypress 

Sample project to demonstrate end-to-end (e2e) tests written with [Cypress](https://cypress.io) running on GitHub Actions.

## Pre-requirements

To clone and run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.34.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v18.15.0` while writing this doc)
- npm (I've used version `9.5.0` while writing this doc)

**Note:** When installing Node.js, npm is automatically installed. 🚀

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** The `cypress.env.json` file is not tracked by git since it's listed in the `.gitignore` file.

## Running the tests

In this project, you can run tests in interactive and headless modes, both on desktop and tablet viewports.

### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode using a desktop viewport.

Run `npm run test:tablet` to run the appropriate tests in headless mode using a tablet viewport.

### Interactive mode

Run `npm run cy:open` to open the __Cypress App__ to run tests in interactive mode using a desktop viewport.

Run `npm run cy:open:tablet` to open the __Cypress App__ to run tests in interactive mode using a tablet viewport.

___

Made by [Ana Luiza](https://github.com/analuizanasc).

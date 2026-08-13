# Cypress OrangeHRM Automation

## Sobre o projeto

Projeto de automação de testes E2E desenvolvido com Cypress utilizando a aplicação OrangeHRM Demo como ambiente de testes.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

## Cenários de teste

### Login

- Login com credenciais válidas
- Login com credenciais inválidas
- Validação do acesso ao Dashboard

### Atualização de informações do usuário

- Acessar a página de informações pessoais
- Alterar nome e sobrenome
- Alterar Middle Name
- Alterar Employee ID
- Alterar Other ID
- Alterar Driver's License
- Alterar data de validade da carteira de motorista
- Alterar nacionalidade
- Alterar estado civil
- Alterar data de nascimento
- Selecionar gênero
- Salvar as alterações
- Validar mensagem de sucesso

## Estrutura do projeto

```text
cypress-orangehrm-automation/
│
├── cypress/
│   ├── e2e/
│   │   └── user.spec.cy.js
│   │
│   ├── fixtures/
│   │   ├── example.json
│   │   └── userData.json
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```
## Instalação

Para executar o projeto localmente, primeiro clone o repositório:

```bash
git clone https://github.com/Dehfreittas/cypress-orangehrm-automation.git

cd cypress-orangehrm-automation

npm install 
```
## Execução dos testes
Para abrir o Cypress em modo interativo:

```bash
npx cypress open
```
Para executar os testes em modo headless:

```bash
npx cypress run
```
## Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar conhecimentos em automação de testes E2E utilizando Cypress.

Durante o desenvolvimento, foram aplicados conceitos como:

- Seletores CSS
- Interação com campos de formulário
- Dropdowns
- Radio buttons
- Validações com assertions
- Organização de seletores
- Uso de fixtures
- Validação de mensagens de sucesso
- Estruturação de testes automatizados

## Resultado dos testes

Os testes foram executados com sucesso utilizando o Cypress.

Os cenários automatizados contemplam:

- Login com credenciais válidas
- Login com credenciais inválidas
- Atualização das informações pessoais do usuário
- Validação dos campos alterados
- Seleção de nacionalidade e estado civil
- Seleção de gênero
- Validação da mensagem de sucesso após a atualização

## Aplicação utilizada

Os testes foram desenvolvidos utilizando a versão Demo do OrangeHRM como ambiente de testes.

- OrangeHRM Demo: https://opensource-demo.orangehrmlive.com/

## Autor

André Freitas

Projeto desenvolvido para prática e demonstração de conhecimentos em Quality Assurance e automação de testes E2E com Cypress.
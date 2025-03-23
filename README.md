# 🧪 Testes Automatizados com Cypress

![Cypress Logo](https://github.com/cypress-io/cypress/raw/develop/assets/cypress-logo-dark.png) 

Este repositório contém testes automatizados end-to-end (E2E) utilizando **Cypress** para a aplicação **SwagLabs**, um ambiente desenvolvido para prática de testes automatizados!  

![SwagLabs Logo](https://github.com/user-attachments/assets/ebfaf140-63ed-4d6e-b0e2-725f7880bf9d) 

## 🚀 Tecnologias Utilizadas

- **Cypress** 🏗️ - Ferramenta para automação de testes
- **Faker.js** 🎭 - Geração de massa de dados para os testes
- **Mochawesome** 📊 - Geração de relatórios detalhados de execução

📌 **Total de testes automatizados**: **16**

## 🔍 Funcionalidades Testadas

✔️ Login de usuário 🔑  
✔️ Navegação na tela de produtos 🛍️  
✔️ Compra de produtos 💳  

## 📌 Padrão de Projeto Utilizado: **Page Object Model (POM)**

O **Page Object Model (POM)** é um padrão de projeto para automação de testes que melhora a organização e a reutilização do código. Ele separa a lógica dos testes da estrutura das páginas, tornando o projeto mais fácil para compreensão, manutenção e utilização. Cada página da aplicação tem uma classe correspondente que encapsula os elementos e ações da interface.

## 📊 Relatório Produzido

![Relatório de Testes](https://github.com/user-attachments/assets/637f4c98-d6dd-449c-b0df-0d9626d5aa38)

## 📂 Arquitetura do Projeto

```bash
cypress/
│── e2e/
│   ├── CartTest.cy.js
│   ├── checkoutTest.cy.js
│   ├── loginTest.cy.js
│
│── fixtures/
│   ├── loginData.json
│
│── support/
│   ├── pages/
│   │   ├── checkoutPage.js
│   │   ├── loginPage.js
│   │   ├── productPage.js
│   ├── commands.js
│   ├── e2e.js
│   ├── faker.js
│
├── .gitignore
├── LICENSE
├── cypress.config.js
├── package-lock.json
├── package.json
```

## ▶️ Para executar os testes, execute estes comandos no terminal:

1️⃣ **Instale as dependências:**
```sh
npm install
```

2️⃣ **Execute os testes e gere o relatório:**
```sh
npm run cy:run:chrome
```

---

Com isso, os testes serão executados no **Google Chrome** e o relatório será gerado automaticamente! 🎯

💡 **Alternativo:** Você também pode rodar os testes em modo interativo com:
```sh
npx cypress open
```


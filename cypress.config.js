const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

//aqui colocamos todas as configuracoes base dos testes automatizados, um exemplo seria a url base:
module.exports = defineConfig({
  e2e: {
  baseUrl: 'https://www.saucedemo.com/v1/',
  }, 
});

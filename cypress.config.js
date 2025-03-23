const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});


module.exports = defineConfig({
  e2e: {
  baseUrl: 'https://www.saucedemo.com/v1/',
  }, 
});

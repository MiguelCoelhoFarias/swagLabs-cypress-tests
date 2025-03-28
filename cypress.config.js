const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    }
  },
  cypressMochawesomeReporterReporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  chromeWebSecurity: false,
  
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});


const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    //baseUrl: 'https://opencart.abstracta.us',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

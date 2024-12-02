const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  env: {
    environment: 'dev',
    tst: {
      web_url:"https://magento.softwaretestingboard.com/ ",
  
    },
    dev: {
      web_url: "https://magento.softwaretestingboard.com/",
    },
  },
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Magento Test Reports',
    html: true,
    json: true,
    overwrite:false,
    reportFilename: '[status]_[datetime]-[name]-report',
    timestamp: 'longDate',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: false,
  viewportHeight: 1200,
  viewportWidth: 1900,
  e2e: {
    specPattern: './cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
     on('file:preprocessor', cucumber())
     require('cypress-mochawesome-reporter/plugin')(on);
     on('task', {
      log(message) {
        console.log(message +'\n\n');
        return null;
      },
    });
    },
  },
})
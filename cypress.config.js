const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 100000,
    execTimeout: 120000,
    taskTimeout: 120000,
    retries: { "runMode": 0, "openMode": 0 },
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,

    e2e: {
       baseUrl: "https://demo.nopcommerce.com/",
        "specPattern": "cypress/e2e/**/*.{feature,features}",
    setupNodeEvents(on, config) {
        return require('./cypress/plugins/index.js')(on, config),
            on('task', {
                log(message) {
                    console.log(message)
                    return null
                },
            })
    },
  },
});
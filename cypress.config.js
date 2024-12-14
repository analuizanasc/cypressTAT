const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    defaultCommandTimeout: 11000, // solucionar erro de timeout 5000ms
    requestTimeout: 10000
  },
  projectId: 'ao9kow',
  chromeWebSecurity: false
})

const browserOptions = {
  slowMo: 0, //antall milisekunder venting pr step,
  headless: false, // true vil åpne browseren slik at den er synlig
};

// Kan modde denne for mobile etc
const contextOptions = { viewport: { width: 1200, height: 800 } };

const config = {
  browser: process.env.BROWSER || "chromium",
  browserOptions,
  contextOptions,
  timeout: 30000,
  expect: { timeout: 30000 },
  testDir: 'tests',
  reporter: [
    reporter: [['list', { printSteps: true }]],
  ],

  BASE_URL:
    "https://opptak-admissio-soknadsbehandling-staging.paas2.uninett.no/",
};

module.exports = config;

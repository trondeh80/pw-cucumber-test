const config = require("./playwrightConfig");
const { After, AfterAll, Before, BeforeAll } = require("@cucumber/cucumber");
const { chromium, firefox, webkit } = require("@playwright/test");

let page;
let browser;

BeforeAll(async () => {
  switch (config.browser) {
    case "firefox":
      browser = await firefox.launch(config.browserOptions);
      break;
    case "webkit":
      browser = await webkit.launch(config.browserOptions);
      break;
    default:
      browser = await chromium.launch(config.browserOptions);
  }
});

Before(async () => {
  console.log("Running before");
  try {
    context = await browser.newContext(config.contextOptions);
    page = await context.newPage();
  } catch (error) {
    console.log("Before failed:", error);
    throw error;
  }
});

After(async () => {
  try {
    await page.close();
    await context.close();
  } catch (error) {
    console.log("After failed:", error);
    throw error;
  }
});

AfterAll(async () => {
  try {
    await browser.close();
  } catch (error) {
    console.log("AfterAll failed:", error);
    throw error;
  }
});

// Export getter for page
const getPage = () => {
  if (!page) {
    throw new Error(
      "Page is not initialized. Did you forget to run the Before hook?"
    );
  }
  return page;
};

module.exports = { getPage };

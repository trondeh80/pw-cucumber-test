const { Given, Then, When } = require("@cucumber/cucumber");
const config = require("../../../src/support/playwrightConfig");
const { getPage } = require("../../../src/support/world");

async function loginWithMock(username) {
  const page = getPage();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByLabel("Skriv inn brukernavn").fill(username);
  // Todo: add all steps for successful login
}

Given(
  "at person med brukernavn {string} er logget inn",
  async function (brukernavn) {
    const page = getPage();
    await page.goto(config.BASE_URL);
    await loginWithMock(brukernavn);
  }
);

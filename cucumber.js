const config = {
  // require: ["./src/steps/*.steps.js"],
  format: [
    "message:reports/cucumber-report.ndjson",
    "json:reports/cucumber-report.json",
    "html:reports/report.html",
    "@cucumber/pretty-formatter",
  ],
  formatOptions: { snippetInterface: "async-await" },
  tags: "", //legg inn tags her for å kjøre enkelttester. husk alfakrøll
};

module.exports = config;

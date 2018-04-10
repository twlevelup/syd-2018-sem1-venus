const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require('../../templates/callPolicePage.hbs');

class CallPolicePage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = CallPolicePage;

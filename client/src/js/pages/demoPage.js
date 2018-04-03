const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/demoPage.hbs')

class DemoPage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = DemoPage;

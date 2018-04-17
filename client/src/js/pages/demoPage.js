const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/demoPage.hbs')

class DemoPage extends BasePage {
  template() {
    return compiledTemplate();
  }
  rightButtonEvent() {
    this.navigate('/');
  }
}

module.exports = DemoPage;

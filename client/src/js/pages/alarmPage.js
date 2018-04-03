const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/alarmPage.hbs');

class AlarmPage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = AlarmPage;

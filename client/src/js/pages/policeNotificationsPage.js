const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/policeNotificationsPage.hbs");

class policeNotificationsPage extends BasePage {
  template() {
    return compiledTemplate();
  }

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = policeNotificationsPage;

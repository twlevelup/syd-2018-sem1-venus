const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/policeNotificationsPage.hbs");
const time = new Date(Date.now()).toLocaleString().split(",")[1];
const diff = 8;
const eta_time = new Date(Date.now() + diff*60000).toLocaleString().split(",")[1];

class policeNotificationsPage extends BasePage {
  template() {
    const context = {
      eta_time: eta_time,
      time: time
    };

    return compiledTemplate(context);
  }

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = policeNotificationsPage;

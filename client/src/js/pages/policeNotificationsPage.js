const BasePage = require('watch-framework').BasePage;

class policeNotificationsPage extends BasePage {
  template() {
    return `Police have been notified.`;
  }
}

module.exports = policeNotificationsPage;

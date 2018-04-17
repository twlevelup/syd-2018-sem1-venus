const BasePage = require('watch-framework').BasePage;

class policeNotificationsPage extends BasePage {

  template() {
    return `<div class="notification">Police have been notified. 😎👮🏻‍</div>`;
  }
  leftButtonEvent() {
   this.navigate('/');
 }

}

module.exports = policeNotificationsPage;

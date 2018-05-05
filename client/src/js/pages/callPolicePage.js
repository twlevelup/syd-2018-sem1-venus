require('../../styles/pages/callPolicePage.scss');


const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require('../../templates/callPolicePage.hbs');

class CallPolicePage extends BasePage {
  template() {
    return compiledTemplate();
  }
  leftButtonEvent() {
   this.navigate('/');
 }
  faceButtonEvent() {
    this.localStorage.setItem("policeCalled", true);
    this.navigate('policeNotifications');
  }

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = CallPolicePage;

require('../../styles/pages/callPolicePage.scss');


const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require('../../templates/cancelCallPolicePage.hbs');

class CancelCallPolicePage extends BasePage {
  template() {
    return compiledTemplate();
  }
  bottomButtonEvent() {
   this.navigate('policeNotifications');
 }
  faceButtonEvent() {
    this.localStorage.setItem("policeCalled", false);
    this.navigate('/');
  }

}

module.exports = CancelCallPolicePage;

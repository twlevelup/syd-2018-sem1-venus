require("../../styles/pages/alarmPage.scss");

const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/alarmPage.hbs");

var sound = new Audio("client/src/audio/alarm.mp3");

class AlarmPage extends BasePage {
  template() {
    sound.play();
    sound.loop = true;
    return compiledTemplate();
  }
  bottomButtonEvent() {
    this.navigate("/");
  }
  faceButtonEvent() {
    sound.pause();
    this.navigate("alarmTemp");
  }
}

module.exports = AlarmPage;

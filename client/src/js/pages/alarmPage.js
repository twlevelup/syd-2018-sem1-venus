require("../../styles/pages/alarmPage.scss");

const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/alarmPage.hbs");
const alarm = require("../../audio/alarm.mp3");

var sound = new Audio(alarm);

class AlarmPage extends BasePage {
  template() {
    sound.play();
    sound.loop = true;
    return compiledTemplate();
  }
  bottomButtonEvent() {
    sound.pause();
    this.navigate("/");
  }
  faceButtonEvent() {
    sound.pause();
    this.navigate("alarmTemp");
  }
}

module.exports = AlarmPage;

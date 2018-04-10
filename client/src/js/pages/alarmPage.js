const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/alarmPage.hbs');


class AlarmPage extends BasePage {
  template() {
    var sound = new Audio('client/src/audio/alarm.mp3');
    sound.play();
    sound.loop = true;
    return compiledTemplate();
  }
  bottomButtonEvent() {
    this.navigate('/');
  }
}

module.exports = AlarmPage;

require('../../styles/pages/alarmPageTemp.scss');

const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/alarmPageTemp.hbs');

class AlarmPageTemp extends BasePage {
 template() {
   return compiledTemplate();
 }
 faceButtonEvent() {
   this.navigate('alarm');
 }
 bottomButtonEvent() {
   this.navigate('/');
 }
}

module.exports = AlarmPageTemp;

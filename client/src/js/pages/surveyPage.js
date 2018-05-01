require('../../styles/pages/surveyPage.scss');

const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/surveyPage.hbs');

class SurveyPage extends BasePage {
 template() {
   return compiledTemplate();
 }
 // faceButtonEvent() {
 //   this.navigate('alarm');
 // }
 // bottomButtonEvent() {
 //   this.navigate('/');
 // }
}

module.exports = SurveyPage;

require('../../styles/pages/surveyNotificationsLogPage.scss');

const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require("../../templates/surveyNotificationsLogPage.hbs");


let potentialResponses = [1,2];
let index = 1;


class SurveyNotificationsLogPage extends BasePage {
 template() {
   console.log(index);
   return compiledTemplate();
 }

  bottomButtonEvent(){
    document.getElementById(index).classList.remove('selected');

    if (index >= 2){
      index = 0
    }
    index++
    document.getElementById(index).classList.toggle('selected');

  }

  topButtonEvent(){
    document.getElementById(index).classList.remove('selected');
    index--
    if (index <= 0){
      index = 2
    }
    document.getElementById(index).classList.toggle('selected');

  }
 faceButtonEvent() {
  if (index % 2 !== 0){
     this.navigate('survey');
   }else{
      this.navigate('survey2')
    }
    index=1
  }

  leftButtonEvent() {
   this.navigate('/');
  }
}

module.exports = SurveyNotificationsLogPage;

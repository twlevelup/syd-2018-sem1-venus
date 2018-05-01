require('../../styles/pages/surveyPage.scss');

const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/surveyPage.hbs');

// array with the class names (i.e. 1,2,3,4 )
// click right and +1 on index of array
// click left and -1 on index of array
// click face to submit (go to 'thank you' page)

let potentialResponses = [1,2,3,4];
let index = 0;


class SurveyPage extends BasePage {
 template() {
   return compiledTemplate();
 }

  rightButtonEvent(){
    if (index >= 4){
      index = 0
    }
    index++
    document.getElementById(index).checked = true;

  }

  leftButtonEvent(){
    index--

    if (index <= 0){
      index = 4
    }
    document.getElementById(index).checked = true;

  }
 faceButtonEvent() {
   this.navigate('surveySubmit');
 }
 // bottomButtonEvent() {
 //   this.navigate('/');
 // }
}

module.exports = SurveyPage;

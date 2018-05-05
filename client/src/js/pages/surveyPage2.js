require('../../styles/pages/surveyPage.scss');

const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/surveyPage2.hbs');

// array with the class names (i.e. 1,2,3,4 )
// click right and +1 on index of array
// click left and -1 on index of array
// click face to submit (go to 'thank you' page)

let potentialResponses = [1,2,3,4,5];
let index = 3;


class SurveyPage2 extends BasePage {
 template() {
   return compiledTemplate();
 }

  rightButtonEvent(){
    console.log('right');
    console.log(index);
    // document.getElementById(index).classList.remove('checked');

    if (index >= 5){
      return
    }
    index++
    document.getElementById(index).classList.add('checked');

  }

  leftButtonEvent(){
    // document.getElementById(index).classList.remove('selected');
    if (index <= 0){
      return
    }
    document.getElementById(index).classList.remove('checked');
    index--


  }
 faceButtonEvent() {
   this.navigate('surveySubmit');
  }

  topButtonEvent() {
   this.navigate('surveyNotificationsLog');
  }
}

module.exports = SurveyPage2;

// require('../../styles/pages/surveySubmitPage.scss');

const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/surveySubmitPage.hbs');
class SurveySubmitPage extends BasePage {
  template() {
    return compiledTemplate();

  }
}

module.exports = SurveySubmitPage;

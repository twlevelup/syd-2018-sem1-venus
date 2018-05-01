const SurveyPage = require("../../src/js/pages/surveyPage");
const SurveySubmitPage = require("../../src/js/pages/surveySubmitPage");

describe("The Survey Page", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should contain the correct text", () => {
      const page = new SurveyPage();
      expect(page.template()).toContain("Survey");
    });
  });


   describe("#faceButtonEvent", () => {
     it("should take user to submit page", () => {
       const props = { navigate: () => {} };

       const page = new SurveyPage(props);
       spyOn(page, "navigate");

       page.faceButtonEvent();
       expect(page.navigate).toHaveBeenCalledWith("surveySubmit");
     });
   });
});

const SurveySubmitPage = require("../../src/js/pages/surveySubmitPage");

describe("The Submit Page", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should contain the correct text", () => {
      const page = new SurveySubmitPage();
      expect(page.template()).toContain("Thank you for your response");
    });
  });

  describe("#faceButtonEvent", () => {
    it("should take user to home page", () => {
      const props = { navigate: () => {} };

      const page = new SurveySubmitPage(props);
      spyOn(page, "navigate");

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("/");
    });
  });

});

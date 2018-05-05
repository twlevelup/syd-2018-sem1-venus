const SurveyNotificationsLogPage = require("../../src/js/pages/surveyNotificationsLogPage");

describe("The Survey Notification Log Page", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should contain the correct text", () => {
      const page = new SurveyNotificationsLogPage();
      expect(page.template()).toContain("Survey");
    });
  });

  describe("#faceButtonEvent", () => {
    it("should take user to survey page", () => {
      const props = { navigate: () => {} };

      const page = new SurveyNotificationsLogPage(props);
      spyOn(page, "navigate");

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("survey");
    });
  });
});

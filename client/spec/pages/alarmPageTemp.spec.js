const AlarmPageTemp = require("../../src/js/pages/alarmPageTemp");

describe("The Alarm Temp Page", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should contain the correct text", () => {
      const page = new AlarmPageTemp();
      expect(page.template()).toContain("Press to turn Alarm on");
    });
  });

   describe("#bottomButtonEvent", () => {
     it("should take the user back to home page", () => {
       const props = { navigate: () => {} };

       const page = new AlarmPageTemp(props);
       spyOn(page, "navigate");

       page.bottomButtonEvent();
       expect(page.navigate).toHaveBeenCalledWith("/");
     });
   });

   describe("#faceButtonEvent", () => {
     it("should take user to alarm page", () => {
       const props = { navigate: () => {} };

       const page = new AlarmPageTemp(props);
       spyOn(page, "navigate");

       page.faceButtonEvent();
       expect(page.navigate).toHaveBeenCalledWith("alarm");
     });
   });
});

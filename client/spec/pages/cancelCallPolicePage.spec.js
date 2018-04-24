const CancelCallPolicePage = require('../../src/js/pages/cancelCallPolicePage');

describe("The Cancel Call Police Page", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should contain the correct text", () => {
      const page = new CancelCallPolicePage();
      expect(page.template()).toContain("Press to cancel call");
    });
  });
  describe('#faceButtonEvent', () => {
    it('should take the user to the homepage', () => {
      const props = {
        navigate: () => { },
      };

      const page = new CancelCallPolicePage(props);
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('should take the user to the eta page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new CancelCallPolicePage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('policeNotifications');
    });
  });

});

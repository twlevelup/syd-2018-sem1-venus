const CallPolicePage = require("../../src/js/pages/callPolicePage");

describe("The Call Police Page", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should contain the correct text", () => {
      const page = new CallPolicePage();
      expect(page.template()).toContain("call police");
    });
  });
});

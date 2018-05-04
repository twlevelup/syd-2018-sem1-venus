const HomePage = require('../../src/js/pages/homePage');

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new HomePage();
      expect(page.template()).toContain("<div>Hello, World!</div>");
    });
  });

  describe('#rightButtonEventUnlocked', () => {
    it('goes to call police page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('callPolice');
    });
  });

  describe('#rightButtonEventLocked', () => {
    it('should stay on homePage', () => {
      const props = {
        navigate: () => { },
        locked: true,
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).not.toHaveBeenCalledWith('callPolice');
    });
  });

  describe('#bottomButtonEventUnlocked', () => {
    it('scrolls page down', () => {

      const page = new HomePage({ watchFace });

      page.bottomButtonEvent();

      expect(watchFace.scrollTop).toEqual(40);

    });
  });

  describe('#bottomButtonEventLocked', () => {
    it('stay at homePage', () => {
      const props = {
        watchFace: () => { },
        locked: true,
      };

      const page = new HomePage(props);

      page.bottomButtonEvent();

      expect(watchFace.scrollTop).not.toEqual(40);

    });
  });

  describe("#topButtonEventUnlocked", () => {
    it("should take the user to the alarm page", () => {
      const props = { navigate: () => {} };

      const page = new HomePage(props);
      spyOn(page, "navigate");

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("alarmTemp");
    });
  });

  describe("#topButtonEventUnlocked", () => {
    it("should take the user to the alarm page", () => {
      const props = { navigate: () => {} };

      const page = new HomePage(props);
      spyOn(page, "navigate");

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("alarmTemp");
    });
  });

  describe('#leftButtonEvent', () => {
  it('should take the user to the demo page', () => {
    const props = {
      navigate: () => { },
    };

    const page = new HomePage(props);
    spyOn(page, 'navigate');

    page.leftButtonEvent();
    expect(page.navigate).toHaveBeenCalledWith('demo');
  });
});
});
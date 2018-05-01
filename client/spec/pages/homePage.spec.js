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

  describe('#rightButtonEvent', () => {
    it('goes to call police page, if police have not previously been called', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('callPolice');
    });

    it('goes to eta page, if police have previously been called', () => {
      const props = {
        navigate: () => { },
        policeCalled: true,
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('policeNotifications');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('should take the user to the survey page', () => {
      const props = { navigate: () => {} };

      const page = new HomePage(props);
      spyOn(page, "navigate");

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("survey");

    });
  });

  describe("#topButtonEvent", () => {
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

const AlarmPage = require('../../src/js/pages/alarmPage');

describe('The Alarm Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the title Alarm On', () => {
      const page = new AlarmPage();
      expect(page.template()).toContain('Alarm On');
    });
  });

  describe('#faceButtonEvent', () => {
    it('should take the user back to alarm temp page', () => {
      const props = {
      navigate: () => { },
    };

    const page = new AlarmPage(props);
    spyOn(page, 'navigate');

    page.faceButtonEvent();
    expect(page.navigate).toHaveBeenCalledWith("alarmTemp");
    });
  });
});

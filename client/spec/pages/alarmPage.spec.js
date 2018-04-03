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
});

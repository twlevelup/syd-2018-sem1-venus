const PoliceNotificationsPage = require('../../src/js/pages/policeNotificationsPage');

describe('The Police Notifications Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new PoliceNotificationsPage();
      expect(page.template()).toContain('Police have been notified');
    });
  });
});

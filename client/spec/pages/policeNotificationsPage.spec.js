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

    it('should contain estimated arrival time', () => {
      const page = new PoliceNotificationsPage();
      expect(page.template()).toContain('Estimated Arrival Time:');
    });

    it('should contain current time', () => {
      const page = new PoliceNotificationsPage();
      expect(page.template()).toContain('Current Time:');
    });
  });

  describe('#leftButtonEvent', () => {
    it('should take the user to the home page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new PoliceNotificationsPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});

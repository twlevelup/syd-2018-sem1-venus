const DemoPage = require('../../src/js/pages/demoPage');

describe('The Demo Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain legal aid', () => {
      const page = new DemoPage();
      expect(page.template()).toContain('Legal Aid');
    });
  });
});

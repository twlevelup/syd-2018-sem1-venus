const App = require('../src/App');
const BasePage = require('../src/BasePage');

describe('App', () => {
  document.body.innerHTML = `
    <div id='watch-face'></div>
    <div id='button-left'></div>
    <div id='button-right'></div>
    <div id='button-top'></div>
    <div id='button-bottom'></div>
    <div id='notification-container'></div>
    <form id='notification-form'></form>
  `;

  let watch = {};
  let routes = {};
  let notifications = [
    {type: 'blah', label: 'test', defaultValue: ''}
  ];
  let app;

  class DummyPage extends BasePage {
    template() {
      return '<div>Some page</div>';
    }
  }

  class DummyPage2 extends BasePage {
    template() {
      return `<div>${this.props.message}</div>`;
    }
  }

  beforeEach(() => {
    watch = {
      watchFace: document.getElementById('watch-face'),
      leftButton: document.getElementById('button-left'),
      rightButton: document.getElementById('button-right'),
      topButton: document.getElementById('button-top'),
      bottomButton: document.getElementById('button-bottom'),
    };
    routes = {
      'teamRocket': DummyPage,
    };
    app = new App(routes, notifications);
  });

  describe('#navigateToLocation', () => {
    it('strips location path and navigates to page', () => {
      // dummy window.location object. https://developer.mozilla.org/en-US/docs/Web/API/Location
      app.navigateToLocation({
        href: 'http://localhost:8080/#teamRocket',
        hash: '#teamRocket',
      });
      let element = document.getElementById('watch-face');
      expect(element.innerHTML).toBe('<div>Some page</div>');
    });

    describe('url has no trailing paths', () => {
      it('goes to home page', () => {
        app.routes = {
          '/': DummyPage,
        };
        // dummy window.location object. https://developer.mozilla.org/en-US/docs/Web/API/Location
        app.navigateToLocation({
          href: 'http://localhost:8080/',
          hash: '',
        });
        let element = document.getElementById('watch-face');
        expect(element.innerHTML).toBe('<div>Some page</div>');
      });
    });
  });

  describe('#navigate', () => {
    it('registers page left button event', () => {
      app.routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };
      spyOn(DummyPage.prototype, 'leftButtonEvent');
      spyOn(DummyPage.prototype, 'rightButtonEvent');
      spyOn(DummyPage.prototype, 'topButtonEvent');
      spyOn(DummyPage.prototype, 'bottomButtonEvent');
      spyOn(DummyPage.prototype, 'faceButtonEvent');

      app.navigate('/');

      watch.leftButton.click();
      expect(DummyPage.prototype.leftButtonEvent).toHaveBeenCalled();
      expect(DummyPage.prototype.rightButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.topButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.bottomButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.faceButtonEvent).not.toHaveBeenCalled();
    });

    it('registers page right button event', () => {
      app.routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };
      spyOn(DummyPage.prototype, 'leftButtonEvent');
      spyOn(DummyPage.prototype, 'rightButtonEvent');
      spyOn(DummyPage.prototype, 'topButtonEvent');
      spyOn(DummyPage.prototype, 'bottomButtonEvent');
      spyOn(DummyPage.prototype, 'faceButtonEvent');

      app.navigate('/');

      watch.rightButton.click();
      expect(DummyPage.prototype.leftButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.rightButtonEvent).toHaveBeenCalled();
      expect(DummyPage.prototype.topButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.bottomButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.faceButtonEvent).not.toHaveBeenCalled();
    });

    it('registers page top button event', () => {
      app.routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };
      spyOn(DummyPage.prototype, 'leftButtonEvent');
      spyOn(DummyPage.prototype, 'rightButtonEvent');
      spyOn(DummyPage.prototype, 'topButtonEvent');
      spyOn(DummyPage.prototype, 'bottomButtonEvent');
      spyOn(DummyPage.prototype, 'faceButtonEvent');

      app.navigate('/');

      watch.topButton.click();
      expect(DummyPage.prototype.leftButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.rightButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.topButtonEvent).toHaveBeenCalled();
      expect(DummyPage.prototype.bottomButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.faceButtonEvent).not.toHaveBeenCalled();
    });

    it('registers page bottom button event', () => {
      app.routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };
      spyOn(DummyPage.prototype, 'leftButtonEvent');
      spyOn(DummyPage.prototype, 'rightButtonEvent');
      spyOn(DummyPage.prototype, 'topButtonEvent');
      spyOn(DummyPage.prototype, 'bottomButtonEvent');
      spyOn(DummyPage.prototype, 'faceButtonEvent');

      app.navigate('/');

      watch.bottomButton.click();
      expect(DummyPage.prototype.leftButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.rightButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.topButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.bottomButtonEvent).toHaveBeenCalled();
      expect(DummyPage.prototype.faceButtonEvent).not.toHaveBeenCalled();
    });

    it('registers page face button event', () => {
      app.routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };
      spyOn(DummyPage.prototype, 'leftButtonEvent');
      spyOn(DummyPage.prototype, 'rightButtonEvent');
      spyOn(DummyPage.prototype, 'topButtonEvent');
      spyOn(DummyPage.prototype, 'bottomButtonEvent');
      spyOn(DummyPage.prototype, 'faceButtonEvent');

      app.navigate('/');

      watch.watchFace.click();
      expect(DummyPage.prototype.leftButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.rightButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.topButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.bottomButtonEvent).not.toHaveBeenCalled();
      expect(DummyPage.prototype.faceButtonEvent).toHaveBeenCalled();
    });

    it('should changes watch face to the specific page', () => {
      app.routes = {
        '/': DummyPage,
        'someOtherPage': DummyPage2,
      };

      let element = document.getElementById('watch-face');

      app.navigate('/', {});
      expect(element.innerHTML).toBe(`<div>Some page</div>`);

      app.navigate('someOtherPage', { message: 'I like to move it move it'});
      expect(element.innerHTML).toBe(`<div>I like to move it move it</div>`);
    });

    it('shows 404 when path does not match any predefined routes', () => {
      class FourOhFour extends BasePage {
        template() {
          return '<div>Oops, page not found</div>';
        }
      }

      app.routes = {
        '404': FourOhFour,
      };

      let element = document.getElementById('watch-face');

      app.navigate('someRandomPage', {});
      expect(element.innerHTML).toBe(`<div>Oops, page not found</div>`);
    });
  });
});

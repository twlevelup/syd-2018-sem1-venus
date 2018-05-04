class BasePage {
  constructor(props = {}) {
    this.props = props;
    this.navigate = props.navigate;
    this.watchFace = props.watchFace;
    this.notificationHandler = props.notificationHandler;
    this.locked = props.locked | false;
  }

  template() {
    throw new Error('Unimplemented template');
  }

  pageWillLoad() {
  }

  pageDidLoad() {
  }

  rightButtonEvent() {
  }

  leftButtonEvent() {
  }

  topButtonEvent() {
  }

  bottomButtonEvent() {
  }

  faceButtonEvent() {
  }
}

module.exports = BasePage;
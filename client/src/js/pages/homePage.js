require("../../styles/pages/home.scss");

const BasePage = require("watch-framework").BasePage;
const logo = require("../../images/logo.png");
const date = new Date(Date.now()).toLocaleString().split(",")[0];
const time = new Date(Date.now()).toLocaleString().split(",")[1];
const compiledTemplate = require("../../templates/homePage.hbs");

class HomePage extends BasePage {
  template() {
    const context = {
      date: date,
      time: time,
      logo: logo
    };
    return compiledTemplate(context);
  }

  rightButtonEvent() {
    if (this.policeCalled == true) {
      this.navigate('policeNotifications');
    } else {
      this.navigate('callPolice');
    }
  }

  leftButtonEvent() {
    this.navigate("demo");
  }

  topButtonEvent() {
    this.navigate("alarmTemp");
  }

  bottomButtonEvent() {
    this.navigate("survey");
  }
}

module.exports = HomePage;

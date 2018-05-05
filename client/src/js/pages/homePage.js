require("../../styles/pages/home.scss");

const BasePage = require("watch-framework").BasePage;
const logo = require("../../images/logo.png");
const date = new Date(Date.now()).toLocaleString().split(",")[0];
const time = new Date(Date.now()).toLocaleString().split(",")[1];
const compiledTemplate = require("../../templates/homePage.hbs");

//isCallPolice = false

class HomePage extends BasePage {
  template() {
     // console.log("template iscalled", isCallPolice);
     // if (this.localStorage.getItem("policeCalled") === "true" && !isCallPolice) {
     //   console.log("template",  this.localStorage)
     //   this.localStorage.setItem("policeCalled", false);
     // }
    const context = {
      date: date,
      time: time,
      logo: logo
    };
    return compiledTemplate(context);
  }

    rightButtonEvent() {
      if (!this.locked){
        console.log(this.localStorage)
        if (this.localStorage.getItem("policeCalled") === "true") {
          console.log("going to police notifications");
          this.navigate('policeNotifications');
        } else {
          this.navigate('callPolice');
        }
      }
    }

    leftButtonEvent() {
      if (!this.locked){
        this.navigate("demo");
      }
    }

    topButtonEvent() {
      if (!this.locked){
        this.navigate("alarmTemp");
      }
    }

    bottomButtonEvent() {
      if (!this.locked){
        this.navigate("surveyNotificationsLog");
    }
  }
}

module.exports = HomePage;

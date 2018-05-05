const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/safeHousePage.hbs");

let potentialResponses = [1, 2, 3];
let index = 1;

class SafeHousePage extends BasePage {
  template() {
    return compiledTemplate();
  }

  bottomButtonEvent() {
    document.getElementById(index).classList.remove("selected");

    if (index >= 3) {
      index = 0;
    }
    index++;
    document.getElementById(index).classList.toggle("selected");
  }

  topButtonEvent() {
    document.getElementById(index).classList.remove("selected");
    index--;
    if (index <= 0) {
      index = 3;
    }
    document.getElementById(index).classList.toggle("selected");
  }
  faceButtonEvent() {
    this.navigate("safeHouse2");
  }

  leftButtonEvent() {
    this.navigate("/");
  }
}

module.exports = SafeHousePage;

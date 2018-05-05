const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/safeHouse2.hbs");

let potentialResponses = [1, 2, 3];
let index = 1;

class SafeHouse2Page extends BasePage {
  template() {
    return compiledTemplate();
  }
  faceButtonEvent() {
    this.navigate("/");
  }
}

module.exports = SafeHouse2Page;

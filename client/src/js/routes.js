const HomePage = require("./pages/homePage");
const ContactsPage = require("./pages/contactsPage");
const TeamPage = require("./pages/teamPage");
const FourOhFour = require("./pages/404Page");
const DemoPage = require("./pages/demoPage");
const AlarmPage = require("./pages/alarmPage");
const AlarmPageTemp = require("./pages/alarmPageTemp");
const CallPolicePage = require("./pages/callPolicePage");
const PoliceNotificationsPage = require("./pages/policeNotificationsPage");

module.exports = {

  "/": HomePage,
  "contacts": ContactsPage,
  "team": TeamPage,
  "404": FourOhFour,
  "demo": DemoPage,
  "alarm": AlarmPage,
  "alarmTemp": AlarmPageTemp,
  "call police": CallPolicePage,
  "police notifications": PoliceNotificationsPage
};

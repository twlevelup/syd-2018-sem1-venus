const HomePage = require("./pages/homePage");
const ContactsPage = require("./pages/contactsPage");
const TeamPage = require("./pages/teamPage");
const FourOhFour = require("./pages/404Page");
const DemoPage = require("./pages/demoPage");
const AlarmPage = require("./pages/alarmPage");
const AlarmPageTemp = require("./pages/alarmPageTemp");
const CallPolicePage = require("./pages/callPolicePage");
const PoliceNotificationsPage = require("./pages/policeNotificationsPage");
const CancelCallPolicePage = require("./pages/cancelCallPolicePage");
const SurveyPage = require("./pages/surveyPage");

module.exports = {
  "/": HomePage,
  "contacts": ContactsPage,
  "team": TeamPage,
  "404": FourOhFour,
  "demo": DemoPage,
  "alarm": AlarmPage,
  "alarmTemp": AlarmPageTemp,
  "callPolice": CallPolicePage,
  "policeNotifications": PoliceNotificationsPage,
  "cancelCallPolicePage": CancelCallPolicePage,
  "survey": SurveyPage
};

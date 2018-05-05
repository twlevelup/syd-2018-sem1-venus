const App = require('watch-framework').App;

const routes = require("./js/routes");
const notifications = require("./js/notifications");

console.log('main', window.localStorage);
new App(routes, notifications, window.localStorage).navigateToLocation(window.location);

console.log('webpack');

//CSS & SCSS
require("!style!css!sass!./index.scss");

//JS NODE_MODULES
require('../node_modules/angular/angular.js')
require('../node_modules/angular-ui-router/release/angular-ui-router.min.js')
require('../node_modules/angular-ui-bootstrap/index.js')

//JS APP SCRIPTS
require('../src/index.js')
require('../src/index.routes.js')

//JS VIEW CONTROLLERS
require('../src/views/Home/HomeCtrl.js')
require('../src/views/Utils/UtilsCtrl.js')
require('../src/views/Ladies/LadiesCtrl.js')
require('../src/views/Login/LoginCtrl.js')
require('../src/views/Register/RegisterCtrl.js')
require('../src/views/Forgot/ForgotCtrl.js')
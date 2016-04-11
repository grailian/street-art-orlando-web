console.log('webpack');

//CSS & SCSS
require("../src/index.scss");

//JS NODE_MODULES
require('../node_modules/angular/angular.js')
require('../node_modules/angular-ui-router/release/angular-ui-router.min.js')

//JS APP SCRIPTS
require('../src/index.js')
require('../src/index.routes.js')

require('../src/views/Home/HomeCtrl.js')
require('../src/views/Login/LoginCtrl.js')
require('../src/views/Register/RegisterCtrl.js')
require('../src/views/Forgot/ForgotCtrl.js')
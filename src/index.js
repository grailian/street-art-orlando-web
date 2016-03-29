(function () {
  'use strict';

  angular
    .module('codehangar', [
      'ui.router',
    ]);

  angular
    .module('codehangar')
    .run(function ($http) {
      $http.defaults.headers.common['Content-Type'] = 'application/json';
    });
})();
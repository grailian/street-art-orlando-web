(function() {
  'use strict';

  angular
    .module('codehangar')
    .controller('HomeCtrl', RegisterCtrl);

  function RegisterCtrl($scope, $timeout, $http, $window, $state, $location) {

    $scope.init = function() {
      console.log('Hello HomeCtrl')
    };
    $scope.init();
  }
})();

(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, $timeout, $http, $window, $state, $location) {

    $scope.init = function() {
      console.log('Hello HomeCtrl')
    };


    $scope.init();
  }
})();

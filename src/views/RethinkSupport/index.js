(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('RethinkSupportCtrl', RethinkSupportCtrl);

  function RethinkSupportCtrl($scope, $timeout, $http, $window, $state, $location) {

    $scope.init = function() {
      console.log('Hello Ctrl')
    };

    $scope.openHS = function(){
      console.log('openHS');
      HS.beacon.open();
    }

    $scope.init();
  }
})();

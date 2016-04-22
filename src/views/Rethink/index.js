(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('RethinkCtrl', RethinkCtrl);

  function RethinkCtrl($scope, $timeout, $http, $window, $state, $location) {

    $scope.init = function() {
      console.log('Hello RethinkCtrl')
    };
    $scope.init();
  }
})();

(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('UtilsCtrl', UtilsCtrl);

  function UtilsCtrl($scope, $timeout, $http, $window, $state, $location) {

    $scope.init = function() {
      console.log('Hello UtilsCtrl')
    };

    $scope.clickReql = function(event){
      // console.log('event',event.target.innerHTML);

      analytics.track('clicked get ReQL', {
        "button cta": event.target.innerHTML,
        "button link": null
      });

      alert('Stay tuned! ReQL Pro will be available for download soon!');
    }


    $scope.init();
  }
})();

(function() {
  'use strict';

  angular
    .module('codehangar')
    .controller('ForgotCtrl', ForgotCtrl);

  function ForgotCtrl($scope, $timeout, $http, $window, $state) {

    $scope.forgotPassword = function(email) {
      $scope.forgotError = false;
      $scope.forgotSuccess = false;
      $scope.formValidationError = false;

      if ($scope.forgotForm.$valid) {
        $http({
          method: 'POST',
          url: '/users/forgot',
          data: {
            email: email
          }
        }).success(function(data) {
          $scope.forgotSuccess = true;
        }).error(function(err) {
          console.log(err);
          $scope.forgotError = true;
          $scope.forgotErrorMessage = err.errors;
        });
      } else {
        $scope.formValidationError = true;
      }
    };

    $scope.init = function() {};
    $scope.init();
  }
})();

(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('RethinkCtrl', controller);

  controller.$inject = ['$timeout', '$http'];

  function controller($timeout, $http) {

    var vm = this;

    vm.download = function(downloadForm) {
      downloadForm.$setDirty();

      console.log("downloadForm.$valid", downloadForm.$valid)
      if (downloadForm.$valid) {
        analytics.alias(vm.downloadEmail, {}, {}, function() {
          analytics.identify(vm.downloadEmail, {
            email: vm.downloadEmail
          });

          analytics.track('clicked download ReQLPro', {
            "downloadCTA": vm.downloadCTA,
            "downloadEmail": vm.downloadEmail
          });
        })

        $http.post('https://contact-form-api.herokuapp.com/api/v1/contact/reqlpro', {
          email: vm.downloadEmail
        }).then(function(res) {
          console.log("res", res)

          $timeout(function() {
            vm.showDownloadSuccess = true;
            console.log("vm.showDownloadSuccess", vm.showDownloadSuccess)
          });
        }).catch(function(err) {
          console.log("err", err)
        });
      }
    };

    vm.init = function() {
      vm.downloadCTA = 'Get the Beta';
    };

    vm.init();
  }
})();

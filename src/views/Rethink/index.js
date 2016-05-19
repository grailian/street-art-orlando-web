(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('RethinkCtrl', controller);

  controller.$inject = ['$timeout'];

  function controller($timeout) {

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

          $timeout(function() {
            vm.showDownloadSuccess = true;
            console.log("vm.showDownloadSuccess", vm.showDownloadSuccess)
          });
        })
      }
    };

    vm.init = function() {
      vm.downloadCTA = 'Get the Beta';
    };

    vm.init();
  }
})();

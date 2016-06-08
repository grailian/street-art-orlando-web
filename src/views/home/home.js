(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('HomeCtrl', controller);

  controller.$inject = ['ArtService'];

  function controller(ArtService) {
    var vm = this;

    vm.getNearbyInstallations = function(location) {
      ArtService.getInstallations(location)
        .success(function(data) {
          vm.installations = data.results;
          console.log("vm.installations", vm.installations)
        })
        .error(function(err) {
          console.error("err", err)
        });
    };

    vm.init = function() {
      vm.getNearbyInstallations();
    };

    vm.init();
  }
})();

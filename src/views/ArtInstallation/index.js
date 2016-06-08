(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('ArtInstallationCtrl', controller);

  controller.$inject = ['$timeout', '$http', 'ArtService', 'ArtistService', '$stateParams'];

  function controller($timeout, $http, ArtService, ArtistService, $stateParams) {

    var vm = this;

    vm.getArtist = function(id) {
      ArtistService.getArtist(id)
        .success(function(data) {
          vm.artist = data;
          console.log("vm.artist", vm.artist)
        })
        .error(function(err) {
          console.error("err", err)
        });
    }

    vm.getInstallation = function(id) {
      ArtService.getInstallation(id)
        .success(function(data) {
          vm.installation = data;
          console.log("vm.installation", vm.installation)
          vm.getArtist(vm.installation.creator.objectId);
        })
        .error(function(err) {
          console.error("err", err)
        });
    };

    vm.init = function() {
      if ($stateParams.id) {
        vm.getInstallation($stateParams.id);
      }
    };

    vm.init();
  }
})();

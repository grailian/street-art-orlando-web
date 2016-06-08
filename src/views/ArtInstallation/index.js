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
    };

    vm.setMap = function(installation) {
      var myLatLng = {
        lat: installation.location.latitude,
        lng: installation.location.longitude
      };

      var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: false
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Art Spotted!'
      });

      console.log("map", map)
    };

    vm.getInstallation = function(id) {
      ArtService.getInstallation(id)
        .success(function(data) {
          vm.installation = data;
          console.log("vm.installation", vm.installation)
          vm.getArtist(vm.installation.creator.objectId);
          vm.getNearbyInstallations(vm.installation.location);
          vm.setMap(vm.installation);
        })
        .error(function(err) {
          console.error("err", err)
        });
    };

    vm.getNearbyInstallations = function(location) {
      ArtService.getInstallations(location)
        .success(function(data) {
          vm.installations = data.results.slice(0, 3);
          console.log("vm.installations", vm.installations)
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

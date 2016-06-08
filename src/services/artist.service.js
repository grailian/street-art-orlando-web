(function() {

  'use strict';

  angular
    .module('utils.codehangar')
    .factory('ArtistService', factory);

  function factory($http) {

    this.getArtist = function(id) {
      return $http({
        headers: {
          "X-Parse-Application-Id": 'u8PdMljqwD8ulFJBD9cDUs9NS3hJiDOWwzVjUUJ9',
          "X-Parse-REST-API-Key": 'pfrkMAxkQwio72sb2YB6UOlV3yEjyLLfSnpybvjX'
        },
        method: 'GET',
        url: 'https://api.parse.com/1/classes/_User/' + id
      });
    };

    return this;
  }

})();

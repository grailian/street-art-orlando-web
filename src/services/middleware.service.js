(function() {

  'use strict';

  angular
    .module('utm-builder')
    .factory('Middleware', Middleware);

  /** @ngInject */
  function Middleware($q, $location, $state, $timeout) {

    /**
     * This middleware checks for an authenticated session
     * @method getSession
     * @return {Promise}
     */
    this.getSession = function(state) {
      var deferred = $q.defer();
      var session = JSON.parse(localStorage.getItem('session'));

      if (session) {
        if (state) {
          $timeout(function() {
            $state.go(state);
          });
        } else {
          deferred.resolve(session);
        }
      } else {
        $timeout(function() {
          $state.go('login');
        });
      }
      return deferred.promise;
    }

    return this;
  }

})();

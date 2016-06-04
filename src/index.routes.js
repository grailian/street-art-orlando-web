(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '/',
        views: {
          'content': {
            templateUrl: 'views/Utils/index.html',
            controller: 'UtilsCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('art', {
        url: '/art',
        views: {
          'content': {
            templateUrl: 'views/ArtInstallation/index.html',
            controller: 'RethinkCtrl',
            controllerAs: 'vm'
          }
        }
      }).state('rethink-support', {
        url: '/rethink/support',
        views: {
          'content': {
            templateUrl: 'views/RethinkSupport/index.html',
            controller: 'RethinkSupportCtrl',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.rule(function($injector, $location) {
      var path = $location.url();
      // check to see if the path already has a slash where it should be
      if ('/' === path[path.length - 1] || path.indexOf('/?') > -1) {
        return;
      }
      if (path.indexOf('?') > -1) {
        return path.replace('?', '/?');
      }
      return path + '/';
    });

    $locationProvider.html5Mode(true);

  }

})();

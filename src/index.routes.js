(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '/',
        views: {
          'content': {
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('art', {
        url: '/art/:id',
        views: {
          'content': {
            templateUrl: 'views/ArtInstallation/index.html',
            controller: 'ArtInstallationCtrl',
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

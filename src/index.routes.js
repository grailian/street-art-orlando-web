(function() {
  'use strict';

  angular
    .module('codehangar')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    // $urlRouterProvider.otherwise('/errors/404/');

    $stateProvider
      .state('root', {
        url: '/',
        views: {
          'content': {
            templateUrl: 'src/views/Home/Home.html'
        //     // controller: 'MainCtrl',
        //     // controllerAs: 'MainCtrl'
          }
        }
      })

    .state('home', {
      url: '/home',
      views: {
        'content': {
          templateUrl: 'src/views/Home/Home.html',
          controller: 'HomeCtrl',
      //     // controllerAs: 'MainCtrl'
        }
      }
    })

    .state('admin', {
      url: '/admin/',
      views: {
        'header': {
          templateUrl: 'views/partials/header.html'
        },
        'content': {
          templateUrl: 'views/admin.html',
          controller: 'AdminCtrl',
          controllerAs: 'AdminCtrl'
        }
      },
      resolve: {
        Session: function(Middleware) {
          return Middleware.getSession();
        }
      }
    })

    .state('register', {
      url: '/register/',
      views: {
        'header': {
          templateUrl: 'views/partials/plain_header.html'
        },
        'content': {
          templateUrl: 'views/register.html',
          controller: 'RegisterCtrl',
          controllerAs: 'RegisterCtrl'
        }
      }
    })

    .state('verify', {
      url: '/verify/',
      views: {
        // 'header': {
          // templateUrl: 'views/partials/header.html'
        // },
        'content': {
          templateUrl: 'views/verify.html',
          controller: 'VerifyCtrl',
          controllerAs: 'VerifyCtrl'
        }
      }
    })

    .state('login', {
      url: '/login/',
      views: {
        'header': {
          templateUrl: 'views/partials/plain_header.html'
        },
        'content': {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'LoginCtrl'
        }
      }
    })

    .state('forgot', {
      url: '/forgot/',
      views: {
        'header': {
          templateUrl: 'views/partials/plain_header.html'
        },
        'content': {
          templateUrl: 'views/forgot.html',
          controller: 'ForgotCtrl',
          controllerAs: 'ForgotCtrl'
        }
      }
    })

    .state('reset', {
      url: '/reset/',
      views: {
        'header': {
          templateUrl: 'views/partials/plain_header.html'
        },
        'content': {
          templateUrl: 'views/reset.html',
          controller: 'ResetCtrl',
          controllerAs: 'ResetCtrl'
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

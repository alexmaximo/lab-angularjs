(function() {
  'use strict';

  require.config({

    // libraries dependencies (fallback support)
    paths: {

      jquery: [
        '/cdn/ajax/libs/jquery/2.1.1/jquery.min'
      ],

      angular: [
        '/cdn/ajax/libs/angular.js/1.3.4/angular.min'
      ],

      angularResource: [
        '/cdn/ajax/libs/angular.js/1.3.4/angular-resource.min'
      ],

      angularMocks: [
        '/cdn/ajax/libs/angular.js/1.3.4/angular-mocks'
      ],

      uiRouter: [
        '/cdn/ajax/libs/angular-ui/ui-router/0.2.11/angular-ui-router.min'
      ]

    },

    // define js scripts dependencies
    shim: {

      'jquery': {
        exports: 'jquery'
      },

      'angular': {
        exports: 'angular',
        deps: ['jquery']
      },

      'angularResource': {
        deps: ['angular']
      },

      'uiRouter': {
        deps: ['angular']
      },

      'angularMocks': {
        deps: ['angular']
      }

    },

    priority: [
      'angular'
    ],

    deps: ['./ng.app'],

    callback: onRequireReadyHandler

  });


  function onRequireReadyHandler() {
    console.log('go go go...');
  }

})();

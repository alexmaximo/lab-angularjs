(function() {
  'use strict';

  require.config({

    baseUrl: '../../src',

    // libraries dependencies (fallback support)
    paths: {

      jquery: [
        '/cdn/ajax/libs/jquery/2.1.1/jquery.min'
      ],

      angular: [
        '/cdn/ajax/libs/angular.js/1.3.4/angular.min'
      ],

      angularRoute: [
        '/cdn/ajax/libs/angular.js/1.3.4/angular-route.min'
      ],

      angularResource: [
        '/cdn/ajax/libs/angular.js/1.3.4/angular-resource.min'
      ],


      angularMocks: [
        '/cdn/ajax/libs/angular.js/1.3.4/angular-mocks'
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

      'angularRoute': {
        deps: ['angular']
      },

      'angularResource': {
        deps: ['angular']
      },

      'angularMocks': {
        deps: ['angular']
      }

    },

    priority: [
      'angular'
    ],

    deps: [
      './ng.app',

      'angularMocks',

      '../tests/unit/require.load'
    ],

    callback: onRequireReadyHandler

  });


  function onRequireReadyHandler() {
    console.log( 'onRequireReadyHandler' );

    $( document ).ready(function() {
        console.log( "document ready!" );

        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
        window.onload();

    });
  }

})();

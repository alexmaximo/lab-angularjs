require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
      '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
      '/cdn/ajax/libs/jquery/2.1.1/jquery.min'
    ],

    // http://code.angularjs.org/1.3.4/
    angular: [
      '/cdn/ajax/libs/angular.js/1.3.4/angular.min'
    ],

    angularResource: [
      '/cdn/ajax/libs/angular.js/1.3.4/angular-resource.min'
    ],

    uiRouter: [
      '/cdn/ajax/libs/angular-ui/ui-router/0.2.11/angular-ui-router.min'
    ],

    bootstrap: [
      '/cdn/ajax/libs/bootstrap/3.3.1/js/bootstrap.min'
    ],

    holder: [
      '/cdn/ajax/libs/holder/2.4.1/holder.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },

    'angularResource': {
      deps: ['angular']
    },

    'uiRouter': {
      deps: ['angular']
    },

    'bootstrap': {
      deps: ['jquery']
    },

    'holder': {
      exports: 'Holder'
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']

});

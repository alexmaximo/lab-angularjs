define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularRoute');
  require('angularResource');


  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ngRoute',
      'ngResource',

      require('app/cep/package').name
    ]
  );

});

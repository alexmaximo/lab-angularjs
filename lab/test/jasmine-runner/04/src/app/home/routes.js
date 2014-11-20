define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'master': {
            templateUrl   : 'app/home/template.html',
            controller    : 'HomeCtrl',
            controllerAs  : 'vm'
          }
        }
      });

  }

});

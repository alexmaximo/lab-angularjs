define(function(require) {
  'use strict';

  var module = require('../module');

    module.controller(

    // controller name
    'DashboardExportCtrl',

    // dependencies injection
    ['$scope',

  // controller definition
  function(scope) {

    scope.someValue = 'Value from Dashboad Export Controller';

  }]);

});

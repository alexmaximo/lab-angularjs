define(function(require) {
  'use strict';

  var angular = require('angular');

  angular.element(document).ready(bootstrap);

  //---

  function bootstrap() {

    var module = require('./main/package');

    console.log('bootstrap : ' + module.name);

    angular.bootstrap(document, [module.name]);

  }

});

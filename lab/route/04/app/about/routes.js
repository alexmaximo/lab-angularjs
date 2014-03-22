define(
// require.js dependency inection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';


  module.config(

    // dependencies injection
    ['$routeProvider',

  function(routeProvider) {

      routeProvider
        .when(
          '/about',
          {
            controller: 'AboutCtrl',
            templateUrl:'app/about/template.html'
          }
        );

  }]);


});

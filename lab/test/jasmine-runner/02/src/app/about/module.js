define(
// require.js dependency injection
[
  'angular',
  'angularRoute'
],

// require.js module scope
function(ng) {
  'use strict';

  // module definition
  return ng.module(
    // module name
    'about',

    // module dependencies
    [
      'ngRoute'
    ]
  );

});

angular.module('app').controller(
  
  // controller name
  'ctrl.Hello', 
  
  // dependency injection
  ['$scope', 

function(scope) {

  scope.hello = 'Angular JS - Hello World 08 :: With require.js';

}]);
angular.module('app.dep').controller(
  
  // controller name
  'DependencyCtrl', 

  // dependencies injection
  ['$scope', 'DependencyFactory', 'DependencyService',

function($scope, depFactory, depService) {

  $scope.value = 'Application Dependency Module Value';

  $scope.message = 'This is a message';


  $scope.sum = function(a, b) {
    return a+b;
  };

  $scope.toExciteMsg = function(msg) {
    return depFactory.exciteText(msg);
  };

  console.log(depService);

  $scope.toQuestionMsg = function(msg) {
    return depService.questionText(msg);
  };

}]);
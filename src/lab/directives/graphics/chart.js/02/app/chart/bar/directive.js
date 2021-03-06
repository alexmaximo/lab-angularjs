(function() {
  'use strict';

  angular.module( 'app' ).directive( 'chartBar', chartBar );

  //---

  function chartBar() {

    var scope = {
      labels: '=',
      datasets: '='
    };

    var directive = {
      restrict: 'EA',
      scope: scope,
      replace: true,
      controller: ChartBarController,
      controllerAs: 'vm',
      template: '<canvas height="450" width="600"></canvas>',
      link: linkFunc
    };

    return directive;

    //---

    function linkFunc( scope, element, attrs, controller ) {

      var data = {
        labels: scope.labels,
        datasets: scope.datasets
      };

      var options = {
        responsive: true
      };

      //---

      controller.init( element[0], data, options );

    }

  }

  //---

  function ChartBarController() {
    var vm = this;

    vm.init = init;

    //---

    function init( element, data, options ) {
      var ctx = element.getContext( '2d' );
      new Chart( ctx ).Bar( data, options );
    }

  }

})();

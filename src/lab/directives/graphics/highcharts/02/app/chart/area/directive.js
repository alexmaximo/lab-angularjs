(function() {
  'use strict';

  angular.module( 'app' ).directive( 'chartArea', chartArea );

  //---

  function chartArea() {
    var directive = {
      restrict: 'EA',
      replace: true,
      scope: { options: '=' },
      template: '<div></div>',
      link: linkFunc
    };

    return directive;

    //---

    function linkFunc( scope, element, attrs ) {
      scope.options = scope.options || {};
      scope.options.yAxis = scope.options.yAxis || {};

      //---

      var chart = {
        type: 'area'
      };

      //---

      var title = {
        text: scope.options.title
      };

      var subtitle = {
        text: scope.options.subtitle
      };

      //--

      var xAxis = {
        categories: scope.options.xAxis || []
      };

      var yAxis = {
        min: scope.options.yAxis.min || 0,
        title: {
            text: scope.options.yAxis.title
        }
      };

      //---

      var tooltip = scope.options.tooltip || {};

      var plotOptions = scope.options.plotOptions = {};

      var series = scope.options.series || [];

      //---

      var options = {
        chart: chart,
        title: title,
        subtitle: subtitle,
        xAxis: xAxis,
        yAxis: yAxis,
        tooltip: tooltip,
        plotOptions: plotOptions,
        series : series
      };

      //---

      init();

      //---

      function init() {
        $(element[0]).highcharts( options );
      }

    }

  }

})();

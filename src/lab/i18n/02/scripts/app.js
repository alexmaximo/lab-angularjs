(function() {
  'use strict';

  angular
    .module('App', ['pascalprecht.translate'])
    .config(['$translateProvider', translateProvider])
    .controller('MainCtrl', ['$scope', '$translate', MainCtrl]);

    function translateProvider($translateProvider) {
      $translateProvider
        .translations('en-US', {
          'CHANGE_LANGUAGE': 'Change language',
          'MESSAGE': {
            'CONTROLLER': 'Translated on controller',
              'HTML': 'Translated on html'
          }
        })

        .translations('pt-BR', {
          'CHANGE_LANGUAGE': 'Alterar idioma',
          'MESSAGE': {
            'CONTROLLER': 'Traduzido no controller',
            'HTML': 'Traduzido no html'
          }
        })

        .preferredLanguage(navigator.language);
    }

    function MainCtrl($scope, $translate) {
      $scope.languages = [ 'pt-BR', 'en-US' ];
      $scope.selected = navigator.language;

      $scope.itemSelected = function() {
        $translate.use($scope.selected);
        translateMessages();
      }

      function translateMessages() {
        $translate('MESSAGE.CONTROLLER').then(function (message) {
          $scope.message = message;
        });
      }

      translateMessages();
    }

})();

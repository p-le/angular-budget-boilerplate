(function() {
  'use strict';
  angular
    .module('angularPro')
    .config(function($stateProvider) {
      var mainState = {
        name: 'Main',
        url: '/',
        templateUrl: 'templates/main.html'
      };

      var aboutState = {
        name: 'About',
        url: '/about',
        templateUrl: 'templates/about.html'
      };

      $stateProvider
        .state(mainState)
        .state(aboutState);
    });
})();
(function() {
  'use strict';
  angular.module('angularPro')
    .config(function ($compileProvider) {
      $compileProvider.commentDirectivesEnabled(false);
      $compileProvider.cssClassDirectivesEnabled(false);
      $compileProvider.debugInfoEnabled(false);
    })
    .run(function($rootScope, $location) {
      $rootScope.transition = function(path) {
        $location.path(path);
      };
    });
})();
(function() {
  'use strict';
  angular.module('angularPro')
    .config(function ($compileProvider) {
      $compileProvider.commentDirectivesEnabled(false);
      $compileProvider.cssClassDirectivesEnabled(false);
      $compileProvider.debugInfoEnabled(false);
    });
})();
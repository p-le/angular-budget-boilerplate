(function() {
  'use strict';
  angular.module('angularPro')
    .service('LoadingIndicatorService', LoadingIndicatorService);
  
  function LoadingIndicatorService($window, $http, $templateCache, $compile) {
    var body = $window.document.body;
    
    this.show = function() {
      
    };
    this.hide = function() {

    };
  }
})();
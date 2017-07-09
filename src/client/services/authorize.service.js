(function() {
  'use strict';
  angular
    .module('angularPro')
    .factory('unauthorizedInterceptor', unauthorizedInterceptor);
  
  function unauthorizedInterceptor($q, $rootScope) {
    return {
      responseError: function(rejection) {
        if (rejection.status === 401) {
          $rootScope.login = true;
        }
        return $q.reject(rejection);
      }
    }
  }
})();
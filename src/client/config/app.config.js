(function() {
  angular
    .module('angularPro')
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('unauthorizedInterceptor');
    });
})();
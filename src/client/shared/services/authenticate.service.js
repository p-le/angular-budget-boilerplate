(function() {
  angular
    .module('angularPro')
    .service('authenticateService', authenticateService);

  function authenticateService($http) {
    this.checkEmail = function(email) {
      return $http.post('/api/authenticate', { email: email });
    }
  }
})();
(function() {
  angular.module('angularPro')
    .service('BasicService', BasicService);
  
  function BasicService() {
    this.name = "Admage";
  }
})();
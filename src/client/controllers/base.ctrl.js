(function() {
  angular
    .module('angularPro')
    .controller('BaseController', BaseController);

  /**
   * 
   * 
   * @param {any} $scope 
   * @param {any} $log 
   */
  function BaseController($scope, $log) {
    $scope.log = function() {
      $log.info('Base Controller');
    };
  }
})();
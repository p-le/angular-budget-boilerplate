(function() {
  angular
    .module('angularPro')
    .controller('ChildController', ChildController);

  function ChildController($scope, $controller) {
    $controller('BaseController', {
      $scope: $scope
    });
    console.log($scope);
  }
})();
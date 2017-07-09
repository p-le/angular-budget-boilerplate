(function() {
  angular.module('angularPro', [
    'ngAnimate',
    'ui.router'
  ])
  .controller('TestController', function($scope) {
    $scope.hello = 'Hello World';
  });
})();
(function() {
  angular.module('angularPro', [
    'ngAnimate',
    'ui.router',
    'ngMessages',
    'ngSanitize',
    'ngMaterial'
  ])
  .controller('TestController', function($scope) {
    $scope.hello = 'Hello World';
  });
})();
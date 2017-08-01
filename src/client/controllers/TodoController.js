(function() {
  'use strict';
  angular.module('angularPro')
    .controller('TodoController', TodoController);

  function TodoController($scope) {
    $scope.list = [
      'test', 'execute', 'refactor'
    ];

    $scope.add = function (item) {
      $scope.list.push(item);
    }
  }
})();
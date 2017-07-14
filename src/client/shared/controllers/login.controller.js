(function() {
  'use strict';
  angular
    .module('angularPro')
    .controller('LoginController', LoginController);

  function LoginController($scope) {
    $scope.user = {};
  }
})();
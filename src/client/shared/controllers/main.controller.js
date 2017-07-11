(function() {
  'use strict';
  angular
    .module('angularPro')
    .controller('MainController', MainController);

  function MainController($scope) {
    $scope.user = {};
    $scope.currentPage = 3;
    $scope.numPages = 8;

    $scope.selectPage = function(page) {
      console.log(page);
    }
  }
})();
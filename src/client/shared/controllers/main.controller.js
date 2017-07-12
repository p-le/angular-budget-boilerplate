(function() {
  'use strict';
  angular
    .module('angularPro')
    .controller('MainController', MainController);

  function MainController($scope) {
    $scope.user = {};
    $scope.currentPage = 3;
    $scope.numPages = 8;
    $scope.model = {
      show: false,
      count: 0
    };
    $scope.test = {
      name: 'PHU'
    };
    $scope.user = {
      firstname: 'LE QUANG',
      lastname: 'Phu'
    };

    $scope.selectPage = function(page) {
      console.log(page);
    };
  }
})();
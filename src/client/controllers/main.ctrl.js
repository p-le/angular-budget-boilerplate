(function() {
  'use strict';
  angular.module('angularPro')
    .controller('MainCtrl', MainCtrl);
  
  function MainCtrl($scope) {
    $scope.isShowSideNav = false;

    $scope.toggleSideNav = function() {
      $scope.isShowSideNav = !$scope.isShowSideNav;
    };
  }
})();
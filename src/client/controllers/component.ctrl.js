(function() {
  'use strict';
  angular.module('angularPro')
    .controller('ComponentCtrl', ComponentCtrl);
  
  function ComponentCtrl($scope) {
    $scope.test = false;
  }
})();
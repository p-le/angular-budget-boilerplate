(function() {
  'use strict';
  angular.module('angularPro')
    .controller('AdListCtrl', AdListCtrl);

  function AdListCtrl($scope, $rootScope, AdFactory) {
    $scope.ads = undefined;
    AdFactory.get({}, function(res) {
      $scope.ads = res.data;
    });
  }

})();
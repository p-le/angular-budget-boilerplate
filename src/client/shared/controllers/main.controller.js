(function() {
  'use strict';
  angular
    .module('angularPro')
    .controller('MainController', MainController);

  function MainController($scope) {
    $scope.user1 = {
      firstname: 'LE QUANG',
      lastname: 'PHU'
    };

    $scope.user2 = {
      firstname: 'PHU QUANG',
      lastname: 'LE'
    };
  }
})();
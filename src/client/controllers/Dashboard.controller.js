(function() {
    'use strict';
    angular
        .module('angularPro')
        .controller('DashboardController', DashboardController);

    function DashboardController($scope) {
        $scope.test = "Hello world";
    }
})();
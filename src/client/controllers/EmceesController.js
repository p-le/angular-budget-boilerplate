(function() {
    'use strict';
    angular.module('angularPro')
        .controller('EmceesController', EmceesController);
    
    function EmceesController($scope, $routeParams) {
        $scope.id = $routeParams.id;
    };
})();
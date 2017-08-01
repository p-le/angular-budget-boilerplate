(function() {
    'use strict';
    angular.module('angularPro')
        .config(function($routeProvider) {
            $routeProvider
                .when('/emcees/:id', {
                    controller: 'EmceesController'
                })
                .when('/home', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
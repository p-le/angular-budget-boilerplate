(function() {
    'use strict';
    angular.module('angularPro')
        .config(function($routeProvider) {
            $routeProvider
                .when('/emcees/:id', {
                    controller: 'EmceesController'
                })
                .when('/news', {
                    templateUrl: 'templates/news.html',
                    controller: 'NewsCtrl',
                    controllerAs: 'ctrl'
                })
                .when('/home', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl',
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
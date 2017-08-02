(function() {
    'use strict';
    angular.module('angularPro')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/components.html',
                    controller: 'ComponentCtrl'
                })
                .when('/demo', {
                    templateUrl: 'templates/demo.html',
                    controller: 'DemoCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
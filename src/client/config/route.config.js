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
                .when('/demo/ads', {
                    templateUrl: 'controllers/ad/ad-list.html',
                    controller: 'AdListCtrl',
                    resolve: {}
                })
                .when('/demo/ads/create', {
                    templateUrl: 'controllers/ad/ad-create.html',
                    controller: 'AdCreateCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
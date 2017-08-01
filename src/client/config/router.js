(function() {
  'use strict';
  angular
    .module('angularPro')
    .config(function($locationProvider, $stateProvider, $urlRouterProvider) {
      var dashboardState = {
        name: 'Dashboard',
        url: '/dashboard',
        templateUrl: 'templates/dashboard.html',
        controller: 'DashboardController'
      };

      var watchlistState = {
        name: 'Watchlist',
        url: '/watchlist/:listId',
        templateUrl: 'templates/watchlist.html',
        controller: 'WatchlistController'
      };

      $stateProvider
        .state(dashboardState)
        .state(watchlistState);

      $urlRouterProvider.otherwise('/dashboard');

      $locationProvider.html5Mode(true);
    });
})();
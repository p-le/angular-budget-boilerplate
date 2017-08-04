(function() {
  'use strict';
  angular.module('angularPro')
    .controller('DemoCtrl', DemoCtrl);
  
  function DemoCtrl(
      $scope,
      $resource, 
      $filter, 
      Ad, 
      AdCategoryFactory, 
      AdvertiserFactory, 
      MediaCategoryFactory, 
      CampaignFactory,
      OsFactory,
      AdFactory
    ) {
    console.log($scope);
    $scope.ad = Ad;
    $scope.campaigns = [];
    $scope.apps = [];

    AdFactory.get({}, function(res) {
      $scope.ads = res.data;
    });

    
  }
})();
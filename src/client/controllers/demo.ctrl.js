(function() {
  'use strict';
  angular.module('angularPro')
    .controller('DemoCtrl', DemoCtrl);
  
  function DemoCtrl($scope, $filter) {
    $scope.ad = {
      test: false,
      creativeType: 'text',
      maxCreativeNum: 1,
      os: [],
      isNeedCheckCvDuplicationXuid: true
    };
    $scope.advertisers = [
      {
        id: 1,
        name: "Le Quang Phu"
      },
      {
        id: 2,
        name: "Phu Quang Le"
      }
    ];
    $scope.adCategories = [
      {
        id: 1,
        name: 'Adult'
      },
      {
        id: 2,
        name: 'Blog'
      }
    ];
    $scope.campaigns = [
      {
        id: 1,
        name: 'campaign 1',
        advertiserId: 1,
      },
      {
        id: 2,
        name: 'campaign 2',
        advertiserId: 1,
      },
      {
        id: 3,
        name: 'campaign 3',
        advertiserId: 2,
      }
    ];
    $scope.creativeTypes = [
        'text',
        'picture',
        'js'
    ];
    $scope.clickTimeUnits = [
      'minute',
      'day'
    ];
    $scope.$watch('selectedAdvertiser', function(advertiser) {
      if (advertiser) {
        $scope.ad.advertiserId = advertiser.id;
      }
    });

    $scope.$watch('selectedCampaign', function(campaign) {
      if (campaign) {
        $scope.ad.campaignId = campaign.id;
      }
    });
    $scope.$watch('selectedAdCategory', function(adCategory) {
      if (adCategory) {
        $scope.ad.adCategoryId = adCategory.id;
      }
    });
    $scope.onChange = function(value) {
      console.log(value);
    }
    $scope.submit = function() {
      console.log($scope.ad);
    }
  }
})();
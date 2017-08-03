(function() {
  'use strict';
  angular.module('angularPro')
    .controller('DemoCtrl', DemoCtrl);
  
  function DemoCtrl($scope, $resource, $filter, Ad, AdCategoryFactory, AdvertiserFactory, MediaCategoryFactory, CampaignFactory, OsFactory) {
    $scope.ad = Ad;
    $scope.campaigns = [];
    $scope.apps = [];

    AdCategoryFactory.get({}, function(res) {
      $scope.adCategories = angular.fromJson(res.data);
    });

    MediaCategoryFactory.get({}, function(res) {
      $scope.mediaCategories = angular.fromJson(res.data);
    });

    AdvertiserFactory.get({}, function(res) {
      $scope.advertisers = angular.fromJson(res.data);
    });
    
    OsFactory.get({}, function(res) {
      $scope.os = angular.fromJson(res.data);
    });

    $scope.deliveryMaxTypes = [ 'imp', 'click', 'cv' ];
    
    $scope.payper = [
      'click_reward',
      'cv_reward',
      'click+cv_reward'
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

        CampaignFactory.get({}, function(res) {
          $scope.campaigns = angular.fromJson(res.data);
        });
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
    };

    $scope.submit = function() {
      console.log($scope.ad);
    };

    $scope.toggleOsSelection = function(os) {
      var idx = $scope.ad.os.indexOf(os.id);
      if (idx > -1) {
        $scope.ad.os.splice(idx, 1);
      } else {
        $scope.ad.os.push(os.id);
      }
    };

    $scope.toggleOsAll = function() {
      var osIds = []
      angular.forEach($scope.os, function(item) {
        osIds.push(item.id);
      });
      if ($scope.ad.os.length !== $scope.os.length) {
        $scope.ad.os = osIds;
      } else {
        $scope.ad.os = [];
      }
    };

    $scope.toggleMediaCategorySelection = function(mediaCategory) {
      var idx = $scope.ad.mediaCategory.indexOf(mediaCategory.id);
      if (idx > -1) {
        $scope.ad.mediaCategory.splice(idx, 1);
      } else {
        $scope.ad.mediaCategory.push(mediaCategory.id);
      }
    };

    $scope.toggleMediaCategoryAll = function() {
      var mediaCategoryIds = []
      angular.forEach($scope.mediaCategories, function(item) {
        mediaCategoryIds.push(item.id);
      });
      if ($scope.ad.mediaCategory.length !== $scope.mediaCategories.length) {
        $scope.ad.mediaCategory = mediaCategoryIds;
      } else {
        $scope.ad.mediaCategory = [];
      }
    };
  }
})();
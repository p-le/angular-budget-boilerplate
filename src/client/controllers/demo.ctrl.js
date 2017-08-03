(function() {
  'use strict';
  angular.module('angularPro')
    .controller('DemoCtrl', DemoCtrl);
  
  function DemoCtrl($scope, $filter, Ad) {
    $scope.ad = Ad;
    $scope.deliveryMaxTypes = [ 'imp', 'click', 'cv' ];
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

    $scope.os = [ 
      { id: 1, name: 'Android' },  
      { id: 2, name: 'iOS' },  
      { id: 3, name: 'PC' },  
    ];
    $scope.mediaCategory = [
      { id: 1, name: 'ディマージシェア' },
      { id: 2, name: 'ブログ' },
      { id: 3, name: 'ショッピング' },
      { id: 4, name: '電子書籍' },
      { id: 5, name: 'デコメ/きせかえ' },
      { id: 6, name: 'ギャンブル' },
      { id: 7, name: '着メロ、着うた' },
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
    }

    $scope.toggleMediaCategorySelection = function(mediaCategory) {
      var idx = $scope.ad.mediaCategory.indexOf(mediaCategory.id);
      if (idx > -1) {
        $scope.ad.mediaCategory.splice(idx, 1);
      } else {
        $scope.ad.mediaCategory.push(os.id);
      }
    };

    $scope.toggleMediaCategoryAll = function() {
      var mediaCategoryIds = []
      angular.forEach($scope.mediaCategory, function(item) {
        mediaCategoryIds.push(item.id);
      });
      if ($scope.ad.mediaCategory.length !== $scope.mediaCategory.length) {
        $scope.ad.mediaCategory = mediaCategoryIds;
      } else {
        $scope.ad.mediaCategory = [];
      }
    }
  }
})();
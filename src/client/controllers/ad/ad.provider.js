(function() {
  'use strict';
  angular.module('angularPro')
    .provider('Ad', AdProvider);

  function AdProvider() {
    var isAffiliate = false;
    this.setAffiliate = function(affiliate)  {
      isAffiliate = affiliate;
    };
    this.$get = function() {
      return new Ad(isAffiliate);
    };
  }

  function Ad(isAffiliate) {
    this.test = false;
    this.name = "";
    this.entryType = isAffiliate ? 1 : 0;
    this.advertiserId = 0;
    this.isHouse = false;
    this.campaignId = 0;
    this.adCategoryId = 0;
    this.startedAt = new Date();
    this.endedAt = "";
    this.os = [];
    this.mediaOwnerId = 0;
    this.mediumId = 0;
    this.itemId = 0;
    this.itemType = 0;
    this.userSegmentId = undefined;
    this.userSegmentGroups = undefined;
    this.cvAppId = undefined;
    this.optionApp = false;
    this.payper = 'cv_reward';
    this.hasIncentiveAllowance = true;
    this.cvCondition = "";
    this.priceFixed = 'fixed_amount';
    this.clickGrossUnitPrice = undefined;
    this.clickNetUnitPrice = undefined;
    this.grossUnitPrice = 0;
    this.netUnitPrice = 0;
    this.isCvpointFree = 0;
    this.isCvAutoApproval = 0;
    this.cvApproveDays = 0;
    this.mediaCategory = [];
    this.note = "" ;
    this.isMediumApproveNeed = 0;
    this.isImageTextChangeable = 1;
    this.clickTimeUnit = "";
    this.isNeedCheckCvDuplicationXuid = true;
    this.cvDuplicationClickCheck = "needless";
    this.cvDuplicationErrorUrl = "";
    this.deliveryMaxType = "cv";
    this.maxCount = 0;
    this.announceCount = 0;
    this.announceDays = 0;
    this.adminNote = "";
    this.creativeType = 'text';
    this.maxCreativeNum = 1;
  }
})();
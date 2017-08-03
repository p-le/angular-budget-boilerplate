(function() {
  'use strict';
  angular.module('angularPro')
    .service('Ad', Ad);
  
  function Ad() {
    this.test = false;
    this.name = "";
    this.advertiserId = 0;
    this.campaignId = 0;
    this.adCategoryId = 0;
    this.startedAt = new Date();
    this.endedAt = "";
    this.os = [];
    this.optionApp = false;
    this.payper = 'cv_reward';
    this.hasIncentiveAllowance = true;
    this.cvCondition = "";
    this.priceFixed = 'fixed_amount';
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
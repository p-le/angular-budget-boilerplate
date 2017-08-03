(function() {
  'use strict';
  angular.module('angularPro')
    .config(AdmageConfig);
  
  function AdmageConfig(AdProvider) {
    AdProvider.setAffiliate(true);
  }
})();
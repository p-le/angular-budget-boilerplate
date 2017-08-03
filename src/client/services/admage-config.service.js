(function() {
  'use strict';
  angular.module('angularPro')
    .service('AdmageConfig', AdmageConfig)
  
  function AdmageConfig() {
    this.baseUrl = "";
  }
})();
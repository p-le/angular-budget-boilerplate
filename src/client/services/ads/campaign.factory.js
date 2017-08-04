(function() {
  'use strict';
  angular.module('angularPro')
    .service('CampaignFactory', CampaignFactory);

  function CampaignFactory($resource, AdmageConfig) {
    var url = AdmageConfig.baseUrl + "/campaign";
    return $resource(url);
  }
  
})();
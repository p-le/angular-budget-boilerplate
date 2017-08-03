(function() {
  'use strict';
  angular.module('angularPro')
    .service('CampaignFactory', CampaignFactory);

  function CampaignFactory($resource) {
    var url = "http://172.16.115.96:8000/api/campaign";
    return $resource(url);
  }
  
})();
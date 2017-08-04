(function() {
  'use strict';
  angular.module('angularPro')
    .service('AdvertiserFactory', AdvertiserFactory);

  function AdvertiserFactory($resource, AdmageConfig) {
    var url = AdmageConfig.baseUrl + "/advertiser/:id";
    return $resource(url, {}, {
      query: { isArray: false }
    });
  }
  
})();
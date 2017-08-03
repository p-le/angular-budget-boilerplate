(function() {
  'use strict';
  angular.module('angularPro')
    .service('AdvertiserFactory', AdvertiserFactory);

  function AdvertiserFactory($resource) {
    var url = "http://172.16.115.96:8000/api/advertiser";
    return $resource(url);
  }
  
})();
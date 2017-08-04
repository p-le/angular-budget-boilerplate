(function() {
  'use strict';
  angular.module('angularPro')
    .service('OsFactory', OsFactory);

  function OsFactory($resource, AdmageConfig) {
    var url = AdmageConfig.baseUrl + "/os";
    return $resource(url);
  }
  
})();
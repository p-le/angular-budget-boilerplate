(function() {
  'use strict';
  angular.module('angularPro')
    .service('AdCategoryFactory', AdCategoryFactory);

  function AdCategoryFactory($resource, AdmageConfig) {
    var url = AdmageConfig.baseUrl + "/ad-category";
    return $resource(url);
  }
  
})();
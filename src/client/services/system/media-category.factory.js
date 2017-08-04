(function() {
  'use strict';
  angular.module('angularPro')
    .service('MediaCategoryFactory', MediaCategoryFactory);

  function MediaCategoryFactory($resource, AdmageConfig) {
    var url = AdmageConfig.baseUrl + "/media-category";
    return $resource(url);
  }
  
})();
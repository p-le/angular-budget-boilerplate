(function() {
  'use strict';
  angular.module('angularPro')
    .service('MediaCategoryFactory', MediaCategoryFactory);

  function MediaCategoryFactory($resource) {
    var url = "http://172.16.115.96:8000/api/media-category";
    return $resource(url);
  }
  
})();
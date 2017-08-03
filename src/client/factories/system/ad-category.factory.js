(function() {
  'use strict';
  angular.module('angularPro')
    .service('AdCategoryFactory', AdCategoryFactory);

  function AdCategoryFactory($resource) {
    var url = "http://172.16.115.96:8000/api/ad-category";
    return $resource(url);
  }
  
})();
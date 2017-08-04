(function() {
  'use strict';
  angular.module('angularPro')
    .factory('AdFactory', AdFactory);
  
  function AdFactory($resource, AdmageConfig) {
    var url = AdmageConfig.baseUrl + "/ad/:id";
    return $resource(url, {}, {
      get: { 
        cancellable: true,
        transformResponse: function(data) {
          return JSON.parse(data);
        }
      },
      save: {
        transformRequest: function(data, headers) {
          console.log(data);
        },
        transformResponse: function(data, headers, status) {
          console.log(data);
        } 
      }
    });
  }
})();
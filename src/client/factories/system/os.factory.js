(function() {
  'use strict';
  angular.module('angularPro')
    .service('OsFactory', OsFactory);

  function OsFactory($resource) {
    var url = "http://172.16.115.96:8000/api/os";
    return $resource(url);
  }
  
})();
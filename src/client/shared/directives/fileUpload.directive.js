(function() {
  'use strict';

  angular
    .module('angularPro')
    .directive('fileUpload', fileUpload);

  function fileUpload(visionService) {
    var directive  = {
      restrict: 'A',
      link: function (scope, element) {
        element.on('change', fileUploadHandler);
        
        function fileUploadHandler(event) {
          var file = event.target.files[0];
          scope.processing = true;
          scope.errors = [];

          visionService.analyzeImageFile(file, scope.selectedTypes)
            .then(function(res) {
              console.log(res);
              if (angular.isDefined(res.data.result)) {
                scope.data = visionService.transformResult(res.data, scope.selectedTypes).concat(scope.data);
              } else {
                scope.errors = res.data.error;
              }
              scope.resultJson = res.data.result || res.data.error;
            })
            .catch(function(err) {
              console.log(err);
              scope.errors = [ err ];
            })
            .finally(function() {
              element.val(null);
              scope.processing = false;
            });
        }
      }
    };

    return directive;
  }

})();
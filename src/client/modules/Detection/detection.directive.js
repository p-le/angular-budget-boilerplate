(function() {
  angular
    .module('angularPro')
    .directive('pleDetection', pleDetection);
  
  function pleDetection($compile, $templateCache) {

    var directive = {
      restrict: 'A',
      scope: {
        data: '='
      },
      compile: compileFn
    };

    function compileFn(tEle, tAttrs) {
      return function (scope, element, attrs) {  
        element.contents().remove();
        var template = $templateCache.get('detection.html');
      }
    }
    

    return directive;
  }
})();
(function() {
  angular
    .module('angularPro')
    .directive('simpleModel', simpleModel);
  
  function simpleModel($parse) {
    return {
      link: function(scope, element, attrs) {
        console.log(attrs.simpleModel);
        var modelGetter = $parse(attrs.simpleModel);
        var modelSetter = modelGetter.assign;

        scope.$watch(modelGetter, function(newVal) {
          element.val(newVal);
        });

        element.on('input', function() {
          scope.$apply(function() {
            modelSetter(scope, element.val());
          });
        });
      }
    };
  }
})();
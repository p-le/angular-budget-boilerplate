(function() {
  'use strict';
  angular
    .module('angularPro')
    .directive('if', ifDirective);

  function ifDirective() {
    return {
      transclude: 'element',
      priority: 500,
      compile: function(element, attr, transcludeFn) {
        return function postLink(scope, element, attr, transclude) {
          var childElement, childScope;

          scope.$watch(attr['if'], function(newValue) {
            console.log(newValue);
            if (childElement) {
              childElement.remove();
              childScope.$destroy();
              childElement = undefined;
              childScope = undefined;
            }

            if (newValue) {
              childScope = scope.$new();
              childElement = transcludeFn(childScope, function(clone) {
                element.after(clone);
              });
            }
          });
        };
      }
    };

  }
})();
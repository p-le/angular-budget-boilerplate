(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pRadio', pRadio);
  
  function pRadio($log) {
    var directive = {
      restrict: 'E',
      require: '^pRadioGroup',
      transclude: true,
      link: function(scope, element, attrs, radioGroupCtrl) {
        if (!radioGroupCtrl) {
          throw ('RadioGroupButton: No RadioGroupController could be found');
        }
      }
    };
    return directive;
  }
})();
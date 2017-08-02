(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pRadio', pRadio);
  
  function pRadio() {
    var directive = {
      restrict: 'E',
      require: '^pRadioGroup',
      transclude: true
    };
    return directive;
  }
})();
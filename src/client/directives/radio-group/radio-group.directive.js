(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pRadioGroup', pRadioGroup);

  function pRadioGroup() {
    var directive = {
      restrict: 'E'
    };

    return directive;
  }
})();
(function() {
  'use strict';
  angular
    .module('angularPro')
    .directive('button', button);
  
  function button() {
    return {
      restrict: 'E',
      compile: function(tEle, tAttrs) {
        tEle.addClass('btn');
        if (tAttrs.type == 'submit') {
          tEle.addClass('btn-primary');
        }
        if (tAttrs.size) {
          tEle.addClass('btn-' + tAttrs.size);
        }
      }
    }
  }
})();
(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pLoader', pLoader);
  
  function pLoader() {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      template: '<div class="loader"></div>',
      compile: function(tEle, tAttrs) {
        var size = tAttrs.size;
        if (size) {
          switch(size) {
            case 'sm':
              tEle.addClass('loader--sm');
              break;
            case 'lg':
              tEle.addClass('loader--lg');
              break;
          }
        }
      }
    };
  }
})();
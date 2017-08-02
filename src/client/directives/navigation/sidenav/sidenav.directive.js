(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pSidenav', pSidenav);
  
  function pSidenav() {
    var directive = {
      scope: {
        visible: '='
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'templates/sidenav.html',
      compile: function(tEle, tAttrs) {
        
        return function(scope, element, attrs) {
          var align = attrs.align || 'left';
          
          scope.$watch('visible', function(newValue) {
            scope.navClass = {
              'sidenav': true,
              'sidenav-show': newValue,
              'sidenav-left': align == 'left',
              'sidenav-right': align == 'right'
            };
          });
        };
      }
    };

    return directive;
  }
})();
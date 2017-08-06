(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pSidenav', pSidenav);
  
  function pSidenav() {
    var directive = {
      scope: {
        visible: '=?'
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'directives/navigation/sidenav/sidenav.html',
      controller: 'SideNavCtrl',
      compile: function(tEle, tAttrs) {
        tEle.addClass('sidenav').attr('tabindex', '-1');

        return function(scope, element, attrs) {
          var align = attrs.align || 'left';
          
          scope.$watch('visible', function(newValue) {
            scope.navClass = {
              'sidenav': true,
              'sidenav-show': true,
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
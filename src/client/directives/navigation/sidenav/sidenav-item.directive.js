(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pSidenavItem', pSidenavItem);
  
  function pSidenavItem() {
    var directive = {
      scope: {},
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/sidenav.html',
      compile: function(tEle, tAttrs) {
        tEle.addClass('sidemenu');
        return function(scope, element, attrs) {

        };
      }
    };

    return directive;
  }
})();
(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pTopnav', pTopnav);
  
  function pTopnav() {
    var directive = {
      scope: {},
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/navigation/topnav/topnav.html',
      compile: function(tEle, tAttrs) {
        tEle.addClass('topnav');
        return function(scope, element, attrs) {

        };
      }
    };

    return directive;
  }
})();
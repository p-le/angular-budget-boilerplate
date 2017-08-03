(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pMultiCheckbox', pMultiCheckbox);
  
  function pMultiCheckbox() {
    var hasSelectAll = false;
    var ddo = {
      require: '?ngModel',
      scope: {
      },
      replace: true,
      restrict: 'E',
      templateUrl: 'directives/checkbox/multi-checkbox.html',
      link: function(scope, element, attrs, ngModelCtrl) {
        console.log(ngModelCtrl);
        console.log(attrs);
      }
    };

    return ddo;
  }
})();
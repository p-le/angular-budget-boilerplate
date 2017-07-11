(function() {
  angular
    .module('angularPro')
    .directive('validateEquals', validateEquals);

  function validateEquals() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
        ngModelCtrl.$parsers.push(validateEqual);
        ngModelCtrl.$formatters.push(validateEqual);

        scope.$watch(attrs.validateEquals, function() {
          ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
        });

        function validateEqual(value) {
          var valid = (value === scope.$eval(attrs.validateEquals));
          ngModelCtrl.$setValidity('equal', valid);
          return valid ? value : undefined;
        }
      }
    }
  }
})();
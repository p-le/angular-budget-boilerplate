(function() {
  angular
    .module('angularPro')
    .directive('uniqueEmail', uniqueEmail);
  
  function uniqueEmail(authenticateService) {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
        var original;

        ngModelCtrl.$formatters.unshift(function(modelValue) {
          original = modelValue;
          return modelValue;
        });

        ngModelCtrl.$parsers.push(function(viewValue) {

          if (viewValue &&  viewValue !== original && ngModelCtrl.$valid) {
            authenticateService.checkEmail(viewValue)
              .then(function(res) {
                if (angular.isObject(res.data)) {
                  ngModelCtrl.$setValidity('unique-email', true);
                } else {
                  ngModelCtrl.$setValidity('unique-email', false);
                }
              })
              .catch(function(err) {
                console.log(err);
              });
          }

          return viewValue;
        });
      }
    }
  }
})();
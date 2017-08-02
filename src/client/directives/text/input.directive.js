(function() {
    angular.module('angularPro')
    .directive('pInput', pInput);

    function pInput($log) {
        return {
            scope: {},
            restrict: 'E',
            replace: true,
            template: '<input />',
            compile: function(tEle, tAttrs) {
                return function (scope, element, attrs) {
                    element.text(attrs.text);
                };
            }
        }
    }
})();
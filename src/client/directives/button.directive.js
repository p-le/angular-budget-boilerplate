(function() {
    angular.module('angularPro')
        .directive('pButton', pButtonDirective);

    function pButtonDirective($log) {
        const modifiers = [
            'default',
            'primary',
            'info',
            'danger',
            'success',
            'warning',
            'disabled'
        ]
        return {
            scope: {
            },
            transclude: true,
            restrict: 'E',
            replace: true,
            template: '<button ng-transclude></button>',
            compile: function(tEle, tAttrs) {
                var modifier = tAttrs.modifier || 'default';
                if (modifiers.indexOf(modifier) == -1) {
                    $log.error("Button [modifier] only receive value 'default' | 'primary' | 'info' | 'danger' | 'succes' | 'warning' | 'disabled' ");
                    return false;
                }
                tEle.addClass('btn btn-' + modifier);
                return function (scope, element, attrs) {
                    console.log(scope);
                };
            }
        }
    }
})();
(function() {
    angular.module('angularPro')
        .directive('pButton', pButtonDirective);

    function pButtonDirective() {
        return {
            scope: {
                value: '='
            },
            restrict: 'E',
            replace: true,
            template: '<button>{{ value }}</button>',
            compile: function(tEle, tAttrs) {
                tEle.addClass('btn');

                return function (scope, element, attrs) {
                    
                };
            }
        }
    }
})();
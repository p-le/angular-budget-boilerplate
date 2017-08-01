(function() {
    'use strict';
    angular.module('angularPro')
        .directive('writers', writersDirective);
    
    function writersDirective() {
        var directive = {
            restrict: 'E',
            link: function(scope, element) {
                element.text('Graffiti artist: ' + scope.artist);
            }
        };

        return directive;
    }
})();
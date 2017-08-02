(function() {
    'use strict';
    angular.module('angularPro')
        .filter('range', function() {
            return function(input, total) {
                total = parseInt(total);

                for (var i=1; i<=total; i++) {
                    input.push(i);
                }

                return input;
            }
        });
})();
(function() {
  angular.module('angularPro')
    .filter('snakeToCamel', function() {
      return function(input) {
        input.replace(/_\w/g, function(m) {
          return m[1].toUpperCase();
        });
      }
    })
})();
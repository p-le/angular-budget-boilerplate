(function() {
  angular
    .module('angularPro')
    .directive('accordion', accordion);
  
  function accordion() {
    return {
      restrict: 'E',
      controller: 'AccordionController',
      link: function(scope, element, attrs) {
        element.addClass('accordion');
      }
    };
  }
})();
(function() {
  angular
    .module('angularPro')
    .directive('accordionGroup', accordionGroup);
  
  function accordionGroup() {
    return {
      require: '^accordion',
      transclude: true,
      replace: true,
      templateUrl: 'templates/accordion.html',
      scope: {
        heading: '@'
      },
      link: function(scope, element, attrs, accordionCtrl) {
        accordionCtrl.addGroup(scope);
        scope.isOpen = false;
        scope.$watch('isOpen', function(value) {
          if (value) {
            accordionCtrl.closeOthers(scope);
          }
        });
      } 
    };
  }
})();
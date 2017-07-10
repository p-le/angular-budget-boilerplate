(function() {
  'use strict';
  angular
    .module('angularPro')
    .directive('test', test);

  function test() {
    var directive = {
      scope: {
        name: '='
      },
      controllerAs: 'vm',
      controller: function($scope) {
        var vm = this;
        vm.name = $scope.name;
        

        $scope.$watch('name', function(newVal) {
          vm.name = newVal;
        });
      },
      template: '<input ng-model="vm.name" type="text" /><input ng-model="name" type="text" />'
    }

    return directive;
  }
})();
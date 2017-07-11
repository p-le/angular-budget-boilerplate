(function() {
  angular
    .module('angularPro')
    .controller('AccordionController', AccordionController);
  
  function AccordionController($scope, $attrs) {
    var self = this;
    self.groups = [];
    self.closeOthers = closeOthers;
    self.addGroup = addGroup;
    self.removeGroup = removeGroup;
    
    function closeOthers(openGroup) {
      angular.forEach(self.groups, function(group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }

    function addGroup(groupScope) {
      self.groups.push(groupScope);
      groupScope.$on('$destroy', function(event) {
        self.removeGroup(groupScope);
      });
    }

    function removeGroup(group) {
      var index = self.groups.indexOf(group);
      if (index > -1) {
        self.groups.splice(index, 1);
      }
    }
  }
})();
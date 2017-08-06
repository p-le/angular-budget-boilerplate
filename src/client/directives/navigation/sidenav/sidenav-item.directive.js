(function() {
  'use strict';
  angular.module('angularPro')
    .directive('pSidenavItem', pSidenavItem);
  
  function pSidenavItem($location) {
    var directive = {
      require: '^pSidenav',
      scope: {
        title: '=',
        menu: '=',
      },
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/navigation/sidenav/sidenav-item.html',
      compile: function(tEle, tAttrs) {
        if (!tAttrs.title) {
          throw "[title] attribute required!";
        }
        return function(scope, element, attrs, SideNavCtrl) {
          var header = element.find('header');
          
          scope.isOpen = false;
          angular.forEach(scope.menu, function(m) {
            if (('#!' + $location.url()).includes(m.url)) {
              scope.isOpen = true;
            }
            console.log(m.url, $location.url());
          });

          scope.icon = scope.isOpen ? 'expand_less' : 'expand_more';
          scope.status = {
            'sidenav-item--open': scope.isOpen,
          };

          header.bind('click', function() {
            scope.$apply(function() {
              SideNavCtrl.toggle(scope);
            });
          });

          scope.hide = function() {
            scope.isOpen = false;
            scope.status = {
              'sidenav-item--open': scope.isOpen
            };
          };

          scope.show = function() {
            scope.isOpen = true;
            scope.status = {
              'sidenav-item--open': true
            };
          };

          SideNavCtrl.addItems(scope);
        };
      }
    };

    return directive;
  }
})();
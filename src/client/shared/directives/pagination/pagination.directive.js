(function() {
  'use strict';
  angular
    .module('angularPro')
    .directive('pagination', pagination);

  function pagination() {
    return {
      restrict: 'E',
      scope: {
        numPages: '=',
        currentPage: '='
      },
      replace: true,
      templateUrl: 'templates/pagination.html',
      link: function(scope, element, attrs) {
        scope.isActive = isActive;
        scope.selectPage = selectPage;
        scope.selectNext = selectNext;
        
        scope.$watch('numPages', function(value) {
          scope.pages = [];
          for (var i=1; i <= value; i++) {
            scope.pages.push(i);
          }
          if (scope.currentPage > value) {
            scope.selectPage(value);
          }
        });

        function isActive(page) {
          return scope.currentPage === page;
        }
        function selectPage(page) {
          if (!scope.isActive(page)) {
            scope.currentPage = page;
          }
        }
        function selectNext() {
          if (!scope.noNext()) {
            scope.selectPage(scope.currentPage + 1);
          }
        }
      }
    };
  }
})();
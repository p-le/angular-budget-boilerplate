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
        currentPage: '=',
        onSelectPage: '&'
      },
      replace: true,
      templateUrl: 'templates/pagination.html',
      link: function(scope, element, attrs) {
        scope.isActive = isActive;
        scope.selectPage = selectPage;
        scope.selectNext = selectNext;
        scope.pages = [];
        for (var i=1; i <= scope.numPages; i++) {
          scope.pages.push(i);
        }

        function isActive(page) {
          return scope.currentPage === page;
        }

        function selectPage(page) {
          if (!scope.isActive(page)) {
            scope.currentPage = page;
            scope.onSelectPage({ page: page });
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
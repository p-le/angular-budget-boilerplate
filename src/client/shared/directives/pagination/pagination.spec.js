describe('Pagination directives', function() {
  var $scope, element, lis;

  beforeEach(module('angularPro'));
  beforeEach(inject(function($compile, $rootScope, $templateCache) {
    $scope = $rootScope.$new();
    $scope.numPages = 5;
    $scope.currentPage = 3;
    console.log($templateCache.info());
    element = $compile('<pagination num-pages="numPages" current-page="currentPage"></pagination>')($scope);
    $scope.$digest();
    lis = function() { return element.find('li') ; };
  }));

  it ('has the number of the page as tech in each page item', function() {
    for (var i=1; i<=$scope.numPages; i++) {
      expect(lis().eq(i).text()).toEqual('' + i);
    }
  });
  
});
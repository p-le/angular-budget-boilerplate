describe('> CommentController', function() {
  var scope;

  beforeEach(function() {
    module('angularPro');
    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      $controller('CommentController', { $scope: scope });
    })
    scope.add('Any Comment');
  });
  it('', function() {
    expect(scope.comments[0]).toBe('Any Comment');
  });
});
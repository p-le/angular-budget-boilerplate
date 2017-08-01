describe('> TodoController', function() {
  var scope = { };

  beforeEach(module('angularPro'));

  beforeEach(inject(function($controller) {
    $controller('TodoController', { $scope: scope });
  }));

  it('should define a list object', function() {
    expect(scope.list).toBeDefined();
  });

  it('should define a list object', function() {
    expect(scope.list[0]).toEqual('test');
  });
  
  it('should define a list object', function() {
    expect(scope.list[1]).toEqual('execute');
  });

  it('should define a list object', function() {
    expect(scope.list[2]).toEqual('refactor');
  });

  describe('> When using a todo-list', function() {
    beforeEach(function() {
      scope.add('repeat');
    });

    it('should add item to last item in list', function() {
      var lastIndex = scope.list.length - 1;
      expect(scope.list[lastIndex]).toEqual('repeat');
    });
  });
});


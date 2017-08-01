describe('> EmceesController', function() {
    var scope;
    beforeEach(function() {
        module('angularPro');
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller('EmceesController', {
                $scope: scope,
                $routeParams: {
                    id: '1'
                }
            })         
        });
    });
    it('should have id = 1', function() {
        expect(scope.id).toBe('1');
    });
});
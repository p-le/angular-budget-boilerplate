describe('> Route', function() {
    var $rootScope, $location, $route;

    beforeEach(function() {
        module('angularPro');
        inject(function(_$rootScope_, _$location_, _$route_) {
            $location = _$location_;
            $rootScope = _$rootScope_;
            $route = _$route_;
        });
    });

    it('should route controller should be mapped to HomeCtrl', function() {
        $location.path('/home');
        $rootScope.$apply();
        expect($route.current.controller).toEqual('HomeCtrl');
    });

    it('should use templates/home.html as templateUrl', function() {
        $location.path('home');
        $rootScope.$apply();
        expect($route.current.templateUrl).toBe('templates/home.html');
    });
})
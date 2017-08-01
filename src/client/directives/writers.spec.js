describe('> Writers Directive', function() {
    var scope, element;
    var artist = 'Le Quang Phu';

    beforeEach(function() {
        module('angularPro');
        inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            scope.artist = artist;
            element = angular.element('<writers></writers>');
            $compile(element)(scope);
            scope.$digest();
        });
    });

    it('should display correct text in the DOM', function() {
        expect(element.text()).toBe('Graffiti artist: ' + artist);
    });
});
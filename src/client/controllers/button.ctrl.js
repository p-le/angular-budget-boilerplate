(function() {
    angular.module('angularPro')
    .controller('ButtonCtrl', ButtonCtrl);

    function ButtonCtrl() {
        var self = this;
        self.title = "Button Directives";
        
        self.handleClick = function() {
            console.log('aaaaaaaaaaaaaaaaaa');
        };
    }
})();
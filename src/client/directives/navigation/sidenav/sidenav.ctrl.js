(function() {
    'use strict';
    angular.module('angularPro')
        .controller('SideNavCtrl', SideNavCtrl);

    function SideNavCtrl() {
        var self = this;
        var items = [];

        self.addItems = function(item) {
            items.push(item);
        }

        self.toggle = function(selectedItem) {
            angular.forEach(items, function(i) {
                if (i !== selectedItem) {
                    i.hide();
                }
            });
            selectedItem.show();
        };
    }
})();
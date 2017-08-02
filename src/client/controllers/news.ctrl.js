(function() {
  'use strict';
  angular.module('angularPro')
    .controller('NewsCtrl', NewsCtrl);
  
  function NewsCtrl() {
    var vm = this;
    vm.news = 'Le Quang Phu';
  }
})();
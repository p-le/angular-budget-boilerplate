(function() {
  'use strict';
  angular
    .module('angularPro')
    .controller('MainController', MainController);

  function MainController() {
    this.name = "Tech Department";
  }
})();
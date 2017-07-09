(function() {
  angular
    .module('angularPro')
    .run(function(dialogService) {
      dialogService.init();
    });
})();
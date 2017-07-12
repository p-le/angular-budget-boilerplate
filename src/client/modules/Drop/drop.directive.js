(function() {
  angular
    .module('angularPro')
    .directive('pleDrop', pleDrop);

  function pleDrop($interval, visionService) {

    var directive = {
      restrict: 'A',
      template: '<input type="file" id="imgupload" style="display:none" />',
      link: linkFn
    };

    function linkFn(scope, element) {
      
      element.on('click', clickHandler);
      element.on('$destroy', cleanup);

      function clickHandler(event) {
        event.preventDefault();
        angular.element(document.querySelector('#imgupload')).click();

        return false;
      }

      function cleanup() {
        element.off('drop', dropHandler);
        element.off('click', clickHandler);
      }
    }

    return directive;
  }
})();
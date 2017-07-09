(function() {
  'use strict';
  angular
    .module('angularPro')
    .directive('waitSpinner', waitSpinner);

  function waitSpinner(messageService, eventService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'templates/wait-spinner.tpl.html',
      link: linkFn
    };

    return directive;

    function linkFn(scope, element) {
      element.hide();

      scope.startHandle = messageService.publish(
        eventService.message._SERVER_REQUEST_STARTED_,
        startRequestHandler
      );
      
      scope.endHandle = messageService.publish(
        eventService.message._SERVER_REQUEST_ENDED_,
        endRequestHandler
      );

      scope.$on('$destroy', cleanup);

      function startRequestHandler() {
        element.show();
      }

      function endRequestHandler() {
        element.hide();
      }

      function cleanup () {
        messageService.unsubscribe(scope.startHandle);
        messageService.unsubscribe(scope.endHandle);
      }
    }
  }
})
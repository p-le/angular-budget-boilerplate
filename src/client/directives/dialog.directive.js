(function() {
  'use strict';
  angular
    .module('angularPro')
    .directive('dialog', dialog);

  function dialog(messageService, eventService) {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/dialog.tpl.html',
      link: linkFn
    };

    function linkFn(scope, elemetn) {
      element.hide();
      scope.modalType = 'popup';
      scope.message = '';
      scope.showPopupHandle = messageService.subcribe(
        eventService.message._DISPLAY_POPUP_,
        showPopupHandler
      );

      scope.showConfirmationHandle = messageService.subcribe(
        eventService.message._DISPLAY_CONFIRMATION_,
        showConfirmationHandler
      );
      scope.$on('$destroy', cleanup);
      
      function showPopupHandler(messageText) {
        scope.message = messageText;
        scope.modalType = 'popup';
        element.show();
      }

      function showConfirmationHandler(messageText) {
        scope.message = messageText;
        scope.modalType = 'confirmation';
        element.show();
      }

      function cleanup() {
        messageService.unsubscribe(scope.showConfirmationHandle);
        messageService.unsubscribe(scope.showPopupHandle);
      }
    }

    return directive;
  }
})();
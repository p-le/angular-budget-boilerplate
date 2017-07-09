(function() {
  'use strict';
  angular
    .module('angularPro')
    .factory('dialogService', dialogService);

  function dialogService($timeout, messageService, eventService) {
    var messageText = '';
    var displayType = 'popup';
    var dialog = {
      init: init
    };

    messageService.subscribe(eventService.message._DISPLAY_DIALOG_, displayDialogHandler);

    function init() {
      messageText = '';
      displayType = 'popup';
    }

    function displayDialogHandler(message, type) {
      messageText = message;
      displayType = type;
      
      $timeout(function() {
        switch(displayType) {
          case 'popup':
            messageService.publish(eventService.message._DISPLAY_POPUP_, [messageText]);
            break;
          case 'confirmation':
            messageService.publish(eventService.message._DISPLAY_CONFIRMATION_, [messageText]);
            break;
          default:
            messageService.publish(eventService.message._DISPLAY_POPUP_, [messageText]);
            break;
        }
      }, 0);
    }

    return dialog;
  }
})();
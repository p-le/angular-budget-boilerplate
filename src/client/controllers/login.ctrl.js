(function() {
  'use strict';
  angular
    .module('angularPro')
    .controller('LoginController', LoginController);
  
  function LoginController($scope, messageService) {
    angular.extend($scope, {
      username: '',
      password: '',
      currentUser: {},
      userAuthenticatedHandle: null,
      authenticateUserCompletedHandler: authenticateUserCompletedHandler,
    });

    $scope.userAuthenticatedHandle = messageService.subscribe(
      events.message._AUTHENTICATE_USER_COMPLETE_,
      $scope.authenticateUserCompletedHandler
    );
    $scope.onLogin = onLogin;
    $scope.$on('$destroy', cleanup);

    function authenticateUserCompletedHandler(user) {
      $scope.currentUser = user;
    }

    function onLogin() {
      messageService.publish(evens.message._AUTHENTICATE_USER_, [
        $scope.username,
        $scope.password
      ]);
    }

    function cleanup() {
      messageService.unsubscribe($scope.userAuthenticatedHandle);
    }
  }
})();
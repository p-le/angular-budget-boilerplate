(function() {
  'use strict';
  angular.module('angularPro')
    .controller('CommentController', CommentController);
  
  function CommentController($scope) {
    $scope.comments = [
      'a comment'
    ];

    $scope.add = function(comment) {
      $scope.comments.unshift(comment);
    }
  }
})();
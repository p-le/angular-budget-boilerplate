(function() {
  'use strict';
  angular
    .module('angularPro')
    .controller('MainController', MainController);

  function MainController($scope, visionService) {
    $scope.detections = [];
    
    $scope.data = [];

    $scope.selectedTypes = [ 'labels'];

    $scope.types = [
      'labels',
      'crops',
      'document',
      'faces',
      'landmarks',
      'logos',
      'properties',
      'safeSearch',
      'similar',
      'text'
    ];

    $scope.processing = false;
    $scope.image = {};
    $scope.submit = submit;
    $scope.isEnterPressed = isEnterPressed;
    $scope.isChecked = isChecked;
    $scope.toggleType = toggleType;

    $scope.setDetections = function(detections) {
      $scope.detections = detections;
    };


    function isChecked(type) {
      return $scope.selectedTypes.indexOf(type) > -1;
    }

    function toggleType(type) {
      var index = $scope.selectedTypes.indexOf(type);
      if (index > -1) {
        $scope.selectedTypes.splice(index, 1);
      } else {
        $scope.selectedTypes.push(type);
      }
    }

    function isEnterPressed(event) {
      return event.keyCode == 13;
    }

    function submit() {
      if ($scope.processing || angular.isUndefined($scope.image.url) || $scope.selectedTypes.length == 0) {
        return false;
      }

      $scope.processing = true;
      visionService.analyzeImage($scope.image.url, $scope.selectedTypes)
        .then(function(res) {
          $scope.data = visionService.transformResult(res.data, $scope.selectedTypes).concat($scope.data);
        })
        .catch(function(err) {
          console.log(err);
        })
        .finally(function() {
          $scope.processing = false;
          $scope.image = {};
        });
    }
  }
})();
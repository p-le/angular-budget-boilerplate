(function() {
  'use strict';
  angular
    .module('angularPro')
    .controller('MainController', MainController);

  function MainController($scope, visionService) {
    $scope.data = [];
    $scope.types = [
      'labels',
      'crops',
      'document',
      'faces',
      'landmarks',
      'logos',
      'properties',
      'safeSearch',
      'text',
      'similar'
    ];
    $scope.selectedTypes = [
      'labels',
      'crops',
      'document',
      'faces',
      'landmarks',
      'logos',
      'properties',
      'safeSearch',
      'text',
      'similar'
    ];
    $scope.processing = false;
    $scope.image = {};
    $scope.errors = [];
    $scope.submit = submit;
    $scope.isEnterPressed = isEnterPressed;
    $scope.isChecked = isChecked;
    $scope.toggleType = toggleType;

    $scope.setDetections = function(detections) {
      $scope.detections = detections;
    };

    $scope.remove = remove;
    $scope.hasErrors = hasErrors;
    $scope.isException  = isException;
    $scope.getColor = getColor;
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
      $scope.errors = [];

      visionService.analyzeImage($scope.image.url, $scope.selectedTypes)
        .then(function(res) {
          if (angular.isDefined(res.data.result)) {
            $scope.data = visionService.transformResult(res.data, $scope.selectedTypes).concat($scope.data);
            console.log($scope.data);
          } else {
            $scope.errors = res.data.error;
          }
          
        })
        .catch(function(err) {
          console.log(err);
        })
        .finally(function() {
          $scope.processing = false;
        });
    }

    function remove(index) {
      $scope.data.splice(index, 1);
    }

    function hasErrors() {
      return $scope.errors.length > 0;
    }

    function isException(name) {
      return name == 'Web' || name == 'Properties';
    }

    function getColor(color) {
      return {
        "background-color": color,
        "color": "white"
      };
    }
  }
})();
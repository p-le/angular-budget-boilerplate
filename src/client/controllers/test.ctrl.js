(function() {
  'use strict';
  angular
    .module('angularPro')
    .controller('TestController', TestController);

  function TestController($scope, $http, $log, $timeout, $q) {
    $scope.name = "Le Quang Phu";
    $scope.loading = false;
    $scope.car = {};
    $scope.data = [
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		];

    function retrievePhotos () {
      $scope.loading = true;
      $timeout(function() {
        $http.get('http://jsonplaceholder.typicode.com/photos')
          .then(function(res) {
            $scope.loading = false;
            $log.info(res.data);
          })
          .catch(function(err) {
            $log.error(err);
          });
      }, 1000);
    }

    // $scope.$apply(function() {
    //   console.log('aaaa');
    // });
    retrievePhotos();

    console.log($q);
  }
})();
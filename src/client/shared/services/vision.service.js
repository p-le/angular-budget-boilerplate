(function() {
  angular
    .module('angularPro')
    .service('visionService', visionService);

  function visionService($http) {
    this.analyzeImage = analyzeImage;
    this.transformResult = transformResult;

    function analyzeImage(url, types) {

      var data = {
        url: url,
        types: types
      };

      return $http.post('/vision/analyze', data);
    }

    function transformResult(data, types) {
      console.log(data);
      var transformedData = [];
      var responses = data.result[1];

      

      angular.forEach(responses, function(response) {
        var item = {
          url: data.url,
          features: []
        };

        angular.forEach(response, function(result) {
          
          var feature = {
            name: '',
            labels: []
          };
          
          angular.forEach(result, function(val, annotation) {

            if (angular.isArray(val) && val.length > 0) {
              feature.name = annotation.slice(0, annotation.indexOf('Annotation'));

              if (annotation == 'faceAnnotations') {
                angular.forEach(val[0], function (level, emotion) {
                  var index = emotion.indexOf('Likelihood');
                  if ( index > -1) {
                    feature.labels.push({
                      description: emotion.slice(0, index),
                      likelihood: level
                    });
                  }
                });
              } else {
                var labels = val;
                // Loop labels of feature
                angular.forEach(labels, function(label) {
                  feature.labels.push({
                    description: label.description,
                    score: label.score
                  });
                });
              }
              
              

              

              item.features.push(feature);
            }
          });

        });

        transformedData.push(item);
      });

      return transformedData;
    }
  }
})();
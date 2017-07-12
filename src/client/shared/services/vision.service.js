(function() {
  angular
    .module('angularPro')
    .service('visionService', visionService);

  function visionService($http, $filter) {
    this.analyzeImageFile = analyzeImageFile;
    this.analyzeImage = analyzeImage;
    this.transformResult = transformResult;
    
    function analyzeImageFile(file, types) {
      var formData = new FormData();
      formData.append('file', file);
      formData.append('types', types);

      return $http.post('/vision/analyzeFile', formData, {
        headers: { 'Content-Type': undefined }
      });
    }

    function analyzeImage(url, types) {

      var data = {
        url: url,
        types: types
      };

      return $http.post('/vision/analyze', data);
    }

    function transformResponse(res) {

      var feature = {
        name: '',
        labels: []
      };

      angular.forEach(res, function(result, annotation) {
        var hasResult = false;

        if (angular.isArray(result) && result.length > 0) {
          hasResult = true;
        }  else if (angular.isObject(result) && angular.isUndefined(result.length)) {
          hasResult =  true;
        }

        if (hasResult) {
          
          console.log(result, annotation);
          switch(annotation) {
            case 'cropHintsAnnotation':
              if (feature.name !== 'Properties') {
                feature.name = 'Crop';
                var cropHints = result.cropHints;

                angular.forEach(cropHints, function(crop) {
                  var vertices = crop.boundingPoly.vertices;
                  var vertice = '';  

                  angular.forEach(vertices, function(v) {
                    vertice += 'x:' + v.x + ' - ' + 'y:' + v.y + '   ';
                  });

                  feature.labels.push(vertice);
                });
              }
              break;
            case 'faceAnnotations':
              feature.name = 'Face';
              angular.forEach(result[0], function(likelihood, f) {
                if (f.indexOf('Likelihood') > -1) {
                  feature.labels.push(f.slice(0, f.indexOf('Likelihood')) + ' - ' + likelihood);
                }
              });
              break;
            case 'fullTextAnnotation':
              feature.name = 'Full Text';
              feature.labels.push(result.text);

              break;
            case 'imagePropertiesAnnotation':
              feature.name = 'Properties';
              var colors = result.dominantColors.colors;
              angular.forEach(colors, function(c) {
                var label = {
                  color: 'rgb(' + c.color.red + ', ' + c.color.green + ', ' + c.color.blue + ')',
                  score: $filter('number')(c.score, 2)
                };
                feature.labels.push(label);
              });
              break;
            case 'labelAnnotations':
              feature.name = 'label';
              angular.forEach(result, function(label) {
                feature.labels.push(label.description + ' - ' + $filter('number')(label.score, 2));
              });
              break;
            case 'landmarkAnnotations':
              feature.name = 'landmark';
              angular.forEach(result, function (landmark) {
                var lm = landmark.description + ' - ' + $filter('number')(landmark.score, 2);
                var pos = '';
                if (landmark.locations.length > 0) {
                  pos = ' lat: ' + landmark.locations[0].latLng.latitude + ' - long: ' + landmark.locations[0].latLng.longitude;
                }
                feature.labels.push(lm + pos);
              });
              break;
            case 'logoAnnotations':
              feature.name = 'logo';
              feature.labels.push(result[0].description + ' - ' + $filter('number')(result[0].score, 2));
              break;
            case 'safeSearchAnnotation':
              feature.name = 'safesearch';

              angular.forEach(result, function(likelihood, adult) {
                feature.labels.push(adult + ' - ' + likelihood)
              });

              break;
            case 'textAnnotations':
              if(!angular.isObject(res.fullTextAnnotation)) {
                feature.name = 'text';
              }
              break;
            case 'webDetection':
              feature.name = 'Web';
              var webEntities = result.webEntities;
              var pageMatches = result.pagesWithMatchingImages;

              angular.forEach(webEntities, function(entity) {
                feature.labels.push(entity.description + ' - ' + $filter('number')(entity.score, 2));
              });

              angular.forEach(pageMatches, function(p) {
                feature.labels.push(p.url);
              });
              break;
          }
        }

      });

      return feature;
    }

    function transformResult(data, types) {

      var transformedData = [];
      var responses = data.result[1].responses;

      var item = {
        url: data.url,
        features: []
      };

      angular.forEach(responses, function(res) {
        var feature = transformResponse(res);
        if (feature.name !== '') {
          item.features.push(feature);
        }
      });
      
      transformedData.push(item);
      console.log(transformedData);
      return transformedData;
    }
  }
})();
(function() {
  angular
    .module('angularPro')
    .directive('pleDrop', pleDrop);

  function pleDrop(visionService) {

    var directive = {
      restrict: 'A',
      link: linkFn
    };

    function linkFn(scope, element) {

      element.on('dragover', dragoverHandler);
      element.on('drop', dropHandler);
      element.on('click', clickHandler);
      element.on('$destroy', cleanup);

      function dragoverHandler(event) {
        event.preventDefault();
        return false;
      }

      function dropHandler(event) {
        event.preventDefault();
        var image = angular.element(event.dataTransfer.getData('text/html'));
        image.addClass('preview');

        var imageUrl = image.attr('src');
        element.append(image);

        visionService.analyzeImage(imageUrl)
          .then(function(req) {
            var responses = req.data[1].responses;
            console.log(responses);
            scope.setDetections(responses[0].labelAnnotations);
          })
          .catch(function(error) {
            console.log(error);
          });
          
        return false;
      }

      function clickHandler(event) {
        event.preventDefault();
        console.log(event);
      }

      function cleanup() {
        element.off('drop', dropHandler);
        element.off('click', clickHandler);
      }
    }

    return directive;
  }
})();
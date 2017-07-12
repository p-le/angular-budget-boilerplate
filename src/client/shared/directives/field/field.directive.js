(function() {
  'use strict';
  angular
    .module('angularPro')
    .directive('field', field);
  
  function field($interpolate, $http, $templateCache, $compile) {
    var directive = {
      restrict: 'E',
      priority: 100,
      terminal: true,
      compile: compileFn
    };

    function compileFn(element, attrs) {
      var validateMsgs = getValidationMessageMap(element);
      var labelContent = getLabelContent(element);

      element.html('');

      return function postLink(scope, element, attrs) {
        var template = attrs.template || 'templates/input.html';
        
        loadTemplate(template)
          .then(function(templateElement) {

            var childScope = scope.$new();
            var inputElement = templateElement.find('input');
            var labelElement = templateElement.find('label');

            /* --- Scope 定義 --- */
            childScope.$validationMessages = angular.copy(validateMsgs);
            childScope.$fieldId = attrs.ngModel.replace('.', '_').toLowerCase() +  '_' + childScope.$id;
            childScope.$fieldLabel = labelContent;

            console.log(childScope);
            angular.forEach(attrs.$attr, function(original, normalized) {
              var value = element.attr(original);
              inputElement.attr(original, value);
            });

            inputElement.attr('name', childScope.$fieldId);
            inputElement.attr('id', childScope.$fieldId);
            labelElement.attr('for', childScope.$fieldId);
            labelElement.html(labelContent);

            element.append(templateElement);
            $compile(templateElement)(childScope);

            childScope.$field = inputElement.controller('ngModel');

            childScope.$watch('$field.dirty && $field.$error', function(errorList) {
              childScope.$fieldErrors = [];
              angular.forEach(errorList, function(invalid, key) {
                if (invalid) {
                  childScope.$fieldErrors.push(key);
                }
              });
            }, true);

          });
      };
    }

    function getValidationMessageMap(element) {
      var messageFns = {};
      var validators = element.find('validator');

      angular.forEach(validators, function(validator) {
        validator = angular.element(validator);
        messageFns[validator.attr('key')] = $interpolate(validator.text());
      });

      return messageFns;
    }

    function loadTemplate(template) {
      return $http.get(template, { cache: $templateCache })
        .then(function(response) {
          return angular.element(response.data);
        })
        .catch(function(err) {
          throw new Error(JSON.stringify(err));
        });
    }

    function getLabelContent(element) {
      var label = element.find('label');
      return label[0] && label.html();
    }

    return directive;
  }

})();
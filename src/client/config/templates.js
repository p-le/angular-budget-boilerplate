angular.module('angularPro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/accordion.html',
    "<div class=\"accordion-group\">\r" +
    "\n" +
    "  <div class=\"accordion-heading\" >\r" +
    "\n" +
    "    <a class=\"accordion-toggle\" ng-click=\"isOpen=!isOpen\">{{heading}}</a>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"accordion-body\" ng-show=\"isOpen\">\r" +
    "\n" +
    "    <div class=\"accordion-inner\" ng-transclude></div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/input.html',
    "<div class=\"control-group\">\r" +
    "\n" +
    "  <label></label>\r" +
    "\n" +
    "  <div class=\"controls\">\r" +
    "\n" +
    "    <input />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <span ng-repeat=\"error in $fieldErrors\">{{ error }}</span>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/pagination.html',
    "<div class=\"pagination\">\r" +
    "\n" +
    "  <li ng-class=\"{disabled: noPrevious()}\">\r" +
    "\n" +
    "    <a ng-click\"selectPrevious()\">Previous</a>\r" +
    "\n" +
    "  </li>\r" +
    "\n" +
    "  <li ng-repeat=\"page in pages\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page)\">{{ page }}</a>\r" +
    "\n" +
    "  </li>\r" +
    "\n" +
    "  <li ng-class=\"{ disabled: noNext() }\">\r" +
    "\n" +
    "    <a ng-click=\"selectNext()\">Next</a>\r" +
    "\n" +
    "  </li>\r" +
    "\n" +
    "</div>"
  );

}]);

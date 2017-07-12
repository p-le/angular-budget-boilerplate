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
    "<div class=\"control-group\">\n" +
    "  <label></label>\n" +
    "  <div class=\"controls\">\n" +
    "    <input />\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('templates/pagination.html',
    "<div class=\"pagination\">\n" +
    "  <li ng-class=\"{disabled: noPrevious()}\">\n" +
    "    <a ng-click\"selectPrevious()\">Previous</a>\n" +
    "  </li>\n" +
    "  <li ng-repeat=\"page in pages\">\n" +
    "    <a ng-click=\"selectPage(page)\">{{ page }}</a>\n" +
    "  </li>\n" +
    "  <li ng-class=\"{ disabled: noNext() }\">\n" +
    "    <a ng-click=\"selectNext()\">Next</a>\n" +
    "  </li>\n" +
    "</div>"
  );

}]);

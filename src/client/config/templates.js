angular.module('angularPro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/components.html',
    "<fieldset>\n" +
    "  <legend>Button Directives</legend>\n" +
    "  <p-button text=\"Default\"></p-button>\n" +
    "  <p-button modifier=\"primary\" text=\"Primary\"></p-button>\n" +
    "  <p-button modifier=\"info\" text=\"Info\"></p-button>\n" +
    "  <p-button modifier=\"danger\" text=\"Danger\"></p-button>\n" +
    "  <p-button modifier=\"success\" text=\"Success\"></p-button>\n" +
    "  <p-button modifier=\"warning\" text=\"Warning\"></p-button>\n" +
    "  <p-button ng-disabled=\"true\" text=\"Disabled\"></p-button>\n" +
    "</fieldset>"
  );


  $templateCache.put('templates/demo.html',
    "<div>\n" +
    "  Demo\n" +
    "</div>"
  );


  $templateCache.put('templates/sidenav.html',
    "<aside ng-class=\"navClass\" ng-transclude></aside>"
  );


  $templateCache.put('templates/topnav.html',
    "<div>\n" +
    "  <header>AngularJS</header>\n" +
    "  <nav>\n" +
    "    <a href=\"#!demo\">Demo</a>\n" +
    "    <a href=\"#!home\">Components</a>\n" +
    "  </nav>\n" +
    "</div>"
  );

}]);

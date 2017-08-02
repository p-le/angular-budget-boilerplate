angular.module('angularPro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/navigation/sidenav/sidenav.html',
    "<aside ng-class=\"navClass\" ng-transclude></aside>"
  );


  $templateCache.put('directives/navigation/topnav/topnav.html',
    "<div>\n" +
    "  <header>AngularJS</header>\n" +
    "  <nav>\n" +
    "    <a href=\"#!demo\">Demo</a>\n" +
    "    <a href=\"#!home\">Components</a>\n" +
    "  </nav>\n" +
    "</div>"
  );


  $templateCache.put('directives/radio-group/radio-group.html',
    ""
  );


  $templateCache.put('directives/radio/radio.html',
    ""
  );


  $templateCache.put('templates/components.html',
    "<fieldset>\n" +
    "  <legend>Button</legend>\n" +
    "  <p-button text=\"Default\"></p-button>\n" +
    "  <p-button modifier=\"primary\" text=\"Primary\"></p-button>\n" +
    "  <p-button modifier=\"info\" text=\"Info\"></p-button>\n" +
    "  <p-button modifier=\"danger\" text=\"Danger\"></p-button>\n" +
    "  <p-button modifier=\"success\" text=\"Success\"></p-button>\n" +
    "  <p-button modifier=\"warning\" text=\"Warning\"></p-button>\n" +
    "  <p-button ng-disabled=\"true\" text=\"Disabled\"></p-button>\n" +
    "</fieldset>\n" +
    "<fieldset>\n" +
    "  <legend>Input</legend>\n" +
    "  <p-input></p-input>\n" +
    "</fieldset>\n" +
    "<fieldset>\n" +
    "  <legend>Checkbox</legend>\n" +
    "</fieldset>\n" +
    "<fieldset>\n" +
    "  <legend>Multi-Checkbox</legend>\n" +
    "</fieldset>\n" +
    "<fieldset>\n" +
    "  <legend>Radio</legend>\n" +
    "</fieldset>"
  );


  $templateCache.put('templates/demo.html',
    "<form novalidate name=\"edit-form\">\n" +
    "\n" +
    "</form>"
  );

}]);

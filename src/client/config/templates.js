angular.module('angularPro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/news.html',
    "<div>\n" +
    "  <p>{{ ctrl.news }}</p>\n" +
    "</div>"
  );


  $templateCache.put('templates/sidenav.html',
    "<aside>\n" +
    "  <ul>\n" +
    "    <li><a href=\"#/!\">Home</a></li>\n" +
    "    <li><a href=\"#!red\">Home</a></li>\n" +
    "    <li><a href=\"#!green\">Home</a></li>\n" +
    "    <li><a href=\"#!blue\">Home</a></li>\n" +
    "  </ul>\n" +
    "</aside>"
  );


  $templateCache.put('templates/topnav.html',
    "<div>\n" +
    "  <header>AngularJS</header>\n" +
    "  <nav>\n" +
    "    <a href=\"#!home\">Home</a>\n" +
    "    <a href=\"#!news\">News</a>\n" +
    "    <a href=\"#!contact\">Contact</a>\n" +
    "    <a href=\"#!about\">About</a>\n" +
    "  </nav>\n" +
    "</div>"
  );

}]);

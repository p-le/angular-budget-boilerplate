angular.module('angularPro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/about.html',
    "<div>\n" +
    "  About\n" +
    "</div>"
  );


  $templateCache.put('templates/dashboard.html',
    "<div class=\"ui pointing menu\">\n" +
    "    <a class=\"active item\">\n" +
    "    Home\n" +
    "    </a>\n" +
    "    <a class=\"item\">\n" +
    "    Messages\n" +
    "    </a>\n" +
    "    <a class=\"item\">\n" +
    "    Friends\n" +
    "    </a>\n" +
    "    <div class=\"right menu\">\n" +
    "    <div class=\"item\">\n" +
    "        <div class=\"ui transparent icon input\">\n" +
    "        <input type=\"text\" placeholder=\"Search...\">\n" +
    "        <i class=\"search link icon\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"ui container\">\n" +
    "    <p-watchlist-panel></p-watchlist-panel>\n" +
    "</div>"
  );


  $templateCache.put('templates/main.html',
    "<div>\n" +
    "  Main\n" +
    "</div>"
  );


  $templateCache.put('templates/watchlist-panel.html',
    "<div class=\"ui raised  segment\">\n" +
    "    <h4 class=\"ui header\">Watchlists</h4>\n" +
    "    <button class=\"ui icon yellow button\" ng-click=\"showModal()\">\n" +
    "        <i class=\"remove circle outline icon\"></i>\n" +
    "    </button>\n" +
    "    <div>\n" +
    "        <div ng-if=\"!watchlists.length\" class=\"text-center\">\n" +
    "            Use <i class=\"plus icon\"></i> to create a list\n" +
    "        </div>\n" +
    "        <div class=\"ui list\">\n" +
    "            <a class=\"item\" ng-repeat=\"list in watchlists track by $index\" ng-click=\"viewList(list.id)\">\n" +
    "                {{list.name}}\n" +
    "                <button type=\"button\" class=\"ui icon button\" ng-click=\"deleteList(list)\"><i class=\"remove icon\"></i></button>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('templates/watchlist.html',
    "<div>\n" +
    "    Hello World\n" +
    "</div>"
  );

}]);

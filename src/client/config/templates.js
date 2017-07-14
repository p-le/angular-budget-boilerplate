angular.module('angularPro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/about.html',
    "<div>\n" +
    "  About\n" +
    "</div>"
  );


  $templateCache.put('templates/addlist-modal.html',
    "<div class=\"ui modal\">\n" +
    "    <i class=\"close icon\"></i>\n" +
    "    <div class=\"header\">\n" +
    "        <h4>Create New Watchlist</h4>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <form name=\"listForm\" class=\"ui form\">\n" +
    "            <div class=\"field\">\n" +
    "                <label for=\"list-name\">Name</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"list-name\" placeholder=\"Name this watchlist\" ng-model=\"watchlist.name\" required>\n" +
    "            </div>\n" +
    "            <div class=\"field\">\n" +
    "                <label for=\"list-description\">Brief Description</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"list-description\" maxlength=\"40\" placeholder=\"Describe this watchlist\" ng-model=\"watchlist.description\" required>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\" class=\"ui button\" ng-click=\"createList()\" ng-disabled=\"!listForm.$valid\">Create</button> \n" +
    "                <button type=\"button\" class=\"ui button\" ng-click=\"$hide()\">Cancel</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
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
    "        <div class=\"list-group\">\n" +
    "            <a class=\"list-group-item\" ng-repeat=\"list in watchlists track by $index\">\n" +
    "                {{list.name}}\n" +
    "                <button type=\"button\" class=\"ui icon button\" ng-click=\"deleteList(list)\"><i class=\"plus icon\"></i></button>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);

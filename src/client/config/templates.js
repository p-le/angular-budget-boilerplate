angular.module('angularPro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/navigation/sidenav/sidenav.html',
    "<aside ng-class=\"navClass\" ng-transclude></aside>"
  );


  $templateCache.put('directives/navigation/topnav/topnav.html',
    "<div>\r" +
    "\n" +
    "  <header>AngularJS</header>\r" +
    "\n" +
    "  <nav>\r" +
    "\n" +
    "    <a href=\"#!demo\">Demo</a>\r" +
    "\n" +
    "    <a href=\"#!home\">Components</a>\r" +
    "\n" +
    "  </nav>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('directives/radio-group/radio-group.html',
    ""
  );


  $templateCache.put('directives/radio/radio.html',
    "<div>\r" +
    "\n" +
    "  <label></label>\r" +
    "\n" +
    "  <input type=\"radio\" />\r" +
    "\n" +
    "  <span></span>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/components.html',
    "<fieldset>\r" +
    "\n" +
    "  <legend>Button</legend>\r" +
    "\n" +
    "  <p-button text=\"Default\"></p-button>\r" +
    "\n" +
    "  <p-button modifier=\"primary\" text=\"Primary\"></p-button>\r" +
    "\n" +
    "  <p-button modifier=\"info\" text=\"Info\"></p-button>\r" +
    "\n" +
    "  <p-button modifier=\"danger\" text=\"Danger\"></p-button>\r" +
    "\n" +
    "  <p-button modifier=\"success\" text=\"Success\"></p-button>\r" +
    "\n" +
    "  <p-button modifier=\"warning\" text=\"Warning\"></p-button>\r" +
    "\n" +
    "  <p-button ng-disabled=\"true\" text=\"Disabled\"></p-button>\r" +
    "\n" +
    "</fieldset>\r" +
    "\n" +
    "<fieldset>\r" +
    "\n" +
    "  <legend>Input</legend>\r" +
    "\n" +
    "  <p-input></p-input>\r" +
    "\n" +
    "</fieldset>\r" +
    "\n" +
    "<fieldset>\r" +
    "\n" +
    "  <legend>Checkbox</legend>\r" +
    "\n" +
    "</fieldset>\r" +
    "\n" +
    "<fieldset>\r" +
    "\n" +
    "  <legend>Multi-Checkbox</legend>\r" +
    "\n" +
    "</fieldset>\r" +
    "\n" +
    "<fieldset>\r" +
    "\n" +
    "  <legend>Radio</legend>\r" +
    "\n" +
    "</fieldset>"
  );


  $templateCache.put('templates/demo.html',
    "<div class=\"form\">\r" +
    "\n" +
    "    <form novalidate name=\"edit-form\" ng-submit=\"submit()\">\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for\"test\">Test</label>\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-model=\"ad.test\" id=\"test\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"name\">Name: </label>\r" +
    "\n" +
    "            <input type=\"text\" ng-model=\"ad.name\" id=\"name\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"advertiserId\">Advertiser</label>\r" +
    "\n" +
    "            <select \r" +
    "\n" +
    "                ng-model=\"selectedAdvertiser\" \r" +
    "\n" +
    "                required \r" +
    "\n" +
    "                name=\"advertiserId\" \r" +
    "\n" +
    "                id=\"advertiserId\"\r" +
    "\n" +
    "                ng-options=\"advertiser.name for advertiser in advertisers track by advertiser.id\"\r" +
    "\n" +
    "            >\r" +
    "\n" +
    "                <option value=\"\">Select Advertiser</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div ng-if=\"ad.advertiserId\">\r" +
    "\n" +
    "            <label for=\"campaignId\"><C></C>ampaign</label>\r" +
    "\n" +
    "            <select\r" +
    "\n" +
    "                ng-model=\"$parent.selectedCampaign\"\r" +
    "\n" +
    "                name=\"campaignId\"\r" +
    "\n" +
    "                id=\"campaignId\"\r" +
    "\n" +
    "                ng-options=\"campaign.name for campaign in campaigns track by campaign.id\"\r" +
    "\n" +
    "            >\r" +
    "\n" +
    "                <option value=\"\">Select Campaign</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"adCategory\">Ad Category</label>\r" +
    "\n" +
    "            <select\r" +
    "\n" +
    "                ng-model=\"selectedAdCategory\"\r" +
    "\n" +
    "                name=\"adCategory\"\r" +
    "\n" +
    "                id=\"adCategory\"\r" +
    "\n" +
    "                ng-options=\"adCategory.name for adCategory in adCategories track by adCategory.id\"\r" +
    "\n" +
    "            >\r" +
    "\n" +
    "                <option value=\"\">Select Ad Category</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label>OS</label>\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-change=\"onChange()\">\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-change=\"onChange()\">\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-change=\"onChange()\">\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-change=\"onChange()\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <hr />\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label>Click Expire</label>\r" +
    "\n" +
    "            <select ng-model=\"ad.clickTimeUnit\" ng-options=\"clickTimeUnit for clickTimeUnit in clickTimeUnits\">\r" +
    "\n" +
    "                <option value=\"\">----</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "            <input type=\"number\" ng-if=\"ad.clickTimeUnit\" ng-model=\"ad.clickExpire\" name=\"clickExpire\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label>SessionID Duplicate Check</label>\r" +
    "\n" +
    "            <input type=\"radio\" ng-model=\"ad.isNeedCheckCvDuplicationXuid\" ng-value=\"true\" /> Yes\r" +
    "\n" +
    "            <input type=\"radio\" ng-model=\"ad.isNeedCheckCvDuplicationXuid\" ng-value=\"false\" /> No <br/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <hr />\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label name=\"announceCount\">Announce Count</label>\r" +
    "\n" +
    "            <input type=\"number\" ng-model=\"ad.announceCount\" name=\"announceCount\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label name=\"announceCount\">Announce Days</label>\r" +
    "\n" +
    "            <input type=\"number\" ng-model=\"ad.announceDays\" name=\"announceDays\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"adminNote\">Admin note</label>\r" +
    "\n" +
    "            <textarea ng-model=\"ad.adminNote\" ng-attr-placeholder=\"Admin Note\"></textarea>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <hr />\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"creativeType\">Creative Type</label>\r" +
    "\n" +
    "            <select ng-model=\"ad.creativeType\" name=\"creativeType\" id=\"creativeType\" ng-options=\"creativeType for creativeType in creativeTypes\" required>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"maxCreativeNum\">Max Creative Num</label>\r" +
    "\n" +
    "            <select\r" +
    "\n" +
    "                ng-model=\"ad.maxCreativeNum\"\r" +
    "\n" +
    "                name=\"maxCreativeNum\"\r" +
    "\n" +
    "                id=\"maxCreativeNum\"\r" +
    "\n" +
    "                ng-options=\"maxCreativeNum for maxCreativeNum in [] | range:20\"\r" +
    "\n" +
    "            >\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <button>Submit</button>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <pre>\r" +
    "\n" +
    "        {{ ad | json }}\r" +
    "\n" +
    "    </pre>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);

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
    "<div>\n" +
    "  <label></label>\n" +
    "  <input type=\"radio\" />\n" +
    "  <span></span>\n" +
    "</div>"
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
    "<div class=\"wrapper\">\r" +
    "\n" +
    "    <div class=\"form\">\r" +
    "\n" +
    "        <form novalidate name=\"edit-form\" ng-submit=\"submit()\">\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for\"test\">テスト</label>\r" +
    "\n" +
    "                <input type=\"checkbox\" ng-model=\"ad.test\" id=\"test\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"name\">名前: </label>\r" +
    "\n" +
    "                <input type=\"text\" ng-model=\"ad.name\" id=\"name\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"advertiserId\">広告主</label>\r" +
    "\n" +
    "                <select \r" +
    "\n" +
    "                    ng-model=\"selectedAdvertiser\" \r" +
    "\n" +
    "                    required \r" +
    "\n" +
    "                    name=\"advertiserId\" \r" +
    "\n" +
    "                    id=\"advertiserId\"\r" +
    "\n" +
    "                    ng-options=\"advertiser.name for advertiser in advertisers track by advertiser.id\"\r" +
    "\n" +
    "                >\r" +
    "\n" +
    "                    <option value=\"\">選択</option>\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.advertiserId\">\r" +
    "\n" +
    "                <label for=\"campaignId\">キャンペーン</label>\r" +
    "\n" +
    "                <select\r" +
    "\n" +
    "                    ng-model=\"$parent.selectedCampaign\"\r" +
    "\n" +
    "                    name=\"campaignId\"\r" +
    "\n" +
    "                    id=\"campaignId\"\r" +
    "\n" +
    "                    ng-options=\"campaign.name for campaign in campaigns | filter: { advertiserId: selectedAdvertiser.id } track by campaign.id \"\r" +
    "\n" +
    "                >\r" +
    "\n" +
    "                    <option value=\"\">選択</option>\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"adCategory\">広告カテゴリー</label>\r" +
    "\n" +
    "                <select\r" +
    "\n" +
    "                    ng-model=\"selectedAdCategory\"\r" +
    "\n" +
    "                    name=\"adCategory\"\r" +
    "\n" +
    "                    id=\"adCategory\"\r" +
    "\n" +
    "                    ng-options=\"adCategory.name for adCategory in adCategories track by adCategory.id\"\r" +
    "\n" +
    "                >\r" +
    "\n" +
    "                    <option value=\"\">選択</option>\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"startedAt\">開始日時</label>\r" +
    "\n" +
    "                <input type=\"datetime-local\" ng-model=\"ad.startedAt\" name=\"startedAt\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"endedAt\">終了日時</label>\r" +
    "\n" +
    "                <input type=\"datetime-local\" ng-model=\"ad.endedAt\" name=\"endedAt\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>OS: </label>\r" +
    "\n" +
    "                <label><input type=\"checkbox\" ng-click=\"toggleOsAll()\" ng-checked=\"os.length == ad.os.length\" />All</label>\r" +
    "\n" +
    "                <label ng-repeat=\"item in os\">\r" +
    "\n" +
    "                    <input\r" +
    "\n" +
    "                        type=\"checkbox\"\r" +
    "\n" +
    "                        name=\"os[]\"\r" +
    "\n" +
    "                        value=\"{{item.id}}\"\r" +
    "\n" +
    "                        ng-checked=\"ad.os.indexOf(item.id) > -1\"\r" +
    "\n" +
    "                        ng-click=\"toggleOsSelection(item)\"\r" +
    "\n" +
    "                    > {{ item.name }}\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for\"optionApp\">アプリ広告</label>\r" +
    "\n" +
    "                <input type=\"checkbox\" ng-model=\"ad.optionApp\" name=\"optionApp\" id=\"optionApp\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr />\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"payper\">報酬タイプ</label>\r" +
    "\n" +
    "                <select ng-model=\"ad.payper\" name=\"payper\" id=\"payper\" ng-options=\"payper for payper in payper\" required></select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>キックバック通知</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.hasIncentiveAllowance\" ng-value=\"true\" /> 有</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.hasIncentiveAllowance\" ng-value=\"false\" /> 無</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"cvCondition\">成果発祥条件</label>\r" +
    "\n" +
    "                <input type=\"text\" ng-model=\"ad.cvCondition\" name=\"cvCondition\" id=\"cvCondition\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>定額・定率（成果）</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.priceFixed\" value=\"fixed_amount\" /> 定額</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.priceFixed\" value=\"fixed_rate\" /> 定率</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label name=\"grossUnitPrice\">グロス単価</label>\r" +
    "\n" +
    "                <input type=\"number\" ng-model=\"ad.grossUnitPrice\" name=\"grossUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\" required>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label name=\"netUnitPrice\">ネット単価</label>\r" +
    "\n" +
    "                <input type=\"number\" ng-model=\"ad.netUnitPrice\" name=\"netUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\" required>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.payper == 'cv_reward'\">\r" +
    "\n" +
    "                <label for=\"isCvpointFree\">成果地点無料・有料</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvpointFree\" ng-value=\"1\" /> 無料</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvpointFree\" ng-value=\"0\" /> 有料</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.payper == 'cv_reward'\">\r" +
    "\n" +
    "                <label for=\"isCvAutoApproval\">成果承認</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvAutoApproval\" ng-value=\"1\" /> 自動承認</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvAutoApproval\" ng-value=\"0\" /> 手動承認</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.payper == 'cv_reward'\">\r" +
    "\n" +
    "                <label for=\"cvApproveDays\">成果承認期間日数</label>\r" +
    "\n" +
    "                <input type=\"number\" ng-model=\"ad.cvApproveDays\" name=\"cvApproveDays\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <hr />\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>サイトカテゴリー: </label>\r" +
    "\n" +
    "                <label><input type=\"checkbox\" ng-click=\"toggleMediaCategoryAll()\" ng-checked=\"mediaCategory.length == ad.mediaCategory.length\" />All</label>\r" +
    "\n" +
    "                <label ng-repeat=\"item in mediaCategory\">\r" +
    "\n" +
    "                    <input\r" +
    "\n" +
    "                        type=\"checkbox\"\r" +
    "\n" +
    "                        name=\"os[]\"\r" +
    "\n" +
    "                        value=\"{{item.id}}\"\r" +
    "\n" +
    "                        ng-checked=\"ad.mediaCategory.indexOf(item.id) > -1\"\r" +
    "\n" +
    "                        ng-click=\"toggleMediaCategorySelection(item)\"\r" +
    "\n" +
    "                    > {{ item.name }}\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"note\">参考</label>\r" +
    "\n" +
    "                <textarea ng-model=\"ad.note\" name=\"note\" id=\"note\"></textarea>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>メディア提携審査必要</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isMediumApproveNeed\" ng-value=\"1\" /> 必要</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isMediumApproveNeed\" ng-value=\"0\" /> 不要</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>原稿文言変更許可</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isImageTextChangeable\" ng-value=\"1\" /> 可能</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isImageTextChangeable\" ng-value=\"0\" /> 不可</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr />\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>click有効期限</label>\r" +
    "\n" +
    "                <select ng-model=\"ad.clickTimeUnit\" ng-options=\"clickTimeUnit for clickTimeUnit in clickTimeUnits\">\r" +
    "\n" +
    "                    <option value=\"\">----</option>\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "                <input type=\"number\" ng-if=\"ad.clickTimeUnit\" ng-model=\"ad.clickExpire\" name=\"clickExpire\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\r" +
    "\n" +
    "                <small>※クリックから成果までの期間を指定します</small>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>セッションID重複チェック必要</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isNeedCheckCvDuplicationXuid\" ng-value=\"true\" /> 必要</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isNeedCheckCvDuplicationXuid\" ng-value=\"false\" /> 不要</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>成果重複click時チェック</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.cvDuplicationClickCheck\" value=\"need\" /> 必要</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.cvDuplicationClickCheck\" value=\"needless\" /> 不要</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.cvDuplicationClickCheck == 'need'\">\r" +
    "\n" +
    "                <label for=\"cvDuplicationErrorUrl\">成果重複click時URL</label>\r" +
    "\n" +
    "                <input type=\"text\" ng-model=\"ad.cvDuplicationErrorUrl\" name=\"cvDuplicationErrorUrl\" id=\"cvDuplicationErrorUrl\"/>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label>配信上限</label>\r" +
    "\n" +
    "                <select ng-model=\"ad.deliveryMaxType\" name=\"deliveryMaxType\" id=\"deliveryMaxType\" ng-options=\"deliveryMaxType for deliveryMaxType in deliveryMaxTypes\" required></select>\r" +
    "\n" +
    "                <label><input type=\"number\" ng-model=\"ad.maxCount\" name=\"maxCount\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\"/ /> 回</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <hr />\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label name=\"announceCount\">Announce Count</label>\r" +
    "\n" +
    "                <input type=\"number\" ng-model=\"ad.announceCount\" name=\"announceCount\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label name=\"announceCount\">Announce Days</label>\r" +
    "\n" +
    "                <input type=\"number\" ng-model=\"ad.announceDays\" name=\"announceDays\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"adminNote\">運営者備考</label>\r" +
    "\n" +
    "                <textarea ng-model=\"ad.adminNote\" ng-attr-placeholder=\"Admin Note\"></textarea>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr />\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"creativeType\">原稿タイプ</label>\r" +
    "\n" +
    "                <select ng-model=\"ad.creativeType\" name=\"creativeType\" id=\"creativeType\" ng-options=\"creativeType for creativeType in creativeTypes\" required>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <label for=\"maxCreativeNum\">原稿数(上限)</label>\r" +
    "\n" +
    "                <select\r" +
    "\n" +
    "                    ng-model=\"ad.maxCreativeNum\"\r" +
    "\n" +
    "                    name=\"maxCreativeNum\"\r" +
    "\n" +
    "                    id=\"maxCreativeNum\"\r" +
    "\n" +
    "                    ng-options=\"maxCreativeNum for maxCreativeNum in [] | range:20\"\r" +
    "\n" +
    "                >\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <button>登録</button>\r" +
    "\n" +
    "            <button>キャンセル</button>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"json\">\r" +
    "\n" +
    "         <pre>{{ ad | json: 4 }}</pre>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);

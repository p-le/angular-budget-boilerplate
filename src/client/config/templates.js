angular.module('angularPro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('controllers/ad/ad-create.html',
    "<a href=\"#!demo/ads\">戻る</a>\n" +
    "<div class=\"wrapper\">\n" +
    "    <div class=\"form\">\n" +
    "        <form novalidate name=\"edit-form\" ng-submit=\"submit()\">\n" +
    "            <div>\n" +
    "                <label for\"test\">テスト</label>\n" +
    "                <input type=\"checkbox\" ng-model=\"ad.test\" id=\"test\"/>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"name\">名前: </label>\n" +
    "                <input type=\"text\" ng-model=\"ad.name\" id=\"name\"/>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"advertiserId\">広告主</label>\n" +
    "                <select \n" +
    "                    ng-model=\"selectedAdvertiser\" \n" +
    "                    required \n" +
    "                    name=\"advertiserId\" \n" +
    "                    id=\"advertiserId\"\n" +
    "                    ng-options=\"advertiser.name for advertiser in advertisers track by advertiser.id\"\n" +
    "                >\n" +
    "                    <option value=\"\">選択</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.advertiserId\">\n" +
    "                <label for=\"campaignId\">キャンペーン</label>\n" +
    "                <select\n" +
    "                    ng-model=\"$parent.selectedCampaign\"\n" +
    "                    name=\"campaignId\"\n" +
    "                    id=\"campaignId\"\n" +
    "                    ng-options=\"campaign.name for campaign in campaigns | filter: { advertiser_id: selectedAdvertiser.id } track by campaign.id \"\n" +
    "                >\n" +
    "                    <option value=\"\">選択</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"adCategory\">広告カテゴリー</label>\n" +
    "                <select\n" +
    "                    ng-model=\"selectedAdCategory\"\n" +
    "                    name=\"adCategory\"\n" +
    "                    id=\"adCategory\"\n" +
    "                    ng-options=\"adCategory.name for adCategory in adCategories track by adCategory.id\"\n" +
    "                >\n" +
    "                    <option value=\"\">選択</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"startedAt\">開始日時</label>\n" +
    "                <input type=\"datetime-local\" ng-model=\"ad.startedAt\" name=\"startedAt\" />\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"endedAt\">終了日時</label>\n" +
    "                <input type=\"datetime-local\" ng-model=\"ad.endedAt\" name=\"endedAt\" />\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label>OS: </label>\n" +
    "                <label><input type=\"checkbox\" ng-click=\"toggleOsAll()\" ng-checked=\"os.length == ad.os.length\" />全選択</label>\n" +
    "                <label ng-repeat=\"item in os\">\n" +
    "                    <input\n" +
    "                        type=\"checkbox\"\n" +
    "                        name=\"os[]\"\n" +
    "                        value=\"{{item.id}}\"\n" +
    "                        ng-checked=\"ad.os.indexOf(item.id) > -1\"\n" +
    "                        ng-click=\"toggleOsSelection(item)\"\n" +
    "                    > {{ item.name }}\n" +
    "                </label>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for\"optionApp\">アプリ広告</label>\n" +
    "                <input type=\"checkbox\" ng-model=\"ad.optionApp\" name=\"optionApp\" id=\"optionApp\"/>\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.optionApp == true\">\n" +
    "                <label for=\"cvAppId\">アプリ</label>\n" +
    "                <select\n" +
    "                    ng-model=\"ad.cvAppId\"\n" +
    "                    name=\"cvAppId\"\n" +
    "                    id=\"cvAppId\"\n" +
    "                    ng-options=\"app.name for app in apps track by app.id\"\n" +
    "                >\n" +
    "                    <option value=\"\">選択</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <hr />\n" +
    "            <div>\n" +
    "                <label for=\"payper\">報酬タイプ</label>\n" +
    "                <select ng-model=\"ad.payper\" name=\"payper\" id=\"payper\" ng-options=\"payper for payper in payper\" required></select>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label>キックバック通知</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.hasIncentiveAllowance\" ng-value=\"true\" /> 有</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.hasIncentiveAllowance\" ng-value=\"false\" /> 無</label>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"cvCondition\">成果発祥条件</label>\n" +
    "                <input type=\"text\" ng-model=\"ad.cvCondition\" name=\"cvCondition\" id=\"cvCondition\"/>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label>定額・定率（成果）</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.priceFixed\" value=\"fixed_amount\" /> 定額</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.priceFixed\" value=\"fixed_rate\" /> 定率</label>\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\n" +
    "                <label name=\"grossUnitPrice\">[cv]グロス単価</label>\n" +
    "                <input type=\"number\" ng-model=\"ad.grossUnitPrice\" name=\"grossUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\" required>\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\n" +
    "                <label name=\"netUnitPrice\">[cv]ネット単価</label>\n" +
    "                <input type=\"number\" ng-model=\"ad.netUnitPrice\" name=\"netUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\" required>\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.payper === 'click_reward' || ad.payper == 'click+cv_reward'\">\n" +
    "                <label name=\"clickGrossUnitPrice\">[click]グロス単価</label>\n" +
    "                <input type=\"number\" ng-model=\"ad.clickGrossUnitPrice\" name=\"clickGrossUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.payper === 'click_reward' || ad.payper == 'click+cv_reward'\">\n" +
    "                <label name=\"clickNetUnitPrice\">[click]ネット単価</label>\n" +
    "                <input type=\"number\" ng-model=\"ad.clickNetUnitPrice\" name=\"clickNetUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\">\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\n" +
    "                <label for=\"isCvpointFree\">成果地点無料・有料</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvpointFree\" ng-value=\"1\" /> 無料</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvpointFree\" ng-value=\"0\" /> 有料</label>\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\n" +
    "                <label for=\"isCvAutoApproval\">成果承認</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvAutoApproval\" ng-value=\"1\" /> 自動承認</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvAutoApproval\" ng-value=\"0\" /> 手動承認</label>\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\n" +
    "                <label for=\"cvApproveDays\">成果承認期間日数</label>\n" +
    "                <input type=\"number\" ng-model=\"ad.cvApproveDays\" name=\"cvApproveDays\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" />\n" +
    "            </div>\n" +
    "\n" +
    "            <hr />\n" +
    "            \n" +
    "            <div>\n" +
    "                <label>サイトカテゴリー: </label>\n" +
    "                <label><input type=\"checkbox\" ng-click=\"toggleMediaCategoryAll()\" ng-checked=\"mediaCategories.length == ad.mediaCategory.length\" />All</label>\n" +
    "                <label ng-repeat=\"item in mediaCategories\">\n" +
    "                    <input\n" +
    "                        type=\"checkbox\"\n" +
    "                        name=\"mediaCategory[]\"\n" +
    "                        value=\"{{item.id}}\"\n" +
    "                        ng-checked=\"ad.mediaCategory.indexOf(item.id) > -1\"\n" +
    "                        ng-click=\"toggleMediaCategorySelection(item)\"\n" +
    "                    > {{ item.name }}\n" +
    "                </label>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"note\">参考</label>\n" +
    "                <textarea ng-model=\"ad.note\" name=\"note\" id=\"note\"></textarea>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <label>メディア提携審査必要</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isMediumApproveNeed\" ng-value=\"1\" /> 必要</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isMediumApproveNeed\" ng-value=\"0\" /> 不要</label>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label>原稿文言変更許可</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isImageTextChangeable\" ng-value=\"1\" /> 可能</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isImageTextChangeable\" ng-value=\"0\" /> 不可</label>\n" +
    "            </div>\n" +
    "            <hr />\n" +
    "            <div>\n" +
    "                <label>click有効期限</label>\n" +
    "                <select ng-model=\"ad.clickTimeUnit\" ng-options=\"clickTimeUnit for clickTimeUnit in clickTimeUnits\">\n" +
    "                    <option value=\"\">----</option>\n" +
    "                </select>\n" +
    "                <input type=\"number\" ng-if=\"ad.clickTimeUnit\" ng-model=\"ad.clickExpire\" name=\"clickExpire\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\n" +
    "                <small>※クリックから成果までの期間を指定します</small>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label>セッションID重複チェック必要</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isNeedCheckCvDuplicationXuid\" ng-value=\"true\" /> 必要</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isNeedCheckCvDuplicationXuid\" ng-value=\"false\" /> 不要</label>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label>成果重複click時チェック</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.cvDuplicationClickCheck\" value=\"need\" /> 必要</label>\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.cvDuplicationClickCheck\" value=\"needless\" /> 不要</label>\n" +
    "            </div>\n" +
    "            <div ng-if=\"ad.cvDuplicationClickCheck == 'need'\">\n" +
    "                <label for=\"cvDuplicationErrorUrl\">成果重複click時URL</label>\n" +
    "                <input type=\"text\" ng-model=\"ad.cvDuplicationErrorUrl\" name=\"cvDuplicationErrorUrl\" id=\"cvDuplicationErrorUrl\"/>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <label>配信上限</label>\n" +
    "                <select ng-model=\"ad.deliveryMaxType\" name=\"deliveryMaxType\" id=\"deliveryMaxType\" ng-options=\"deliveryMaxType for deliveryMaxType in deliveryMaxTypes\" required></select>\n" +
    "                <label><input type=\"number\" ng-model=\"ad.maxCount\" name=\"maxCount\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\"/ /> 回</label>\n" +
    "            </div>\n" +
    "\n" +
    "            <hr />\n" +
    "            <div>\n" +
    "                <label name=\"announceCount\">Announce Count</label>\n" +
    "                <input type=\"number\" ng-model=\"ad.announceCount\" name=\"announceCount\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label name=\"announceCount\">Announce Days</label>\n" +
    "                <input type=\"number\" ng-model=\"ad.announceDays\" name=\"announceDays\" min=\"0\" max=\"9999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"adminNote\">運営者備考</label>\n" +
    "                <textarea ng-model=\"ad.adminNote\" ng-attr-placeholder=\"Admin Note\"></textarea>\n" +
    "            </div>\n" +
    "            <hr />\n" +
    "            <div>\n" +
    "                <label for=\"creativeType\">原稿タイプ</label>\n" +
    "                <select ng-model=\"ad.creativeType\" name=\"creativeType\" id=\"creativeType\" ng-options=\"creativeType for creativeType in creativeTypes\" required>\n" +
    "\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <label for=\"maxCreativeNum\">原稿数(上限)</label>\n" +
    "                <select\n" +
    "                    ng-model=\"ad.maxCreativeNum\"\n" +
    "                    name=\"maxCreativeNum\"\n" +
    "                    id=\"maxCreativeNum\"\n" +
    "                    ng-options=\"maxCreativeNum for maxCreativeNum in [] | range:20\"\n" +
    "                >\n" +
    "\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <button type=\"submit\">登録</button>\n" +
    "            <a href=\"#!demo/ads\">キャンセル</a>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"json\">\n" +
    "         <pre>{{ ad | json: 4 }}</pre>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('controllers/ad/ad-list.html',
    "<div>\n" +
    "    <a href=\"#!demo/ads/create\">新規登録</a>\n" +
    "    <button>削除</button>\n" +
    "    <button>インポート</button>\n" +
    "    <button>エクスポート</button>\n" +
    "</div>\n" +
    "<div ng-if=\"!ads\">\n" +
    "  <p-loader size=\"sm\"></p-loader>\n" +
    "</div>\n" +
    "\n" +
    "<table ng-if=\"ads.length > 0\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>ID</th>\n" +
    "            <th>広告名</th>\n" +
    "            <th>広告主名</th>\n" +
    "            <th>広告枠カテゴリー</th>\n" +
    "            <th>[click]グロス単価</th>\n" +
    "            <th>[click]ネット単価</th>\n" +
    "            <th>[cv]グロス単価</th>\n" +
    "            <th>[cv]ネット単価</th>\n" +
    "            <th>成果発生条件</th>\n" +
    "            <th>インセンティブ許可</th>\n" +
    "            <th>成果承認</th>\n" +
    "            <th>メディア提携審査</th>\n" +
    "            <th>開始日時</th>\n" +
    "            <th>終了日時</th>\n" +
    "            <th>承認状態</th>\n" +
    "            <th>配信状態</th>\n" +
    "            <th>運営者備考</th>\n" +
    "            <th>テスト</th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr ng-repeat=\"ad in ::ads\">\n" +
    "            <td>{{ ad.id }}</td>\n" +
    "            <td>{{ ad.name }}</td>\n" +
    "            <td>{{ ad.advertiser.name }}</td>\n" +
    "            <td>{{ ad.ad_category.name }}</td>\n" +
    "            <td>{{ ad.click_net_unit_price }}</td>\n" +
    "            <td>{{ ad.click_gross_unit_price }}</td>\n" +
    "            <td>{{ ad.net_unit_price }}</td>\n" +
    "            <td>{{ ad.gross_unit_price }}</td>\n" +
    "            <td>{{ ad.cv_condition }}</td>\n" +
    "            <td>{{ ad.has_incentive_allowance }}</td>\n" +
    "            <td>{{ ad.is_cv_auto_approval }}</td>\n" +
    "            <td>{{ ad.is_medium_approve_need }}</td>\n" +
    "            <td>{{ ad.started_at }}</td>\n" +
    "            <td>{{ ad.ended_at }}</td>\n" +
    "            <td>{{ ad.approval_status }}</td>\n" +
    "            <td>{{ ad.deliver_status }}</td>\n" +
    "            <td>{{ ad.admin_note }}</td>\n" +
    "            <td>{{ ad.is_testing }}</td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>"
  );


  $templateCache.put('directives/checkbox/multi-checkbox.html',
    "<div>\n" +
    "  <label>Test Checkbox</label>\n" +
    "  <input type=\"checkbox\" />\n" +
    "</div>"
  );


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
    "  <input type=\"checkbox\" ng-model=\"test\" />\n" +
    "  <p-multi-checkbox ng-model=\"test\" has-select-all=\"true\"></p-multi-checkbox>\n" +
    "  <pre>{{ test | json }}</pre>\n" +
    "</fieldset>\n" +
    "<fieldset>\n" +
    "  <legend>Multi-Checkbox</legend>\n" +
    "</fieldset>\n" +
    "<fieldset>\n" +
    "  <legend>Radio</legend>\n" +
    "</fieldset>"
  );


  $templateCache.put('templates/demo.html',
    ""
  );

}]);

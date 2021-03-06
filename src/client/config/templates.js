angular.module('angularPro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('controllers/ad/ad-create.html',
    "<a href=\"#!demo/ads\">戻る</a>\r" +
    "\n" +
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
    "                    ng-options=\"campaign.name for campaign in campaigns | filter: { advertiser_id: selectedAdvertiser.id } track by campaign.id \"\r" +
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
    "                <label><input type=\"checkbox\" ng-click=\"toggleOsAll()\" ng-checked=\"os.length == ad.os.length\" />全選択</label>\r" +
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
    "            <div ng-if=\"ad.optionApp == true\">\r" +
    "\n" +
    "                <label for=\"cvAppId\">アプリ</label>\r" +
    "\n" +
    "                <select\r" +
    "\n" +
    "                    ng-model=\"ad.cvAppId\"\r" +
    "\n" +
    "                    name=\"cvAppId\"\r" +
    "\n" +
    "                    id=\"cvAppId\"\r" +
    "\n" +
    "                    ng-options=\"app.name for app in apps track by app.id\"\r" +
    "\n" +
    "                >\r" +
    "\n" +
    "                    <option value=\"\">選択</option>\r" +
    "\n" +
    "                </select>\r" +
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
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\r" +
    "\n" +
    "                <label name=\"grossUnitPrice\">[cv]グロス単価</label>\r" +
    "\n" +
    "                <input type=\"number\" ng-model=\"ad.grossUnitPrice\" name=\"grossUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\" required>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\r" +
    "\n" +
    "                <label name=\"netUnitPrice\">[cv]ネット単価</label>\r" +
    "\n" +
    "                <input type=\"number\" ng-model=\"ad.netUnitPrice\" name=\"netUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\" required>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.payper === 'click_reward' || ad.payper == 'click+cv_reward'\">\r" +
    "\n" +
    "                <label name=\"clickGrossUnitPrice\">[click]グロス単価</label>\r" +
    "\n" +
    "                <input type=\"number\" ng-model=\"ad.clickGrossUnitPrice\" name=\"clickGrossUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\" >\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.payper === 'click_reward' || ad.payper == 'click+cv_reward'\">\r" +
    "\n" +
    "                <label name=\"clickNetUnitPrice\">[click]ネット単価</label>\r" +
    "\n" +
    "                <input type=\"number\" ng-model=\"ad.clickNetUnitPrice\" name=\"clickNetUnitPrice\" min=\"0\" max=\"99999999\" pattern=\"^[0-9]+$\"/ step=\"1\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\r" +
    "\n" +
    "                <label for=\"isCvpointFree\">成果地点無料・有料</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvpointFree\" ng-value=\"1\" /> 無料</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvpointFree\" ng-value=\"0\" /> 有料</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\r" +
    "\n" +
    "                <label for=\"isCvAutoApproval\">成果承認</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvAutoApproval\" ng-value=\"1\" /> 自動承認</label>\r" +
    "\n" +
    "                <label><input type=\"radio\" ng-model=\"ad.isCvAutoApproval\" ng-value=\"0\" /> 手動承認</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"ad.payper === 'cv_reward' || ad.payper == 'click+cv_reward'\">\r" +
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
    "                <label><input type=\"checkbox\" ng-click=\"toggleMediaCategoryAll()\" ng-checked=\"mediaCategories.length == ad.mediaCategory.length\" />All</label>\r" +
    "\n" +
    "                <label ng-repeat=\"item in mediaCategories\">\r" +
    "\n" +
    "                    <input\r" +
    "\n" +
    "                        type=\"checkbox\"\r" +
    "\n" +
    "                        name=\"mediaCategory[]\"\r" +
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
    "            <button type=\"submit\">登録</button>\r" +
    "\n" +
    "            <a href=\"#!demo/ads\">キャンセル</a>\r" +
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


  $templateCache.put('controllers/ad/ad-list.html',
    "<div>\r" +
    "\n" +
    "    <a href=\"#!demo/ads/create\">新規登録</a>\r" +
    "\n" +
    "    <button>削除</button>\r" +
    "\n" +
    "    <button>インポート</button>\r" +
    "\n" +
    "    <button>エクスポート</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-if=\"!ads\">\r" +
    "\n" +
    "  <p-loader size=\"sm\"></p-loader>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<table ng-if=\"ads.length > 0\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th>ID</th>\r" +
    "\n" +
    "            <th>広告名</th>\r" +
    "\n" +
    "            <th>広告主名</th>\r" +
    "\n" +
    "            <th>広告枠カテゴリー</th>\r" +
    "\n" +
    "            <th>[click]グロス単価</th>\r" +
    "\n" +
    "            <th>[click]ネット単価</th>\r" +
    "\n" +
    "            <th>[cv]グロス単価</th>\r" +
    "\n" +
    "            <th>[cv]ネット単価</th>\r" +
    "\n" +
    "            <th>成果発生条件</th>\r" +
    "\n" +
    "            <th>インセンティブ許可</th>\r" +
    "\n" +
    "            <th>成果承認</th>\r" +
    "\n" +
    "            <th>メディア提携審査</th>\r" +
    "\n" +
    "            <th>開始日時</th>\r" +
    "\n" +
    "            <th>終了日時</th>\r" +
    "\n" +
    "            <th>承認状態</th>\r" +
    "\n" +
    "            <th>配信状態</th>\r" +
    "\n" +
    "            <th>運営者備考</th>\r" +
    "\n" +
    "            <th>テスト</th>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "        <tr ng-repeat=\"ad in ::ads\">\r" +
    "\n" +
    "            <td>{{ ad.id }}</td>\r" +
    "\n" +
    "            <td>{{ ad.name }}</td>\r" +
    "\n" +
    "            <td>{{ ad.advertiser.name }}</td>\r" +
    "\n" +
    "            <td>{{ ad.ad_category.name }}</td>\r" +
    "\n" +
    "            <td>{{ ad.click_net_unit_price }}</td>\r" +
    "\n" +
    "            <td>{{ ad.click_gross_unit_price }}</td>\r" +
    "\n" +
    "            <td>{{ ad.net_unit_price }}</td>\r" +
    "\n" +
    "            <td>{{ ad.gross_unit_price }}</td>\r" +
    "\n" +
    "            <td>{{ ad.cv_condition }}</td>\r" +
    "\n" +
    "            <td>{{ ad.has_incentive_allowance }}</td>\r" +
    "\n" +
    "            <td>{{ ad.is_cv_auto_approval }}</td>\r" +
    "\n" +
    "            <td>{{ ad.is_medium_approve_need }}</td>\r" +
    "\n" +
    "            <td>{{ ad.started_at }}</td>\r" +
    "\n" +
    "            <td>{{ ad.ended_at }}</td>\r" +
    "\n" +
    "            <td>{{ ad.approval_status }}</td>\r" +
    "\n" +
    "            <td>{{ ad.deliver_status }}</td>\r" +
    "\n" +
    "            <td>{{ ad.admin_note }}</td>\r" +
    "\n" +
    "            <td>{{ ad.is_testing }}</td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "</table>"
  );


  $templateCache.put('directives/checkbox/multi-checkbox.html',
    "<div>\r" +
    "\n" +
    "  <label>Test Checkbox</label>\r" +
    "\n" +
    "  <input type=\"checkbox\" />\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('directives/navigation/sidenav/sidenav-item.html',
    "<div class=\"sidenav-item\" ng-class=\"status\">\n" +
    "    <header class=\"sidenav-item-header\">\n" +
    "        <a>{{ ::title }} <i class=\"material-icons\">{{ icon }}</i></a>\n" +
    "    </header>\n" +
    "    <ul class=\"sidenav-item-menu\" ng-if=\"isOpen\">\n" +
    "        <li ng-repeat=\"m in ::menu\"><a ng-href=\"{{m.url}}\">{{ m.title }}</a></li>\n" +
    "    </ul>\n" +
    "</div>"
  );


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
    "  <input type=\"checkbox\" ng-model=\"test\" />\r" +
    "\n" +
    "  <p-multi-checkbox ng-model=\"test\" has-select-all=\"true\"></p-multi-checkbox>\r" +
    "\n" +
    "  <pre>{{ test | json }}</pre>\r" +
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
    ""
  );

}]);

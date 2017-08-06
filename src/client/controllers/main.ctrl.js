(function() {
  'use strict';
  angular.module('angularPro')
    .controller('MainCtrl', MainCtrl);
  
  function MainCtrl($scope) {
    var baseUrl = '#!demo';
    $scope.sideMenus = [
      {
        title: 'ホーム',
        menu: []
      },
      {
        title: 'レポート',
        menu: [
          { title: 'メディアオーナーレポート', url: baseUrl + '/media-owner/report' },
          { title: 'メディアレポート', url: baseUrl + '/media/report' }
        ]
      },
      {
        title: '広告管理',
        menu: [
          { title: 'アフィリエイト広告一覧', url: baseUrl + '/ads' },
          { title: '広告選択', url: baseUrl + '/ad-select' },
          '成果一覧',
          'イベントカレンダー',
          'メディア承認',
          'キャンペーン一覧',
          '特集記事一覧',
          'メディア一覧',
          '広告枠一覧',
          'キックバック一覧'
        ]
      },
      {
        title: 'アカウント管理',
        menu: [
          'ユーザー一覧',
          '管理者一覧',
          '広告主一覧',
          'メディアオーナー一覧',
          '請求',
          '支払い',
          '支払い履歴'
        ]
      },
      {
        title: '個人設定',
        menu: [
          '個人設定',
          'パースワード変更'
        ]
      },
      {
        title: 'ログ管理',
        menu: [
          '配信ログ',
          'アクセスログ',
          'エラーログ',
          'バッチログ',
          '管理者操作ログ'
        ]
      },
      {
        title: '通知管理',
        menu: [
          'ブロードキャスト一覧',
          'メッセージ一覧',
          'お問い合わせ一覧'
        ]
      },
      {
        title: 'システム管理',
        menu: [
          'メディアカテゴリー',
          '広告カテゴリー',
          'スライド環境一覧',
          '報酬ランキング一覧',
          '環境変数一覧',
          'FAQs',
          'OS一覧',
          'プラットフォーム一覧',
          '原稿テンプレート一覧'
        ]
      }
    ] 
  }
})();
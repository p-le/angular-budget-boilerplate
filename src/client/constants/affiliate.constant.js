(function() {
  'use strict';
  angular.module('angularPro')
    .constant('AdmageAffiliate', {
      deliveryMaxTypes: [ 'imp', 'click', 'cv' ],
      payper: [ 'click_reward', 'cv_reward', 'click+cv_reward' ]
    });
})();
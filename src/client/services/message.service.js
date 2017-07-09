(function() {
  'use strict';
  angular
    .module('angularPro')
    .factory('messageService', messageService);
  

  /**
   * Pub/Sub Message Service
   * 
   * @returns 
   */
  function message() {
    var cache = {};
    
    var service = {
      publish: publish,
      subscribe: subscribe,
      unsubscribe: unsubscribe
    };

    /**
     * 
     * 
     * @param {any} topic 
     * @param {any} args 
     */
    function publish(topic, args) {
      if (cache[topic]) {
        angular.forEach(cache[topic], function (callback) {
          callback.apply(null, args || []);
        });
      }
    }

    /**
     * 
     * 
     * @param {any} topic 
     * @param {any} callback 
     * @returns 
     */
    function subscribe(topic, callback) {
      if (!cache[topic]) {
        cache[topic] = [];
      }
      cache[topic].push(callback);

      return [topic, callback];
    }

    /**
     * 
     * 
     * @param {any} handle 
     */
    function unsubscribe(handle) {
      var topic = handle[0];
      var callback = handle[1];

      if (cache[topic]) {
        for(var x = 0; x < cache[topic].length; x++) {
          if (cache[topic][x] === callback) {
            cache[topic].splice(x, 1);
          }
        }
      }
    }

    return service;
  }
})();
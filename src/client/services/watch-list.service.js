(function() {
  'use strict';
  angular
    .module('angularPro')
    .service('WatchlistService', WatchlistService);
  
  function WatchlistService() {
    var Model = loadModel();
    
    this.query = query;
    this.save = save;
    this.remove = remove;

    /* メソッド定義 */
    function loadModel () {
      var model = {
        watchlists: localStorage.getItem('StockDog.watchlists') ? JSON.parse(localStorage.getItem('StockDog.watchlists')) : [],
        nextId: localStorage.getItem('StockDog.nextId') ? parseInt(localStorage.getItem('StockDog.nextId')) : 0
      };

      return model;
    }

    function saveModel() {
      localStorage.setItem('StockDog.watchlists', JSON.stringify(Model.watchlists));
      localStorage.setItem('StockDog.nextId',  Model.nextId);
    }

    function findById(listId) {
      return _.find(Model.watchlists, function(watchlist) {
        return watchlist.id === listId;
      });
    }

    function query(listId) {
      if (listId) {
        return findById(listId);
      } else {
        return Model.watchlists;
      }
    }

    function save(watchlist) {
      watchlist.id = Model.nextId++;
      Model.watchlists.push(watchlist);
      saveModel();
    }

    function remove(list) {
      _.remove(Model.watchlists, function(watchlist) {
        return watchlist.id === list.id;
      });
      saveModel();
    }

  }
})();
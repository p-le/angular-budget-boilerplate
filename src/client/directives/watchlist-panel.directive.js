(function() {
  'use strict';
  angular
    .module('angularPro')
    .directive('pWatchlistPanel', pWatchlistPanel);

    function pWatchlistPanel(ModalService, WatchlistService, $state, $stateParams) {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/watchlist-panel.html',
            link: linkFn
        }

        function linkFn(scope) {
            scope.watchlist = {};
            scope.watchlists = WatchlistService.query();
            scope.showModal = showModal;
            scope.createList = createList;
            scope.deleteList = deleteList;
            scope.viewList = viewList;

            function viewList(listId) {
                $state.go('Watchlist', {
                    listId: listId
                });
            }

            function showModal() {
                ModalService.show({
                    templateUrl: 'templates/modals/addlist.html',
                    scope: scope
                }).then(function(modal) {
                    console.log(modal);
                })
                .catch(function(err) {
                    console.log(err);
                });
            }

            function createList() {
                WatchlistService.save(scope.watchlist);
                // Hide Modal
                scope.watchlist = {};
            }

            function deleteList(list) {
                WatchlistService.remove(list);
                $state.go('/');
            }
        }

        return directive;
    }
})();
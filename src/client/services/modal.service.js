(function() {
    'use strict';
    angular
        .module('angularPro')
        .service('ModalService', ModalService);

    function ModalService($document, $compile, $controller, $http, $rootScope, $q, $templateRequest, $timeout) {
        var self = this;

        self.close = close;
        self.show = show;

        function getTemplate(templateUrl) {
            var deferred = $q.defer();
            $templateRequest(templateUrl, true)
                .then(function(template) {
                    deferred.resolve(template);
                })
                .catch(function(err) {
                    deferred.reject(err);
                });
            
            return deferred.promise;
        }

        function close() {

        }

        function show(options) {
            var deferred = $q.defer();
            var body = angular.element($document[0].body);

            getTemplate(options.templateUrl)
                .then(function(tpl) {
                    var closeDeferred = $q.defer();
                    var closedDeferred = $q.defer();

                    var modal = {};
                    var modalScope = options.scope ? options.scope.$new() : $rootScope.$new();
                    var modalElement = $compile(tpl)(modalScope);

                    body.append(modalElement);

                    modal.scope = modalScope;
                    modal.element = modalElement;
                    modal.close = closeDeferred;
                    modal.closed = closedDeferred;

                    deferred.resolve(modal);

                    function cleanUp() {
                        closeDeferred.resolve();
                    }
                })
                .catch(function(err) {
                    deferred.reject(err);
                });
            
                return deferred.promise;
        }
    }
})();
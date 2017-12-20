(function () {
    'use strict';

    Angular.module('client.services').factory('messageService', MessageServiceFactory)

    MessageServiceFactory.$inject = ['$http', '$q']

    function MessageServiceFactory($http, $q) {
        return {
            readAll: _readAll,
            create: _create
        }

        function _readAll() {
            return $http.get('/api/messages')
                .then(xhrSuccess)
                .catch(onError)
        }

        function _create(messageData) {
            return $http.post('/api/messages', messageData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function xhrSuccess(response) {
            return response.data
        }

        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }
})()
(function () {
    'use strict';
    angular.module('client.site')
        .controller('wallController', WallController)

    WallController.$inject=['messageService', '$log']

    function WallController(messageService, $log) {
        var vm = this
        vm.message = "lol"

        init()

        function init() {

        }
    }
})();
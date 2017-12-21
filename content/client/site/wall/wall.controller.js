(function () {
    'use strict';
    angular.module('client.site')
        .controller('wallController', WallController)

    WallController.$inject = ['messageService', '$log']

    function WallController(messageService, $log) {

        let vm = this

        vm.formData = null
        vm.messageArray = null

        vm.submit = _submit

        init()

        function init() {
            vm.formData = {}
            vm.messageArray = []
            messageService.readAll().then(response => {
                $log.log(response);
                for (var item of response){
                    if (item.guestBook){
                        vm.messageArray.push(item)
                    }

                }
            })
        }

        function _submit() {
            if (vm.formData.name && vm.formData.content) {
                vm.formData.guestBook = true
                vm.messageArray.push(vm.formData)
                messageService.create(vm.formData).then(response => { 
                    $log.log(response);
                })
            } else { $log.log('chill.') }
            vm.formData = {} 
        }
    }
})();
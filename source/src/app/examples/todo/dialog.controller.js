(function() {
    'use strict';

    angular
        .module('app.examples.todo')
        .controller('DialogController', DialogController);

    /* @ngInject */
    function DialogController($state, $mdDialog) {
        var vm = this;
        vm.cancel = cancel;
        vm.hide = hide;
        vm.item = {
            description: '',
            priority: '',
            selected: false
        };

        /////////////////////////

        function hide() {
            $mdDialog.hide(vm.item);
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .controller('DialogsController', DialogsController);

    /* @ngInject */
    function DialogsController($mdDialog) {
        var vm = this;
        vm.createDialog = createDialog;
        vm.newDialog = {
            title: 'Are you sure?',
            content: 'This will wipe your whole computer!',
            ok: 'Agree',
            cancel: 'Disagree'
        };

        function createDialog($event, dialog) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title(dialog.title)
                .textContent(dialog.content)
                .ok(dialog.ok)
                .cancel(dialog.cancel)
                .targetEvent($event)
            );
        }
    }
})();
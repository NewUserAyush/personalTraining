(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('DateChangeDialogController', DateChangeDialogController);

    /* @ngInject */
    function DateChangeDialogController($mdDialog, range) {
        var vm = this;
        vm.cancelClick = cancelClick;
        vm.okClick = okClick;

        ////////////////

        function okClick() {
            range.start = new moment(vm.start);
            range.end = new moment(vm.end);
            $mdDialog.hide();
        }

        function cancelClick() {
            $mdDialog.cancel();
        }

        // init

        vm.start = range.start.toDate();
        vm.end = range.end.toDate();
    }
})();
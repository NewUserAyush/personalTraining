(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('SalesOrderDialogController', SalesOrderDialogController);

    /* @ngInject */
    function SalesOrderDialogController($window, $mdDialog, order) {
        var vm = this;
        vm.cancelClick = cancelClick;
        vm.okClick = okClick;
        vm.order = order;
        vm.printClick = printClick;


        ////////////////

        function okClick() {
            $mdDialog.hide();
        }

        function cancelClick() {
            $mdDialog.cancel();
        }

        function printClick() {
            $window.print();
        }

    }
})();
(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .controller('ProgressController', ProgressController);

    /* @ngInject */
    function ProgressController($interval) {
        var vm = this;
        vm.determinateValue = 0;
        vm.bufferValue = 0;

        $interval(intervalCall, 100, 0, true);

        ////////////////

        function intervalCall() {
            vm.determinateValue += 1;
            vm.bufferValue += 1.5;
            if(vm.determinateValue > 100) {
                vm.determinateValue = 0;
                vm.bufferValue = 0;
            }
        }
    }
})();
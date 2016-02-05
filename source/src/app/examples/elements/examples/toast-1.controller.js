(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .controller('Toast1Controller', Toast1Controller);

    /* @ngInject */
    function Toast1Controller($mdToast) {
        var vm = this;
        vm.showToast = showToast;

        ////////////////

        function showToast($event, position) {
            var $button = angular.element($event.currentTarget);
            $mdToast.show({
                template: '<md-toast><span flex>I\'m a toast</span></md-toast>',
                position: position,
                hideDelay: 3000,
                parent: $button.parent()
            });
        }
    }
})();
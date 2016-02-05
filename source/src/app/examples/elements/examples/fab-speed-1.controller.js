(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .controller('Fab1Controller', Fab1Controller);

    /* @ngInject */
    function Fab1Controller($scope, $mdToast, $element) {
        var vm = this;
        vm.fabDirections = ['up', 'down', 'left', 'right'];
        vm.fabDirection = vm.fabDirections[0];
        vm.fabAnimations = ['md-fling', 'md-scale'];
        vm.fabAnimation = vm.fabAnimations[0];
        vm.fabStatuses = [false, true];
        vm.fabStatus = vm.fabStatuses[0];
        vm.share = share;

        function share(message) {
            $mdToast.show({
                template: '<md-toast><span flex>' + message + '</span></md-toast>',
                position: 'top right',
                hideDelay: 3000,
                parent: $element
            });
        }
    }
})();
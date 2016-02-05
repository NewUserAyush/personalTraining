(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .directive('contactsWidget', contactsWidget);

    /* @ngInject */
    function contactsWidget() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            requrie: 'triWidget',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope) {
            $scope.contacts = [{
                name: 'Morris Onions',
                image: 'assets/images/avatars/avatar-2.png'
            },{
                name: 'Newton Welch',
                image: 'assets/images/avatars/avatar-5.png'
            },{
                name: 'Kelly Koelpin',
                image: 'assets/images/avatars/avatar-1.png'
            },{
                name: 'Rowland Emard',
                image: 'assets/images/avatars/avatar-2.png'
            },{
                name: 'Kailee Johnston',
                image: 'assets/images/avatars/avatar-3.png'
            },{
                name: 'Roberto Grimes',
                image: 'assets/images/avatars/avatar-4.png'
            }];
        }
    }
})();
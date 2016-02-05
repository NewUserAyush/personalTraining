(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .directive('chatWidget', chatWidget);

    /* @ngInject */
    function chatWidget() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            require: 'triWidget',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope) {
            $scope.conversation = [{
                name: 'Morris Onions',
                image: 'assets/images/avatars/avatar-6.png',
                messages: ['Hi there how are you?', 'Hello?']
            },{
                name: 'Danny Ings',
                image: 'assets/images/avatars/avatar-3.png',
                messages: ['Howsitgowin?']
            },{
                name: 'Morris Onions',
                image: 'assets/images/avatars/avatar-6.png',
                messages: ['We need those images ASAP!', 'Client asked about them.']
            },{
                name: 'Danny Ings',
                image: 'assets/images/avatars/avatar-3.png',
                messages: ['OK, will send them over']
            }];

            $scope.userClass = function($even) {
                return $even ? 'user-left' : 'user-right';
            };
        }
    }
})();

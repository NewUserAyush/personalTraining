(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .directive('todoWidget', todoWidget);

    /* @ngInject */
    function todoWidget() {
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
            $scope.todos = [{
                name: 'Buy Milk',
                done: false
            },{
                name: 'Fix Server',
                done: true
            },{
                name: 'Walk the dog',
                done: false
            },{
                name: 'Upload files',
                done: false
            }];
        }
    }
})();
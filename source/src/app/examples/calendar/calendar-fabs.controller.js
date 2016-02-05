(function() {
    'use strict';

    angular
        .module('app.examples.calendar')
        .controller('CalendarFabController', CalendarFabController);

    /* @ngInject */
    function CalendarFabController($rootScope) {
        var vm = this;
        vm.addEvent = addEvent;

        ////////////////

        function addEvent($event) {
            $rootScope.$broadcast('addEvent', $event);
        }
    }
})();
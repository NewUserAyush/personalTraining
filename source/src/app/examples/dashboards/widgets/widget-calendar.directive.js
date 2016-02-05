(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .directive('calendarWidget', calendarWidget);

    /* @ngInject */
    function calendarWidget() {
        // Usage:
        //
        // <tri-widget calendar-widget></tri-widget>
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'calendarController',
            restrict: 'A'
        };
        return directive;
    }

    /* @ngInject */
    function Controller ($scope, uiCalendarConfig, $rootScope, $translate) {
        var vm = this;
        vm.calendarEvents = [];
        vm.calendarOptions = {
            lang: $translate.use(),
            header: false,
            height: 'auto',
            viewRender: function(view) {
                vm.currentDay = view.calendar.getDate();
            }
        };
        vm.changeMonth = changeMonth;

        var destroyOn = $rootScope.$on('$translateChangeSuccess', switchLanguage);
        $scope.$on('$destroy', destroyListener);

        function changeMonth(direction) {
            uiCalendarConfig.calendars.calendarWidget.fullCalendar(direction);
        }

        function switchLanguage() {
            vm.calendarOptions.lang = $translate.use();
        }

        function destroyListener() {
            destroyOn();
        }
    }
})();
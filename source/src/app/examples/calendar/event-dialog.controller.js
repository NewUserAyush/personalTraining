(function() {
    'use strict';

    angular
        .module('app.examples.calendar')
        .controller('EventDialogController', EventDialogController);

    /* @ngInject */
    function EventDialogController($scope, $mdDialog, $filter, triTheming, dialogData, event, edit) {

        var vm = this;
        vm.cancelClick = cancelClick;
        vm.colors = [];
        vm.colorChanged = colorChanged;
        vm.deleteClick = deleteClick;
        vm.allDayChanged = allDayChanged;
        vm.dialogData = dialogData;
        vm.edit = edit;
        vm.event = event;
        vm.okClick = okClick;
        vm.selectedColor = null;
        // create start and end date of event
        vm.start = event.start.toDate();
        vm.startTime = convertMomentToTime(event.start);

        if(event.end !== null) {
            vm.end = event.end.toDate();
            vm.endTime = convertMomentToTime(event.end);
        }

        ////////////////

        function colorChanged() {
            vm.event.backgroundColor = vm.selectedColor.backgroundColor;
            vm.event.borderColor = vm.selectedColor.backgroundColor;
            vm.event.textColor = vm.selectedColor.textColor;
            vm.event.palette = vm.selectedColor.palette;
        }

        function okClick() {
            vm.event.start = updateEventDateTime(vm.start, vm.startTime);
            if(vm.event.end !== null) {
                vm.event.end = updateEventDateTime(vm.end, vm.endTime);
            }
            $mdDialog.hide(vm.event);
        }

        function cancelClick() {
            $mdDialog.cancel();
        }

        function deleteClick() {
            vm.event.deleteMe = true;
            $mdDialog.hide(vm.event);
        }

        function allDayChanged() {
            // if all day turned on and event already saved we need to create a new date
            if(vm.event.allDay === false && vm.event.end === null) {
                vm.event.end = moment(vm.event.start);
                vm.event.end.endOf('day');
                vm.end = vm.event.end.toDate();
                vm.endTime = convertMomentToTime(vm.event.end);
            }
        }

        function convertMomentToTime(moment) {
            return {
                hour: moment.hour(),
                minute: moment.minute()
            };
        }

        function updateEventDateTime(date, time) {
            var newDate = moment(date);
            newDate.hour(time.hour);
            newDate.minute(time.minute);
            return newDate;
        }

        function createDateSelectOptions() {
            // create options for time select boxes (this will be removed in favor of mdDatetime picker when it becomes available)
            vm.dateSelectOptions = {
                hours: [],
                minutes: []
            };
            // hours
            for(var hour = 0; hour <= 23; hour++) {
                vm.dateSelectOptions.hours.push(hour);
            }
            // minutes
            for(var minute = 0; minute <= 59; minute++) {
                vm.dateSelectOptions.minutes.push(minute);
            }
        }

        // init
        createDateSelectOptions();

        // create colors
        angular.forEach(triTheming.palettes, function(palette, index) {
            var color = {
                name: index.replace(/-/g, ' '),
                palette: index,
                backgroundColor: triTheming.rgba(palette['500'].value),
                textColor: triTheming.rgba(palette['500'].contrast)
            };

            vm.colors.push(color);

            if(index === vm.event.palette) {
                vm.selectedColor = color;
                vm.colorChanged();
            }
        });
    }
})();

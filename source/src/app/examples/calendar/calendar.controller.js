(function() {
    'use strict';

    angular
        .module('app.examples.calendar')
        .controller('CalendarController', CalendarController);

    /* @ngInject */
    function CalendarController($scope, $rootScope, $mdDialog, $mdToast, $filter, $element, triTheming, triLayout, uiCalendarConfig) {
        var vm = this;
        vm.addEvent = addEvent;
        vm.calendarOptions = {
            contentHeight: 'auto',
            selectable: true,
            editable: true,
            header: false,
            viewRender: function(view) {
                // change day
                vm.currentDay = view.calendar.getDate();
                vm.currentView = view.name;
                // update toolbar with new day for month name
                $rootScope.$broadcast('calendar-changeday', vm.currentDay);
                // update background image for month
                triLayout.layout.contentClass = 'calendar-background-image background-overlay-static overlay-gradient-10 calendar-background-month-' + vm.currentDay.month();
            },
            dayClick: function(date, jsEvent, view) { //eslint-disable-line
                vm.currentDay = date;
            },
            eventClick: function(calEvent, jsEvent, view) { //eslint-disable-line
                $mdDialog.show({
                    controller: 'EventDialogController',
                    controllerAs: 'vm',
                    templateUrl: 'app/examples/calendar/event-dialog.tmpl.html',
                    targetEvent: jsEvent,
                    focusOnOpen: false,
                    locals: {
                        dialogData: {
                            title: 'CALENDAR.EDIT-EVENT',
                            confirmButtonText: 'CALENDAR.SAVE'
                        },
                        event: calEvent,
                        edit: true
                    }
                })
                .then(function(event) {
                    var toastMessage = 'CALENDAR.EVENT.EVENT-UPDATED';
                    if(angular.isDefined(event.deleteMe) && event.deleteMe === true) {
                        // remove the event from the calendar
                        uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('removeEvents', event._id);
                        // change toast message
                        toastMessage = 'CALENDAR.EVENT.EVENT-DELETED';
                    }
                    else {
                        // update event
                        uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('updateEvent', event);
                    }

                    // pop a toast
                    $mdToast.show(
                        $mdToast.simple()
                        .content($filter('translate')(toastMessage))
                        .position('bottom right')
                        .hideDelay(2000)
                    );
                });
            }
        };

        vm.viewFormats = {
            'month': 'MMMM YYYY',
            'agendaWeek': 'w',
            'agendaDay': 'Do MMMM YYYY'
        };

        vm.eventSources = [{
            events: []
        }];

        function addEvent(event, $event) {
            var inAnHour = moment(vm.currentDay).add(1, 'h');
            $mdDialog.show({
                controller: 'EventDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/calendar/event-dialog.tmpl.html',
                targetEvent: $event,
                focusOnOpen: false,
                locals: {
                    dialogData: {
                        title: 'CALENDAR.ADD-EVENT',
                        confirmButtonText: 'CALENDAR.ADD'
                    },
                    event: {
                        title: $filter('translate')('CALENDAR.EVENT.NEW-EVENT'),
                        allDay: false,
                        start: vm.currentDay,
                        end: inAnHour,
                        palette: 'cyan',
                        stick: true
                    },
                    edit: false
                }
            })
            .then(function(event) {
                vm.eventSources[0].events.push(event);
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('CALENDAR.EVENT.EVENT-CREATED'))
                    .position('bottom right')
                    .hideDelay(2000)
                );
            });
        }

        function createRandomEvents(number, startDate, endDate) {
            var eventNames = ['Pick up the kids', 'Remember the milk', 'Meeting with Morris', 'Car service',  'Go Surfing', 'Party at Christos house', 'Beer Oclock', 'Festival tickets', 'Laundry!', 'Haircut appointment', 'Walk the dog', 'Dentist :(', 'Board meeting', 'Go fishing'];
            var locationNames = ['London', 'New York', 'Paris', 'Burnley'];
            for(var x = 0; x < number; x++) {
                var randomMonthDate = randomDate(startDate, endDate);
                var inAnHour = moment(randomMonthDate).add(1, 'h');
                var randomEvent = Math.floor(Math.random() * (eventNames.length - 0));
                var randomLocation = Math.floor(Math.random() * (locationNames.length - 0));
                var randomPalette = pickRandomProperty(triTheming.palettes);

                vm.eventSources[0].events.push({
                    title: eventNames[randomEvent],
                    allDay: false,
                    start: randomMonthDate,
                    end: inAnHour,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, fugiat! Libero ut in nam cum architecto error magnam, quidem beatae deleniti, facilis perspiciatis modi unde nostrum ea explicabo a adipisci!',
                    location: locationNames[randomLocation],
                    backgroundColor: triTheming.rgba(triTheming.palettes[randomPalette]['500'].value),
                    borderColor: triTheming.rgba(triTheming.palettes[randomPalette]['500'].value),
                    textColor: triTheming.rgba(triTheming.palettes[randomPalette]['500'].contrast),
                    palette: randomPalette
                });
            }
        }

        // listeners

        $scope.$on('addEvent', addEvent);

        // create 10 random events for the month
        createRandomEvents(100, moment().startOf('year'), moment().endOf('year'));

        function randomDate(start, end) {
            var startNumber = start.toDate().getTime();
            var endNumber = end.toDate().getTime();
            var randomTime = Math.random() * (endNumber - startNumber) + startNumber;
            return moment(randomTime);
        }

        function pickRandomProperty(obj) {
            var result;
            var count = 0;
            for (var prop in obj) {
                if (Math.random() < 1/++count) {
                    result = prop;
                }
            }
            return result;
        }
    }
})();
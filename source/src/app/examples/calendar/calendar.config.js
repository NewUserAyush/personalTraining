(function() {
    'use strict';

    angular
        .module('app.examples.calendar')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/calendar');

        $stateProvider
        .state('triangular.admin-calendar', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/triangular/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                sidebarRight: {
                    templateUrl: 'app/triangular/components/notifications-panel/notifications-panel.tmpl.html',
                    controller: 'NotificationsPanelController',
                    controllerAs: 'vm'
                },
                toolbar: {
                    templateUrl: 'app/examples/calendar/toolbar.tmpl.html',
                    controller: 'CalendarToolbarController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div id="admin-panel-content-view" flex ui-view></div>'
                },
                belowContent: {
                    templateUrl: 'app/examples/calendar/calendar-fabs.tmpl.html',
                    controller: 'CalendarFabController',
                    controllerAs: 'vm'
                }
            }
        })

        .state('triangular.admin-calendar.calendar', {
            // set the url of this page
            url: '/calendar',
            // set the html template to show on this page
            templateUrl: 'app/examples/calendar/calendar.tmpl.html',
            // set the controller to load for this page
            controller: 'CalendarController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            // give the menu a name to show (should be translatable and in the il8n folder json)
            name: 'MENU.CALENDAR.CALENDAR',
            // point this menu to the state we created in the $stateProvider above
            state: 'triangular.admin-calendar.calendar',
            // set the menu type to a link
            type: 'link',
            // set an icon for this menu
            icon: 'zmdi zmdi-calendar-alt',
            // set a proirity for this menu item, menu is sorted by priority
            priority: 2.3
        });
    }
})();
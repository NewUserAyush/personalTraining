(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/dashboards');

        $stateProvider
        .state('triangular.sales-layout', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/triangular/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div id="admin-panel-content-view" flex ui-view></div>'
                },
                belowContent: {
                    template: '<div ui-view="belowContent"></div>'
                }
            }
        })
        .state('triangular.admin-default.dashboard-general', {
            url: '/dashboards/general',
            templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html'
        })
        .state('triangular.admin-default.dashboard-analytics', {
            url: '/dashboards/analytics',
            templateUrl: 'app/examples/dashboards/analytics/dashboard-analytics.tmpl.html',
            controller: 'DashboardAnalyticsController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.dashboard-server', {
            url: '/dashboards/server',
            templateUrl: 'app/examples/dashboards/server/dashboard-server.tmpl.html',
            controller: 'DashboardServerController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.dashboard-widgets', {
            url: '/dashboards/widgets',
            templateUrl: 'app/examples/dashboards/widgets.tmpl.html'
        })
        .state('triangular.admin-default.dashboard-social', {
            url: '/dashboards/social',
            templateUrl: 'app/examples/dashboards/social/dashboard-social.tmpl.html',
            controller: 'DashboardSocialController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.dashboard-sales', {
            url: '/dashboards/sales',
            data: {
                layout: {
                    showToolbar: false
                }
            },
            views: {
                '': {
                    templateUrl: 'app/examples/dashboards/sales/dashboard-sales.tmpl.html',
                    controller: 'DashboardSalesController',
                    controllerAs: 'vm'
                },
                'belowContent': {
                    templateUrl: 'app/examples/dashboards/sales/fab-button.tmpl.html',
                    controller: 'SalesFabController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('triangular.admin-default.dashboard-draggable', {
            url: '/dashboards/draggable-widgets',
            templateUrl: 'app/examples/dashboards/dashboard-draggable.tmpl.html',
            controller: 'DashboardDraggableController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'MENU.DASHBOARDS.DASHBOARDS',
            icon: 'zmdi zmdi-home',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'MENU.DASHBOARDS.ANALYTICS',
                state: 'triangular.admin-default.dashboard-analytics',
                type: 'link'
            },{
                name: 'MENU.DASHBOARDS.GENERAL',
                state: 'triangular.admin-default.dashboard-general',
                type: 'link'
            },{
                name: 'MENU.DASHBOARDS.SALES',
                state: 'triangular.admin-default.dashboard-sales',
                type: 'link'
            },{
                name: 'MENU.DASHBOARDS.SERVER',
                state: 'triangular.admin-default.dashboard-server',
                type: 'link'
            },{
                name: 'MENU.DASHBOARDS.SOCIAL',
                state: 'triangular.admin-default.dashboard-social',
                type: 'link'
            },{
                name: 'MENU.DASHBOARDS.WIDGETS',
                state: 'triangular.admin-default.dashboard-widgets',
                type: 'link'
            },{
                name: 'MENU.DASHBOARDS.DRAGGABLE',
                state: 'triangular.admin-default.dashboard-draggable',
                type: 'link'
            }]
        });

    }
})();
(function() {
    'use strict';

    angular
        .module('app.examples.layouts')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/layouts');

        $stateProvider
        .state('triangular.admin-default.layouts-composer', {
            url: '/layouts/composer',
            templateUrl: 'app/examples/layouts/composer.tmpl.html',
            controller: 'LayoutsComposerController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.layouts-example-full-width', {
            data: {
                layout: {
                    sideMenuSize: 'hidden'
                }
            },
            url: '/layouts/full-width',
            templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html'
        })
        .state('triangular.admin-default.layouts-example-tall-toolbar', {
            data: {
                layout: {
                    toolbarSize: 'md-tall',
                    toolbarClass: 'full-image-background mb-bg-fb-14'
                }
            },
            url: '/layouts/tall-toolbar',
            templateUrl: 'app/examples/dashboards/server/dashboard-server.tmpl.html',
            controller: 'DashboardServerController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.layouts-example-icon-menu', {
            data: {
                layout: {
                    sideMenuSize: 'icon'
                }
            },
            url: '/layouts/icon-menu',
            templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html'
        });
        triMenuProvider.addMenu({
            name: 'MENU.LAYOUTS.TITLE',
            icon: 'zmdi zmdi-view-module',
            type: 'dropdown',
            priority: 2.4,
            children: [{
                name: 'MENU.LAYOUTS.FULL-WIDTH',
                type: 'link',
                state: 'triangular.admin-default.layouts-example-full-width'
            },{
                name: 'MENU.LAYOUTS.ICON-MENU',
                type: 'link',
                state: 'triangular.admin-default.layouts-example-icon-menu'
            },{
                name: 'MENU.LAYOUTS.TALL-TOOLBAR',
                type: 'link',
                state: 'triangular.admin-default.layouts-example-tall-toolbar'
            },{
                name: 'MENU.LAYOUTS.COMPOSER',
                type: 'link',
                state: 'triangular.admin-default.layouts-composer'
            }]
        });
    }
})();
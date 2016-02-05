(function() {
    'use strict';

    angular
        .module('app.examples.menu')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/menu');

        $stateProvider
        .state('triangular.admin-default.menu-levels', {
            url: '/menu-levels/:level',
            controller: 'LevelController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/menu/level.tmpl.html'
        })
        .state('triangular.admin-default.menu-dynamic', {
            url: '/menu/dynamic',
            controller: 'MenuDynamicController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/menu/dynamic.tmpl.html'
        })
        .state('triangular.admin-default.menu-dynamic-dummy-page', {
            url: '/menu/dynamic-page',
            templateUrl: 'app/examples/menu/dynamic-page.tmpl.html'
        });

        triMenuProvider.addMenu({
            name: 'MENU.MENU.MENU',
            icon: 'zmdi zmdi-receipt',
            type: 'dropdown',
            priority: 6.1,
            children: [{
                name: 'MENU.MENU.DYNAMIC',
                type: 'link',
                state: 'triangular.admin-default.menu-dynamic'
            },{
                name: 'MENU.MENU.1-1',
                type: 'dropdown',
                children: [{
                    name: 'MENU.MENU.2-1',
                    type: 'dropdown',
                    children: [{
                        name: 'MENU.MENU.3-1',
                        type: 'dropdown',
                        children: [{
                            name: 'MENU.MENU.4-1',
                            type: 'link',
                            state: 'triangular.admin-default.menu-levels',
                            params: {
                                level: 'Item1-1-1-1'
                            }
                        },{
                            name: 'MENU.MENU.4-2',
                            type: 'link',
                            state: 'triangular.admin-default.menu-levels',
                            params: {
                                level: 'Item1-1-1-2'
                            }
                        },{
                            name: 'MENU.MENU.4-3',
                            type: 'link',
                            state: 'triangular.admin-default.menu-levels',
                            params: {
                                level: 'Item1-1-1-3'
                            }
                        }]
                    }]
                }]
            }]
        });
    }
})();
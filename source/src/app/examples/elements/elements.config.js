(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/elements/');

        $stateProvider
        .state('triangular.admin-default.elements-buttons', {
            url: '/elements/buttons',
            templateUrl: 'app/examples/elements/buttons.tmpl.html',
            controller: 'ButtonsController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.elements-icons', {
            url: '/elements/icons',
            templateUrl: 'app/examples/elements/icons.tmpl.html',
            controller: 'IconsController',
            controllerAs: 'vm',
            resolve: {
                icons: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons'
                    });
                },
                fa: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons-fa'
                    });
                }
            }
        })
        .state('triangular.admin-default.elements-checkboxes', {
            url: '/elements/checkboxes',
            templateUrl: 'app/examples/elements/checkboxes.tmpl.html'
        })
        .state('triangular.admin-default.elements-radios', {
            url: '/elements/radios',
            templateUrl: 'app/examples/elements/radios.tmpl.html'
        })
        .state('triangular.admin-default.elements-toolbars', {
            url: '/elements/toolbars',
            templateUrl: 'app/examples/elements/toolbars.tmpl.html'
        })
        .state('triangular.admin-default.elements-tooltips', {
            url: '/elements/tooltips',
            templateUrl: 'app/examples/elements/tooltips.tmpl.html'
        })
        .state('triangular.admin-default.elements-whiteframes', {
            url: '/elements/whiteframes',
            templateUrl: 'app/examples/elements/whiteframes.tmpl.html'
        })
        .state('triangular.admin-default.elements-sliders', {
            url: '/elements/sliders',
            templateUrl: 'app/examples/elements/sliders.tmpl.html'
        })
        .state('triangular.admin-default.elements-toasts', {
            url: '/elements/toasts',
            templateUrl: 'app/examples/elements/toasts.tmpl.html'
        })
        .state('triangular.admin-default.elements-progress', {
            url: '/elements/progress',
            templateUrl: 'app/examples/elements/progress.tmpl.html',
            controller: 'ProgressController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.elements-switches', {
            url: '/elements/switches',
            templateUrl: 'app/examples/elements/switches.tmpl.html',
            controller: function() {
                this.toggleAll = function(data, value) {
                    for(var x in data) {
                        data[x] = value;
                    }
                };
            },
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.elements-dialogs', {
            url: '/elements/dialogs',
            templateUrl: 'app/examples/elements/dialogs.tmpl.html',
            controller: 'DialogsController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.menus', {
            url: '/elements/menus',
            templateUrl: 'app/examples/elements/menus.tmpl.html'
        })
        .state('triangular.admin-default.elements-tabs', {
            url: '/elements/tabs',
            templateUrl: 'app/examples/elements/tabs.tmpl.html'
        })
        .state('triangular.admin-default.elements-sidebars', {
            url: '/elements/sidebars',
            templateUrl: 'app/examples/elements/sidebars.tmpl.html',
            controller: function($mdSidenav) {
                this.openSidebar = function(id) {
                    $mdSidenav(id).toggle();
                };
            },
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.elements-grids', {
            url: '/elements/grids',
            templateUrl: 'app/examples/elements/grids.tmpl.html'
        })
        .state('triangular.admin-default.fab-speed', {
            url: '/elements/fab-speed',
            templateUrl: 'app/examples/elements/fab-speed.tmpl.html'
        })
        .state('triangular.admin-default.fab-toolbar', {
            url: '/elements/fab-toolbar',
            templateUrl: 'app/examples/elements/fab-toolbar.tmpl.html'
        })
        .state('triangular.admin-default.elements-selects', {
            url: '/elements/selects',
            templateUrl: 'app/examples/elements/selects.tmpl.html'
        })
        .state('triangular.admin-default.elements-tables', {
            url: '/elements/tables',
            templateUrl: 'app/examples/elements/tables.tmpl.html'
        })
        .state('triangular.admin-default.elements-textangular', {
            url: '/elements/textangular',
            templateUrl: 'app/examples/elements/textangular.tmpl.html'
        })
        .state('triangular.admin-default.elements-lists', {
            url: '/elements/lists',
            templateUrl: 'app/examples/elements/lists.tmpl.html',
            controller: function(emails) {
                this.emails = emails.data.splice(0, 5);
            },
            controllerAs: 'vm',
            resolve: {
                emails: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'email/inbox'
                    });
                }
            }
        })
        .state('triangular.admin-default.elements-chips', {
            url: '/elements/chips',
            templateUrl: 'app/examples/elements/chips.tmpl.html',
            controller: 'ChipsController',
            controllerAs: 'vm',
            resolve: {
                contacts: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'email/contacts'
                    });
                }
            }
        })
        .state('triangular.admin-default.elements-cards', {
            url: '/elements/cards',
            templateUrl: 'app/examples/elements/cards.tmpl.html'
        })
        .state('triangular.admin-default.elements-upload', {
            url: '/elements/upload',
            templateUrl: 'app/examples/elements/upload.tmpl.html'
        });

        triMenuProvider.addMenu({
            name: 'MENU.ELEMENTS.ELEMENTS',
            icon: 'zmdi zmdi-graduation-cap',
            type: 'dropdown',
            priority: 3.1,
            children: [{
                name: 'MENU.ELEMENTS.BUTTONS',
                type: 'link',
                state: 'triangular.admin-default.elements-buttons'
            },{
                name: 'MENU.ELEMENTS.CARDS',
                type: 'link',
                state: 'triangular.admin-default.elements-cards'
            },{
                name: 'MENU.ELEMENTS.CHECKBOXES',
                type: 'link',
                state: 'triangular.admin-default.elements-checkboxes'
            },{
                name: 'MENU.ELEMENTS.CHIPS',
                type: 'link',
                state: 'triangular.admin-default.elements-chips'
            },{
                name: 'MENU.ELEMENTS.DIALOGS',
                type: 'link',
                state: 'triangular.admin-default.elements-dialogs'
            },{
                name: 'MENU.ELEMENTS.FAB-SPEED',
                type: 'link',
                state: 'triangular.admin-default.fab-speed'
            },{
                name: 'MENU.ELEMENTS.FAB-TOOLBAR',
                type: 'link',
                state: 'triangular.admin-default.fab-toolbar'
            },{
                name: 'MENU.ELEMENTS.GRIDS',
                type: 'link',
                state: 'triangular.admin-default.elements-grids'
            },{
                name: 'MENU.ELEMENTS.ICONS',
                type: 'link',
                state: 'triangular.admin-default.elements-icons'
            },{
                name: 'MENU.ELEMENTS.LISTS',
                type: 'link',
                state: 'triangular.admin-default.elements-lists'
            },{
                name: 'MENU.ELEMENTS.MENUS',
                type: 'link',
                state: 'triangular.admin-default.menus'
            },{
                name: 'MENU.ELEMENTS.PROGRESS',
                type: 'link',
                state: 'triangular.admin-default.elements-progress'
            },{
                name: 'MENU.ELEMENTS.RADIOS',
                type: 'link',
                state: 'triangular.admin-default.elements-radios'
            },{
                name: 'MENU.ELEMENTS.SELECTS',
                type: 'link',
                state: 'triangular.admin-default.elements-selects'
            },{
                name: 'MENU.ELEMENTS.SIDEBARS',
                type: 'link',
                state: 'triangular.admin-default.elements-sidebars'
            },{
                name: 'MENU.ELEMENTS.SLIDERS',
                type: 'link',
                state: 'triangular.admin-default.elements-sliders'
            },{
                name: 'MENU.ELEMENTS.SWITCHES',
                type: 'link',
                state: 'triangular.admin-default.elements-switches'
            },{
                name: 'MENU.ELEMENTS.TABLES',
                type: 'link',
                state: 'triangular.admin-default.elements-tables'
            },{
                name: 'MENU.ELEMENTS.TABS',
                type: 'link',
                state: 'triangular.admin-default.elements-tabs'
            },{
                name: 'MENU.ELEMENTS.TEXTANGULAR',
                type: 'link',
                state: 'triangular.admin-default.elements-textangular'
            },{
                name: 'MENU.ELEMENTS.TOASTS',
                type: 'link',
                state: 'triangular.admin-default.elements-toasts'
            },{
                name: 'MENU.ELEMENTS.TOOLBARS',
                type: 'link',
                state: 'triangular.admin-default.elements-toolbars'
            },{
                name: 'MENU.ELEMENTS.TOOLTIPS',
                type: 'link',
                state: 'triangular.admin-default.elements-tooltips'
            },{
                name: 'MENU.ELEMENTS.WHITEFRAMES',
                type: 'link',
                state: 'triangular.admin-default.elements-whiteframes'
            },{
                name: 'MENU.ELEMENTS.UPLOAD',
                type: 'link',
                state: 'triangular.admin-default.elements-upload'
            }]
        });
    }
})();

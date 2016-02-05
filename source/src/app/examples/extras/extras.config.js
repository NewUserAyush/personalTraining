(function() {
    'use strict';

    angular
        .module('app.examples.extras')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/extras');

        $stateProvider
        .state('triangular.admin-default.extra-gallery', {
            url: '/extras/gallery',
            templateUrl: 'app/examples/extras/gallery.tmpl.html',
            controller: 'GalleryController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.extra-avatars', {
            url: '/extras/avatars',
            templateUrl: 'app/examples/extras/avatars.tmpl.html',
            controller: 'AvatarsController',
            controllerAs: 'vm'
        })
        .state('triangular.admin-default.extra-blank', {
            url: '/extras/blank',
            templateUrl: 'app/examples/extras/blank.tmpl.html'
        })
        .state('triangular.admin-default.extra-timeline', {
            url: '/extras/timeline',
            templateUrl: 'app/examples/extras/timeline.tmpl.html',
            controller: 'TimelineController',
            controllerAs: 'vm'
        });




        
        triMenuProvider.addMenu({
            name: 'MENU.EXTRAS.EXTRAS',
            icon: 'zmdi zmdi-view-list-alt',
            type: 'dropdown',
            priority: 8.1,
            children: [{
                name: 'MENU.EXTRAS.GALLERY',
                state: 'triangular.admin-default.extra-gallery',
                type: 'link'
            },{
                name: 'MENU.EXTRAS.AVATARS',
                state: 'triangular.admin-default.extra-avatars',
                type: 'link'
            },{
                name: 'MENU.EXTRAS.404',
                state: '404',
                type: 'link'
            },{
                name: 'MENU.EXTRAS.500',
                state: '500',
                type: 'link'
            },{
                name: 'MENU.EXTRAS.BLANK',
                state: 'triangular.admin-default.extra-blank',
                type: 'link'
            },{
                name: 'MENU.EXTRAS.TIMELINE',
                state: 'triangular.admin-default.extra-timeline',
                type: 'link'
            }]
        });
    }
})();

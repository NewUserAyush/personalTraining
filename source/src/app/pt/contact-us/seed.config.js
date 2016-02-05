(function() {
    'use strict';

    angular
        .module('pt.contact')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/contact');

        $stateProvider
        .state('triangular.admin-default.contact', {
            url: '/contact',
            templateUrl: 'app/pt/contact-us/contact.tmpl.html',
            // set the controller to load for this page
            controller: 'contactController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'Contact-us',
            icon: 'zmdi zmdi-grade',
            priority: 1.3,
                state: 'triangular.admin-default.contact',
                type: 'link'
        });
    }
})();

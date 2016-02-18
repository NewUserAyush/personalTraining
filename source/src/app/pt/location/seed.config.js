(function() {
    'use strict';

    angular
        .module('pt.location')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/location');

        $stateProvider
        .state('triangular.admin-default.location', {
            url: '/location',
            templateUrl: 'app/pt/location/location.tmpl.html',
            // set the controller to load for this page
            controller: 'locationController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'Location',
            icon: 'zmdi zmdi-pin',
            priority: 1.4,
                state: 'triangular.admin-default.location',
                type: 'link'
        });
    }
})();

(function() {
    'use strict';

    angular
        .module('pt.instructor')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/instructor');

        $stateProvider
        .state('triangular.admin-default.team', {
            url: '/instructor',
            templateUrl: 'app/pt/instructor/instructor.tmpl.html',
            // set the controller to load for this page
            controller: 'instructorController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'Team',
            icon: 'zmdi zmdi-accounts',
            priority: 1.2,
                state: 'triangular.admin-default.team',
                type: 'link'

        });
    }
})();

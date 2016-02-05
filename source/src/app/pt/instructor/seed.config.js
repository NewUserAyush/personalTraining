(function() {
    'use strict';

    angular
        .module('pt.instructor')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/instructor');

        $stateProvider
        .state('triangular.admin-default.instructor', {
            url: '/instructor',
            templateUrl: 'app/pt/instructor/instructor.tmpl.html',
            // set the controller to load for this page
            controller: 'instructorController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'Instructor',
            icon: 'zmdi zmdi-grade',
            priority: 1.2,
                state: 'triangular.admin-default.instructor',
                type: 'link'

        });
    }
})();

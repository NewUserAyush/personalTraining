(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/pt/Admin');

        $stateProvider

            .state('triangular-no-scroll.admin-default-no-scroll.instructor', {
                url: '/Admin/instructor',
                templateUrl: 'app/pt/Admin/instructor/instructor.tmpl.html',
                controller: 'InstructorController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.instructor.insDetails', {
                url: '/:id',
                templateUrl: 'app/pt/Admin/instructor/instructorDetails.tmpl.html',
                controller: 'InstructorDetailsController',
                controllerAs: 'vm'
            })

            //.state('triangular.admin-default.instructor', {
            //    url: '/Admin/instructor',
            //    templateUrl: 'app/pt/Admin/instructor/instructor.tmpl.html',
            //    controller: 'InstructorController',
            //    controllerAs: 'vm'
            //})
            //.state('triangular.admin-default.instructor.insDetails', {
            //    url: '/:id',
            //    templateUrl: 'app/pt/Admin/instructor/instructorDetails.tmpl.html',
            //    controller: 'InstructorDetailsController',
            //    controllerAs: 'vm'
            //})

            .state('triangular.admin-default.student_information', {
                url: '/Admin/blank2',
                templateUrl: 'app/pt/Admin/blank2.tmpl.html'
            })

            .state('triangular.admin-default.extra-blank', {
                url: '/Admin/blank3',
                templateUrl: 'app/pt/Admin/blank3.tmpl.html'
            });
            //.state('triangular.admin-default.extra-timeline', {
            //    url: '/extras/timeline',
            //    templateUrl: 'app/examples/extras/timeline.tmpl.html',
            //    controller: 'TimelineController',
            //    controllerAs: 'vm'
            //});

        triMenuProvider.addMenu({
            name: 'Admin',
            icon: 'zmdi zmdi-view-list-alt',
            type: 'dropdown',
            priority: 1.5,
            children: [{
                name: 'Instructor',
                state: 'triangular-no-scroll.admin-default-no-scroll.instructor',
                type: 'link'
            },{
                name: 'student_information',
                state: 'triangular.admin-default.student_information',
                type: 'link'
            },{
                name: 'blank-3',
                state: 'triangular.admin-default.extra-blank',
                type: 'link'
            }]
        });
    }
})();

(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider,$authProvider) {
        $translatePartialLoaderProvider.addPart('app/pt/Admin');

        $stateProvider

            .state('triangular-no-scroll.admin-default-no-scroll.instructor', {
                url: '/Admin/instructor',
                templateUrl: 'app/pt/Admin/instructor_info/instructor.tmpl.html',
                controller: 'InstructorController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.instructor.insDetails', {
                url: '/:id',
                templateUrl: 'app/pt/Admin/instructor_info/instructorDetails.tmpl.html',
                controller: 'InstructorDetailsController',
                controllerAs: 'vm'
            })


            .state('triangular.admin-default.student_information', {
                url: '/Admin/blank2',
                templateUrl: 'app/pt/Admin/blank2.tmpl.html'
            })

            .state('triangular.admin-default.new_information', {
                url: '/Admin/blank3',
                templateUrl: 'app/pt/Admin/blank3.tmpl.html'
            });


        //triMenuProvider.addMenu({
        //    name: 'Admin',
        //    icon: 'zmdi zmdi-view-list-alt',
        //    type: 'dropdown',
        //    priority: 1.5,
        //    children: [{
        //        name: 'Instructor',
        //        state: 'triangular-no-scroll.admin-default-no-scroll.instructor',
        //        icon: 'zmdi zmdi-account-box',
        //        type: 'link'
        //    },{
        //        name: 'student_information',
        //        state: 'triangular.admin-default.student_information',
        //        icon: 'zmdi zmdi-library',
        //        type: 'link'
        //    },{
        //        name: 'blank-3',
        //        state: 'triangular.admin-default.extra-blank',
        //        icon: 'zmdi zmdi-view-list-alt',
        //        type: 'link'
        //    }]
        //});

        $authProvider.facebook({
            clientId: '255268371341858'

        });

    }
})();

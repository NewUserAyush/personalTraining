(function() {
    'use strict';

    angular
        .module('app')
        .run(
            [ '$rootScope','$state','$stateParams',function($rootScope,$state, $stateParams)
            {
                $rootScope.$state=$state;
                $rootScope.$stateParams=$stateParams;
            }
            ]
        )
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider,FacebookProvider) {
        // Setup the apps routes

        // 404 & 500 pages
        $stateProvider
        .state('404', {
            url: '/404',
            templateUrl: '404.tmpl.html',
            controllerAs: 'vm',
            controller: function($state) {
                var vm = this;
                vm.goHome = function() {
                    $state.go('triangular.admin-default.dashboard-analytics');
                };
            }
        })

        .state('500', {
            url: '/500',
            templateUrl: '500.tmpl.html',
            controllerAs: 'vm',
            controller: function($state) {
                var vm = this;
                vm.goHome = function() {
                    $state.go('triangular.admin-default.dashboard-analytics');
                };
            }
        });


        // set default routes when no path specified
        //$urlRouterProvider.when('', '/dashboards/analytics');
        //$urlRouterProvider.when('/', '/dashboards/analytics');

        $urlRouterProvider.when('', '/home/');
        $urlRouterProvider.when('/', '/home/');

        // always goto 404 if route not found
        $urlRouterProvider.otherwise('/404');

        FacebookProvider.init('255268371341858');
    }


})();

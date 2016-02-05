(function() {
    'use strict';

    angular
        .module('triangular')
        .run(runFunction);

    /* @ngInject */
    function runFunction($rootScope, $window, $state, $filter, $translate, $timeout, triRoute, triBreadcrumbsService) {
        var breadcrumbs = triBreadcrumbsService.breadcrumbs;
        init();

        var destroyOn = $rootScope.$on('$stateChangeSuccess', function(){
            setFullTitle();
        });

        $rootScope.$on('$destroy', function(){
            destroyOn();
        });

        function setFullTitle() {
            $timeout(function(){
                var title = triRoute.title;
                angular.forEach(breadcrumbs.crumbs, function(crumb){
                    title +=' ' + triRoute.separator + ' ' + $filter('translate')(crumb.name);
                });
                $window.document.title = title;
            });
        }

        function init() {
            setFullTitle();
        }
    }
})();

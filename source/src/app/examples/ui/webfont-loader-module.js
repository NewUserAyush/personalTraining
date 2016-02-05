(function() {
    'use strict';

    angular
        .module('webfont-loader', [])
        .directive('webfontLoader', webfontLoader);

    /* @ngInject */
    function webfontLoader($rootScope, $window) {
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            function onActive() {
                $rootScope.$broadcast('webfontLoader.loaded');
            }

            function onInactive() {
                $rootScope.$broadcast('webfontLoader.error');
            }

            $window.WebFont.load({
                google: {
                    families: [attrs.webfontLoader]
                },
                active: onActive,
                inactive: onInactive
            });
        }
    }
})();
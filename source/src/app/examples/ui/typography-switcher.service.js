(function() {
    'use strict';

    angular
        .module('app.examples.ui')
        .service('TypographySwitcherService', TypographySwitcher);

    /* @ngInject */
    function TypographySwitcher($window, $cookies, $log, UI_FONTS) {
        this.changeFont = changeFont;
        this.getCurrentFont = getCurrentFont;
        this.init = init;

        //////////////////

        function init() {
            // if we arent using the default font then change it
            var currentFont = getCurrentFont();
            if(currentFont.name !== 'Roboto Draft') {
                changeFont(currentFont);
            }
        }

        function getCurrentFont() {
            // if we have no current font set, set it to first font (Roboto)
            var fontCookie = $cookies.get('tri-typography-font');
            if(angular.isUndefined(fontCookie)) {
                $cookies.put('tri-typography-font', angular.toJson(UI_FONTS[0]));
            }

            return angular.fromJson($cookies.get('tri-typography-font'));
        }

        function changeFont(font) {
            $window.WebFont.load({
                google: {
                    families: [font.google]
                },
                active: function() {
                    angular.element('button,select,html,textarea,input').css({'font-family': font.family});
                    $cookies.put('tri-typography-font', angular.toJson(font));
                },
                inactive: function() {
                    $log.error('Font ' + font.name + ' could not be loaded');
                }
            });
        }
    }
})();

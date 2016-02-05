(function(jQuery) {
    'use strict';

    angular
        .module('app.examples.ui')
        .run(moduleRun);

    /* @ngInject */
    function moduleRun(TypographySwitcherService) {
        // load up the webfont loader to allow loading google fonts in the demo
        jQuery.ajax({
            url: '//ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js',
            dataType: 'script',
            async: true,
            success: function() {
                // initialise typography switcher (make sure correct font is loaded if one has been selected)
                TypographySwitcherService.init();
            }
        });
    }
})(jQuery);
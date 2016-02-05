(function() {
    'use strict';

    angular
        .module('app.examples.email')
        .config(moduleConfig);

    function moduleConfig($provide) {
        /***
        * Setup Editor Toolbar here
        ***/
        $provide.decorator('taOptions', ['taRegisterTool', 'taTranslations', '$delegate', function(taRegisterTool, taTranslations, taOptions){
            taOptions.toolbar = [['bold', 'italics', 'underline', 'insertLink']];

            taOptions.classes = {
                focussed: 'focussed',
                toolbar: 'editor-toolbar',
                toolbarGroup: 'editor-group',
                toolbarButton: 'md-button',
                toolbarButtonActive: '',
                disabled: '',
                textEditor: 'form-control',
                htmlEditor: 'form-control'
            };
            return taOptions;
        }]);

        $provide.decorator('taTools', ['$delegate', function(taTools){
            taTools.bold.iconclass = 'zmdi zmdi-format-bold';
            taTools.italics.iconclass = 'zmdi zmdi-format-italic';
            taTools.underline.iconclass = 'zmdi zmdi-format-underlined';
            taTools.insertLink.iconclass = 'zmdi zmdi-link';
            return taTools;
        }]);
    }
})();
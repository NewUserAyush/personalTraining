(function() {
    'use strict';

    angular
        .module('app.examples.ui', [
            'ngCookies', 'webfont-loader'
        ])
        .constant('UI_FONTS', [{
            name: 'Roboto Draft',
            family: 'RobotoDraft',
            google: 'RobotoDraft:300,400,500,700,400italic'
        },{
            name: 'Noto Sans',
            family: 'Noto Sans',
            google: 'Noto+Sans:400,700,400italic'
        },{
            name: 'Open Sans',
            family: 'Open Sans',
            google: 'Open+Sans:300,400,500,700,400italic'
        },{
            name: 'Lato',
            family: 'Lato',
            google: 'Lato:300,400,500,700,400italic'
        },{
            name: 'Ubuntu',
            family: 'Ubuntu',
            google: 'Ubuntu:300,400,500,700,400italic'
        },{
            name: 'Source Sans Pro',
            family: 'Source Sans Pro',
            google: 'Source+Sans+Pro:300,400,500,700,400italic'
        }]);
})();
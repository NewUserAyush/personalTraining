(function() {
    'use strict';

    angular
        .module('app.examples.menu')
        .service('dynamicMenuService', dynamicMenuService);

    /* @ngInject */
    function dynamicMenuService() {
        this.dynamicMenu = {
            showDynamicMenu: false
        };
    }
})();
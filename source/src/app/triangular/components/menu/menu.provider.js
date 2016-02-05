(function() {
    'use strict';

    angular
        .module('triangular.components')
        .provider('triMenu', menuProvider);


    /* @ngInject */
    function menuProvider() {
        // Provider
        var menuArray = [];

        this.addMenu = addMenu;
        this.removeMenu = removeMenu;
        this.removeAllMenu = removeAllMenu;

        function addMenu(item) {
            menuArray.push(item);
        }

        function removeMenu(state, params) {
            findAndDestroyMenu(menuArray, state, params);
        }

        function removeAllMenu() {
            for (var i = menuArray.length - 1; i >= 0 ; i--) {
                menuArray.splice(i, 1);
            }
        }

        function findAndDestroyMenu(menu, state, params, isChildren) {
            if (menu instanceof Array) {
                for (var i = menu.length - 1; i >= 0 ; i--) {
                    if(menu[i].state === state && angular.equals(menu[i].params, params)) {
                        menu.splice(i, 1);
                        if (!isNaN(isChildren) && !menuArray[isChildren].children.length) {
                            menuArray.splice(isChildren, 1);
                        }
                        break;
                    }
                    else if(angular.isDefined(menu[i].children)) {
                        findAndDestroyMenu(menu[i].children, state, params, i);
                    }
                }
            }
        }

        // Service
        this.$get = function() {
            return {
                menu: menuArray,
                addMenu: addMenu,
                removeMenu: removeMenu,
                removeAllMenu: removeAllMenu
            };
        };
    }
})();


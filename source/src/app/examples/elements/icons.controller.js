(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .controller('IconsController', IconsController);

    /* @ngInject */
    function IconsController(icons, fa) {
        var vm = this;
        vm.icons = [];
        vm.families = ['Material Icon Font', 'Font Awesome'];
        vm.selectedIcon = null;

        // create filterable data structure for icons
        angular.forEach(icons.data, function(icon) {
            vm.icons.push({
                name: icon.name,
                family: 'Material Icon Font',
                className: icon.class
            });
        });

        angular.forEach(fa.data, function(name, className) {
            vm.icons.push({
                name: name,
                family: 'Font Awesome',
                className: className
            });
        });

        vm.selectIcon = function(icon) {
            vm.selectedIcon = icon;
        };
    }
})();
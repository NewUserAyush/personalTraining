(function() {
    'use strict';

    angular
        .module('app.examples.ui')
        .controller('SkinsUIController', SkinsUIController);

    /* @ngInject */
    function SkinsUIController($cookies, $window, triSkins, triTheming) {
        var vm = this;
        vm.elementColors = {
            logo: '',
            sidebar: '',
            content: '',
            toolbar: ''
        };
        vm.skins = triSkins.getSkins();
        vm.selectedSkin = triSkins.getCurrent();
        vm.trySkin = trySkin;
        vm.updatePreview = updatePreview;

        //////////////////////

        function trySkin() {
            if(vm.selectedSkin !== triSkins.getCurrent()) {
                $cookies.put('triangular-skin',angular.toJson({
                    skin: vm.selectedSkin.id
                }));
                $window.location.reload();
            }
        }


        function updatePreview() {
            for(var element in vm.elementColors) {
                var theme = triTheming.getTheme(vm.selectedSkin.elements[element]);
                var hue = angular.isUndefined(theme.colors.primary.hues.default) ? '500' : theme.colors.primary.hues.default;
                var color = triTheming.getPaletteColor(theme.colors.primary.name, hue);
                vm.elementColors[element] = triTheming.rgba(color.value);
            }
        }

        // init

        updatePreview();
    }
})();
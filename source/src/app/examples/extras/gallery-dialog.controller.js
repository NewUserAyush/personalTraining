(function() {
    'use strict';

    angular
        .module('app.examples.extras')
        .controller('GalleryDialogController', GalleryDialogController);

    /* @ngInject */
    function GalleryDialogController($mdDialog, day, image) {
        var vm = this;
        vm.currentImage = image;
        vm.next = next;
        vm.prev = prev;

        function next() {
            var index = day.images.indexOf(vm.currentImage);
            index = index + 1 < day.images.length ? index + 1 : 0;
            vm.currentImage = day.images[index];
        }

        function prev() {
            var index = day.images.indexOf(vm.currentImage);
            index = index - 1 < 0 ? day.images.length -1 : index - 1;
            vm.currentImage = day.images[index];
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .controller('ElementsUpload1Controller', ElementsUpload1Controller);

    /* @ngInject */
    function ElementsUpload1Controller($mdToast) {
        var vm = this;
        vm.upload = upload;

        ////////////////

        function upload($files) {
            if($files !== null && $files.length > 0) {
                var message = 'Thanks for ';
                for(var file in $files) {
                    message += $files[file].name + ' ';
                }
                $mdToast.show({
                    template: '<md-toast><span flex>' + message + '</span></md-toast>',
                    position: 'bottom right',
                    hideDelay: 5000
                });
            }
        }
    }
})();
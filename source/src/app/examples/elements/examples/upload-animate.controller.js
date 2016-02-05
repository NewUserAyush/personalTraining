(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .controller('ElementsUploadAnimateController', ElementsUploadAnimateController);

    /* @ngInject */
    function ElementsUploadAnimateController($timeout, $mdToast) {
        var vm = this;
        vm.status = 'idle';  // idle | uploading | complete
        vm.upload = upload;

        var fileList;
        ////////////////

        function upload($files) {
            if($files !== null && $files.length > 0) {
                fileList = $files;

                uploadStarted();

                $timeout(uploadComplete, 4000);
            }
        }

        function uploadStarted() {
            vm.status = 'uploading';
        }

        function uploadComplete() {
            vm.status = 'complete';
            var message = 'Thanks for ';
            for(var file in fileList) {
                message += fileList[file].name + ' ';
            }
            $mdToast.show({
                template: '<md-toast><span flex>' + message + '</span></md-toast>',
                position: 'bottom right',
                hideDelay: 5000
            });

            $timeout(uploadReset, 3000);
        }

        function uploadReset() {
            vm.status = 'idle';
        }
    }
})();
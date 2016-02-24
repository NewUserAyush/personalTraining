(function() {
    'use strict';

    angular
        .module('pt.contact')
        .controller('contactController', fn);

    /* @ngInject */
    function fn(contactmodel,$scope,$timeout, $mdToast,instructormodel) {
        var vm = this;

        //vm.testData = ['contact', '#is', 'great'];
        $scope.myDate = new Date();
        $scope.minDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() - 2,
            $scope.myDate.getDate());
        $scope.maxDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() + 2,
            $scope.myDate.getDate());
        $scope.onlyWeekendsPredicate = function(date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        }

        //image upload

        var vm = this;
        vm.status = 'idle';  // idle | uploading | complete
        vm.upload = upload;

        vm.items=instructormodel.getData()
        var fileList;

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


        vm.testData=contactmodel.getData();


       vm.myfunc =function myfun(studentInfo)
       {
          contactmodel.submitform(studentInfo);
       }
    }
})();

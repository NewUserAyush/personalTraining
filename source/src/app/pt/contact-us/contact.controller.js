(function() {
    'use strict';

    angular
        .module('pt.contact')
        .controller('contactController', fn);

    /* @ngInject */
    function fn(contactmodel,$scope,$timeout, $mdToast,instructormodel,breezeService) {
        var vm = this;
         vm.data={};
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



            instructormodel.getData().then(function(data){
                vm.data.instructor=data.results;
            });

            //instructormodel.getData().then(function (data) {
            //    vm.items = data;
            //})

        breezeService.getEntities('TimeSlot').then(function (data){
            vm.data.timeslot=data.results;
        });

        breezeService.getEntities('location').then(function (data){
            vm.data.location=data.results;
        });



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



       vm.myfunc =function myfun(studentInfo)
       {
         var data={
                    firstName:studentInfo.firstName,
                    lastName:studentInfo.lastName,
                    gender:studentInfo.Gender,
                    email:studentInfo.email,
                    dob:studentInfo.dob,
                    ContactNo:studentInfo.phno,
                    address:studentInfo.line1,
                    City:studentInfo.town,
                    zip:studentInfo.zip,
                    state:studentInfo.State,
                    country:studentInfo.Country,
                    InstructorId:instructor,
                    locationId:location,
                    TimeslotId:timeslot
                  }



           breezeService.createEntity('Student_Registration',data);


       }
    }
})();

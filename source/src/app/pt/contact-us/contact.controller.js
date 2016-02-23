(function() {
    'use strict';

    angular
        .module('pt.contact')
        .controller('contactController', fn);

    /* @ngInject */
    function fn(contactmodel,$scope) {
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

        vm.testData=contactmodel.getData();

       vm.myfunc =function myfun(studentInfo)
       {
          contactmodel.submitform(studentInfo);
       }
    }
})();

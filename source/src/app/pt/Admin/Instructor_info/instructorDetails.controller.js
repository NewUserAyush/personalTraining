(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorDetailsController', fnCtrl);

    /* @ngInject */
    function fnCtrl( $stateParams, instructorService,$state) {
        var vm = this;
        vm.closeEmail=closeEmail;
        vm.deleteEmail=deleteEmail;

        vm.item =   instructorService.getDetail($stateParams.id)[0];

        function closeEmail() {
            //later on
           // $scope.$emit('closeEmail');
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor");
        }

        function deleteEmail() {
            $scope.$emit('deleteEmail');
        }


    }
})();

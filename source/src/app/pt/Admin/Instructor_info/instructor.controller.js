(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorController', fnCtrl);

    /* @ngInject */
    function fnCtrl(instructorService,$state) {
        var vm = this;
      vm.items=instructorService.getData();
      vm.getDetail = getDetail;

        function getDetail(test) {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor.insDetails", {
                id: test.id
            });

        }
    }
})();

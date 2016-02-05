(function() {
    'use strict';

    angular
        .module('pt.location')
        .controller('locationController', fn);

    /* @ngInject */
    function fn(locationmodel) {
        var vm = this;
       // vm.testData = ['location', 'is', 'great'];
        vm.testData=locationmodel.getData();
    }
})();

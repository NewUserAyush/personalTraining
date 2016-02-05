(function() {
    'use strict';

    angular
        .module('pt.contact')
        .controller('contactController', fn);

    /* @ngInject */
    function fn(contactmodel) {
        var vm = this;
        //vm.testData = ['contact', '#is', 'great'];
        vm.testData=contactmodel.getData();
    }
})();

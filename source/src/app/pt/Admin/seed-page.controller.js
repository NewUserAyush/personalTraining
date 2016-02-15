(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('AdminController', fn);

    /* @ngInject */
    function fn() {
        var vm = this;
        vm.testData ={
            name:"ayush",
            subject:"regarding internship",
            Content:"hello,this is oofice integrator that fullfill all client needs",
            image:""
        };
    }
})();

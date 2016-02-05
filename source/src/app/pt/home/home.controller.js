(function() {
    'use strict';

    angular
        .module('pt.home')
        .controller('homeController', fn);

    /* @ngInject */
    function fn(homemodel) {
        var vm = this;
       //vm.testData = ['homessssss', 'is', 'great'];

        vm.testData = homemodel.getData().then(function (data ){
           // console.log(data);
            vm.testData=data.results;
        });
    }
})();

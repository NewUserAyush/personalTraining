(function() {
    'use strict';

    angular
        .module('pt.instructor')
        .controller('instructorController', fn);

    /* @ngInject */
    function fn(instructormodel) {
        var vm = this;
        //vm.testData = ['instructor', 'is', 'great.....'];
        vm.testData = instructormodel.getData().then(function (data ){
            // console.log(data);
            vm.testData=data.results;
        });

        vm.addItem = addItem;

        function addItem()
        {
            instructormodel.addItem().then(function(data){
                console.log(data);
            });
        }


    }
})();

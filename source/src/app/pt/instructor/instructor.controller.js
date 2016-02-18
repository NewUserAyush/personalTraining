(function () {
    'use strict';

    angular
        .module('pt.instructor')
        .controller('instructorController', fn);

    /* @ngInject */
    function fn(instructormodel) {
        var vm = this;


        vm.addItem = addItem;
        vm.itemFilter = itemFilter;
        vm.savedata = savedata;
        vm.getData=getData;
        vm.deleteItem=deleteItem;


        vm.fabDirections = ['up', 'down', 'left', 'right'];
        vm.fabDirection = vm.fabDirections[0];
        vm.fabAnimations = ['md-fling', 'md-scale'];
        vm.fabAnimation = vm.fabAnimations[0];
        vm.fabStatuses = [false, true];
        vm.fabStatus = vm.fabStatuses[0];
        vm.share = share;

        function share(message) {
            $mdToast.show({
                template: '<md-toast><span flex>' + message + '</span></md-toast>',
                position: 'top right',
                hideDelay: 3000,
                parent: $element
            });
        }

        function getData() {

            //vm.items = [ {
            //
            //    Name:'dfdf',
            //    Student:'dfdf',
            //    Location:'red',
            //    Student_age:21,
            //    Student_join_date:'dfdf'
            //},{
            //
            //    Name:'zzzz',
            //    Student:'dfdf',
            //    Location:'pune',
            //    Student_age:22,
            //    Student_join_date:'dfdf'
            //}]
            instructormodel.getData().then(function (data) {
                vm.items = data;
            })
        }

        function addItem(tn, ts, tl, ta, td) {
            var newItem = instructormodel.addItem(tn, ts, tl, ta, td);
            vm.items.push(newItem);
            if (newItem === undefined || newItem === null || newItem.Id === undefined) {
                alert("Error creatingnew itmne");
            }

        }

        function itemFilter(item) {
           if(item == undefined || item == null) return;
            var itemFilterText = vm.itemFilterText;
            return itemFilterText ?

                (-1 != item.Name.toLowerCase().indexOf(itemFilterText.toLowerCase()) ||
                  -1!=item.Location.toLowerCase().indexOf(itemFilterText.toLowerCase())
                    //-1 != item.age===(itemFilterText)||
                    //-1 != item.Student_name.toLowerCase().indexOf(itemFilterText.toLowerCase())
                ) :true ;
        }

        function savedata() {
            instructormodel.savedata();
        }

        function deleteItem(items) {
            removeItem(items);
            dataservice.deleteTodoAndSave(items);
        }

        getData();


    }
})();

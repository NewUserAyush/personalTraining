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

        function getData() {
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

            var itemFilterText = vm.itemFilterText;
            return itemFilterText ?
                // if there is search text, look for it in the description; else return true
            -1 != item.Name.toLowerCase().indexOf(itemFilterText.toLowerCase()) :
                true;
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

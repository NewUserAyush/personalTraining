(function () {
    'use strict';

    angular
        .module('pt.instructor')
        .controller('instructorController', fn);

    /* @ngInject */
    function fn(instructormodel, $scope, $auth, Facebook) {
        var vm = this;

        //Controller Interface
        // vm.addItem = addItem;
        // vm.itemFilter = itemFilter;
        // vm.savedata = savedata;
        // vm.deleteItem=deleteItem;
          vm.share = share;

        //Implementation starts here

        function itemFilter(item) {
            if (item == undefined || item == null) return;
            var itemFilterText = vm.itemFilterText;
            return itemFilterText ?

                (-1 != item.Name.toLowerCase().indexOf(itemFilterText.toLowerCase()) ||
                    -1 != item.Location.toLowerCase().indexOf(itemFilterText.toLowerCase())
                    //-1 != item.age===(itemFilterText)||
                    //-1 != item.Student_name.toLowerCase().indexOf(itemFilterText.toLowerCase())
                ) : true;
        }

        function savedata() {
            instructormodel.savedata();
        }

        function deleteItem(items) {
            removeItem(items);
            dataservice.deleteTodoAndSave(items);
        }

        function share(message) {
            $mdToast.show({
                template: '<md-toast><span flex>' + message + '</span></md-toast>',
                position: 'top right',
                hideDelay: 3000,
                parent: $element
            });
        }

        //function addItem(tn, ts, tl, ta, td) {
        //    var newItem = instructormodel.addItem(tn, ts, tl, ta, td);
        //    vm.items.push(newItem);
        //    if (newItem === undefined || newItem === null || newItem.Id === undefined) {
        //        alert("Error creatingnew itmne");
        //    }
        //
        //}

        $scope.isLoggedIn = false;
        $scope.toggleLogIn = function (isLoggedIn) {
            if (isloggedIn) $scope.logout();
            else $scope.IntentLogin();
        };

        $scope.Login = function () {
            Facebook.login(function (responce) {
                if (responce.status == 'connected') {
                    Facebook.api('/me', function (responce) {
                        console.log(responce);
                    })
                }
                //    userName=response.first.name;
                //    $scope.title="welcome  "+userName;
                //    $scope.isLoggedIn=true;
            });
        };

        function init() {
            vm.fabDirections = ['up', 'down', 'left', 'right'];
            vm.fabDirection = vm.fabDirections[0];
            vm.fabAnimations = ['md-fling', 'md-scale'];
            vm.fabAnimation = vm.fabAnimations[0];
            vm.fabStatuses = [false, true];
            vm.fabStatus = vm.fabStatuses[0]


             instructormodel.getData().then(function(data){
                 vm.items=data.results;

             });
        }

        init();













    }
})();

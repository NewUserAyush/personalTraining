(function() {
    'use strict';

    angular
        .module('app.examples.todo')
        .controller('TodoController', TodoController);

    /* @ngInject */
    function TodoController($scope, $state, $mdDialog) {
        var vm = this;
        vm.todos = [
            {description: 'Material Design', priority: 'high', selected: true},
            {description: 'Install espresso machine', priority: 'high', selected: false},
            {description: 'Deploy to Server', priority: 'medium', selected: true},
            {description: 'Cloud Sync', priority: 'medium', selected: false},
            {description: 'Test Configurations', priority: 'low', selected: false},
            {description: 'Validate markup', priority: 'low', selected: false},
            {description: 'Debug javascript', priority: 'low', selected: true},
            {description: 'Arrange meeting', priority: 'low', selected: true}
        ];
        vm.orderTodos = orderTodos;
        vm.removeTodo = removeTodo;

        //////////////////////////

        function orderTodos(task) {
            switch(task.priority){
                case 'high':
                    return 1;
                case 'medium':
                    return 2;
                case 'low':
                    return 3;
                default: // no priority set
                    return 4;
            }
        }

        function removeTodo(todo){
            for(var i = vm.todos.length - 1; i >= 0; i--) {
                if(vm.todos[i] === todo) {
                    vm.todos.splice(i, 1);
                }
            }
        }

        // watches

        $scope.$on('addTodo', function( ev ){
            $mdDialog.show({
                templateUrl: 'app/examples/todo/add-todo-dialog.tmpl.html',
                targetEvent: ev,
                controller: 'DialogController',
                controllerAs: 'vm'
            })
            .then(function(answer) {
                vm.todos.push(answer);
            });
        });
    }
})();
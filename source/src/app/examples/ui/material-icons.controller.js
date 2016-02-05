(function() {
    'use strict';

    angular
        .module('app.examples.ui')
        .controller('MaterialIconsController', MaterialIconsController);

    /* @ngInject */
    function MaterialIconsController($mdDialog, $document, $compile, $scope, icons) {
        var vm = this;
        vm.groups = [];
        vm.icons = [];
        vm.iconSource = 'Select icon below to see HTML';
        vm.selectIcon = selectIcon;
        vm.icons = icons.data;

        function selectIcon($event, className) {
            var dialogContent = $compile('<div hljs language="html"><md-icon md-font-icon="' + className + '"></md-icon></div>')($scope);
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element($document.body))
                .title('Here\'s the code for that icon')
                .htmlContent(dialogContent[0].innerHTML)
                .ok('Thanks')
                .targetEvent($event)
            );
        }
    }
})();
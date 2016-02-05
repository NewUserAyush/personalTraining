(function() {
    'use strict';

    angular
        .module('app.examples.ui')
        .controller('FaIconsController', FaIconsController);

    /* @ngInject */
    function FaIconsController($mdDialog, $document, $scope, $compile, icons) {
        var vm = this;
        vm.icons = loadIcons();
        vm.iconSource = 'Select icon below to see HTML';
        vm.selectIcon = selectIcon;

        function loadIcons() {
            var allIcons = [];
            for(var className in icons.data) {
                allIcons.push({
                    className: className,
                    name: icons.data[className]
                });
            }
            return allIcons;
        }

        function selectIcon($event, icon) {
            var dialogContent = $compile('<div hljs language="html"><md-icon md-font-icon="'+ icon.className +'"></md-icon></div>')($scope);
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
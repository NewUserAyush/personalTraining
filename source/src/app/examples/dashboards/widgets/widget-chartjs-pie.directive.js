(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .directive('chartjsPieWidget', chartjsPieWidget);

    /* @ngInject */
    function chartjsPieWidget($timeout) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            require: 'triWidget',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element, attrs, widgetCtrl) {
            widgetCtrl.setLoading(true);

            $timeout(function() {
                widgetCtrl.setLoading(false);
            }, 1500);

            widgetCtrl.setMenu({
                icon: 'zmdi zmdi-more-vert',
                items: [{
                    icon: 'zmdi zmdi-refresh',
                    title: 'DASHBOARDS.WIDGETS.MENU.REFRESH',
                    click: function() {
                        widgetCtrl.setLoading(true);
                        $timeout(function() {
                            widgetCtrl.setLoading(false);
                        }, 1500);
                    }
                },{
                    icon: 'zmdi zmdi-share',
                    title: 'DASHBOARDS.WIDGETS.MENU.SHARE'
                },{
                    icon: 'zmdi zmdi-print',
                    title: 'DASHBOARDS.WIDGETS.MENU.PRINT'
                }]
            });

            $scope.pieChart = {
                labels: ['Facebook', 'Twitter', 'Google+', 'Others'],
                data: [300, 500, 100, 50]
            };
        }
    }
})();
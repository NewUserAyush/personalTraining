(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .directive('chartjsLineWidget', chartjsLineWidget);

    /* @ngInject */
    function chartjsLineWidget($timeout, $interval) {
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
                randomData();
            }, 1500);

            widgetCtrl.setMenu({
                icon: 'zmdi zmdi-more-vert',
                items: [{
                    icon: 'zmdi zmdi-refresh',
                    title: 'DASHBOARDS.WIDGETS.MENU.REFRESH',
                    click: function() {
                        $interval.cancel($scope.intervalPromise);
                        widgetCtrl.setLoading(true);
                        $timeout(function() {
                            widgetCtrl.setLoading(false);
                            randomData();
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

            $scope.lineChart = {
                labels: ['January', 'February', 'March', 'April', 'May'],
                series: ['Pageviews', 'Visits', 'Sign ups'],
                options: {
                    datasetFill: false,
                    responsive: true
                },
                data: []
            };

            function randomData() {
                $scope.lineChart.data = [];
                for(var series = 0; series < $scope.lineChart.series.length; series++) {
                    var row = [];
                    for(var label = 0; label < $scope.lineChart.labels.length; label++) {
                        row.push(Math.floor((Math.random() * 100) + 1));
                    }
                    $scope.lineChart.data.push(row);
                }
            }

            // Simulate async data update
            $scope.intervalPromise = $interval(randomData, 5000);
        }
    }
})();
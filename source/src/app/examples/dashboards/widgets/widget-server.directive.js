(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .directive('serverWidget', serverWidget);

    /* @ngInject */
    function serverWidget($timeout, $interval) {
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

        function link($scope) {
            $scope.serverCharts = {
                bandwidth: {
                    dataLength: 50,
                    maximum: 40,
                    data: [[]],
                    labels: [],
                    options: {
                        animation: false,
                        showTooltips: false,
                        pointDot: false,
                        datasetStrokeWidth: 0.5,
                        maintainAspectRatio: false
                    },
                    colours: ['#4285F4']
                },
                cpu: {
                    dataLength: 50,
                    maximum: 100,
                    data: [[]],
                    labels: [],
                    options: {
                        animation: false,
                        showTooltips: false,
                        pointDot: false,
                        datasetStrokeWidth: 0.5,
                        maintainAspectRatio: false
                    },
                    colours: ['#DB4437']
                },
                data24hrs: {
                    series: ['Bandwidth', 'CPU'],
                    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
                },
                data7days: {
                    series: ['Bandwidth', 'CPU'],
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                },
                data365days: {
                    series: ['Bandwidth', 'CPU'],
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                }
            };

            randomData($scope.serverCharts.data24hrs);
            randomData($scope.serverCharts.data7days);
            randomData($scope.serverCharts.data365days);


            // Update the dataset at 25FPS for a smoothly-animating chart
            $interval(function () {
                getLiveChartData($scope.serverCharts.bandwidth);
                getLiveChartData($scope.serverCharts.cpu);
            }, 1000);

            function getLiveChartData (chart) {
                if (chart.data[0].length) {
                    chart.labels = chart.labels.slice(1);
                    chart.data[0] = chart.data[0].slice(1);
                }

                while (chart.data[0].length < chart.dataLength) {
                    chart.labels.push('');
                    chart.data[0].push(getRandomValue(chart.data[0], chart.maximum));
                }
            }

            function randomData(chart) {
                chart.data = [];
                for(var series = 0; series < chart.series.length; series++) {
                    var row = [];
                    for(var label = 0; label < chart.labels.length; label++) {
                        row.push(Math.floor((Math.random() * 100) + 1));
                    }
                    chart.data.push(row);
                }
            }

            function getRandomValue (data, max) {
                var l = data.length, previous = l ? data[l - 1] : 50;
                var y = previous + Math.random() * 10 - 5;
                return y < 0 ? 0 : y > max ? max : y;
            }
        }
    }
})();
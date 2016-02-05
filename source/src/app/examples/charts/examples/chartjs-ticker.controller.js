(function() {
    'use strict';

    angular
        .module('app.examples.charts')
        .controller('ChartJsTickerController', ChartJsTickerController);

    /* @ngInject */
    function ChartJsTickerController($interval) {
        var maximum = 100;
        var vm = this;
        vm.data = [[]];
        vm.labels = [];
        vm.options = {
            animation: false,
            showScale: false,
            showTooltips: false,
            pointDot: false,
            datasetStrokeWidth: 0.5
        };

        // Update the dataset at 25FPS for a smoothly-animating chart
        $interval(function () {
            getLiveChartData();
        }, 40);

        function getLiveChartData () {
            if (vm.data[0].length) {
                vm.labels = vm.labels.slice(1);
                vm.data[0] = vm.data[0].slice(1);
            }

            while (vm.data[0].length < maximum) {
                vm.labels.push('');
                vm.data[0].push(getRandomValue(vm.data[0]));
            }
        }

        function getRandomValue (data) {
            var l = data.length, previous = l ? data[l - 1] : 50;
            var y = previous + Math.random() * 10 - 5;
            return y < 0 ? 0 : y > 100 ? 100 : y;
        }

    }
})();
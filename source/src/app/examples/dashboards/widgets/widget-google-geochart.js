(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .directive('googleGeochartWidget', googleGeochartWidget);

    /* @ngInject */
    function googleGeochartWidget() {
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
            $scope.geoChartData = {
                type: 'GeoChart',
                data: [
                    ['Country', 'Popularity'],
                    ['Germany', 200],
                    ['United States', 300],
                    ['Brazil', 400],
                    ['Canada', 500],
                    ['France', 600],
                    ['RU', 700]
                ]
            };
        }
    }

})();
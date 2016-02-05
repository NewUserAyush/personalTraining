(function() {
    'use strict';

    angular
        .module('app.examples.charts')
        .controller('GoogleChartsScatterController', GoogleChartsScatterController);

    GoogleChartsScatterController.$inject = [];

    /* @ngInject */
    function GoogleChartsScatterController() {
        var vm = this;
        var scatterData = [];
        vm.chartData = {
            type: 'Scatter',
            data: {
                cols: [
                    {id: 'id', label: 'Student ID', type: 'number'},
                    {id: 'hours', label: 'Hours Studied', type: 'number'},
                    {id: 'final', label: 'Final', type: 'number'}
                ],
                rows: scatterData
            },
            options: {
                chart: {
                    title: 'Box Office Earnings in First Two Weeks of Opening',
                    subtitle: 'in millions of dollars (USD)'
                },
                width: 800,
                height: 600
            }
        };

        ////////////////////

        // init

        // create some random data
        for(var x = 0; x < 100; x++) {
            scatterData.push({
                c: [{
                    v: x
                },{
                    v: Math.floor((Math.random() * 100) + 1)
                },{
                    v: Math.floor((Math.random() * 100) + 1)
                }]
            });
        }
    }
})();
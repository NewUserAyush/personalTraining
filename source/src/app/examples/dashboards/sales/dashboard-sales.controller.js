(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('DashboardSalesController', DashboardSalesController);

    /* @ngInject */
    function DashboardSalesController($scope, $q, $timeout, $mdToast, $filter, $mdDialog, SalesService) {
        var vm = this;
        vm.dateRange = {
            start: moment().startOf('week'),
            end: moment().endOf('week')
        };

        vm.query = {
            order: 'date',
            limit: 5,
            page: 1
        };

        vm.openOrder = openOrder;

        /////////////////////////////////

        function openOrder(order, $event) {
            $mdDialog.show({
                controller: 'SalesOrderDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/dashboards/sales/order-dialog.tmpl.html',
                locals: {
                    order: order
                },
                targetEvent: $event
            });
        }

        function createData() {
            vm.salesData = SalesService.generateSales(vm.dateRange);
            vm.chartLineData = SalesService.createLineChartData(vm.salesData);
            vm.chartPieData = SalesService.createPieChartData(vm.salesData);
            vm.chartBarData = SalesService.createBarChartData(vm.salesData);
        }

        // events

        $scope.$on('salesChangeDate', function(event, $event) {
            $mdDialog.show({
                controller: 'DateChangeDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/dashboards/sales/date-change-dialog.tmpl.html',
                locals: {
                    range: vm.dateRange
                },
                targetEvent: $event
            })
            .then(function() {
                // create new data
                createData();

                // pop a toast
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('DASHBOARDS.SALES.DATE-UPDATED'))
                    .position('bottom right')
                    .hideDelay(2000)
                );
            });
        });

        // init

        createData();
    }
})();
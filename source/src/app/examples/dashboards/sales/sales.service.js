(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .service('SalesService', SalesService);

    /* @ngInject */
    function SalesService() {
        this.generateSales = generateSales;
        this.createLineChartData = createLineChartData;
        this.createPieChartData = createPieChartData;
        this.createBarChartData = createBarChartData;

        ////////////////

        function generateSales(dateRange) {
            var salesData = {
                totalSales: 0,
                totalEarnings: 0,
                dayTotals: [],
                orders: []
            };

            var startTime = dateRange.start.toDate();
            var endTime = dateRange.end.toDate();

            for(var date = startTime.getTime(); date < endTime.getTime(); date += 86400000) {
                var salesForTheDay = Math.floor(Math.random() * (100 - 0)) + 0;
                var ordersData = generateOrders(salesForTheDay, date);

                salesData.orders = salesData.orders.concat(ordersData.orders);

                salesData.dayTotals.push({
                    date: moment(date),
                    sales: salesForTheDay,
                    earnings: ordersData.totalEarnings
                });
                salesData.totalSales += salesForTheDay;
                salesData.totalEarnings += ordersData.totalEarnings;
            }

            return salesData;
        }

        function generateOrders(numOrders, date) {
            var ordersData = {
                orders: [],
                totalEarnings: 0
            };
            for(var o = 0; o < numOrders; o++) {
                var order = generateOrder(date);
                ordersData.totalEarnings += order.total;
                ordersData.orders.push(order);
            }

            return ordersData;
        }

        function generateOrder(date) {
            var statuses = ['complete', 'pending', 'delivered'];
            var names = ['Loraine Heidenreich', 'Amie Hane', 'Rosalyn Heller V', 'Dr. Kristian Boyle II', 'Clarabelle Weber', 'Rowland Emard', 'Kitty Heller DVM', 'Winston Frami', 'Newton Welch', 'Trudie Feest', 'Vivien Sauer', 'Cleta Kuhn', 'Ruby Shields', 'Dr. Moises Beahan DDS', 'Miss Shanel Jenkins DVM', 'Kitty Heller DVM', 'Vivien Sauer', 'Clara Cremin', 'Eunice Morissette', 'Arch Sporer IV', 'Miss Shanel Jenkins DVM', 'Ryann Balistreri I', 'Norma Yost DDS', 'Manley Roberts', 'Ruby Shields', 'Miss Lavada Runolfsson', 'Kira Dooley', 'Meredith Ebert DDS'];
            var emails = ['johnson.althea@gleichner.net','will.rhea@weber.biz','roslyn75@keebler.com','okon.glenda@hamill.com','estroman@cruickshank.org','victoria41@hartmann.com','bogisich.janice@wilkinson.com','bryce97@kris.com','noe59@king.com','wiza.litzy@kozey.com','oconner.cortney@gmail.com','kub.fannie@hotmail.com','adrian00@gutkowski.com','justice69@yahoo.com','torphy.toney@yahoo.com','bogisich.janice@wilkinson.com','oconner.cortney@gmail.com','orval63@gmail.com','jaime94@gmail.com','olaf69@okeefe.com','torphy.toney@yahoo.com','bernhard.bruen@marvin.com','otilia61@hotmail.com','bogan.lelia@bins.info','adrian00@gutkowski.com','yazmin76@hotmail.com','kglover@hotmail.com','erick.hermann@larkin.net','bernhard.bruen@marvin.com','bradly90@corkery.info','orval63@gmail.com','olaf69@okeefe.com'];
            var order = {
                id: makeid(),
                buyer: emails[Math.floor(Math.random() * emails.length)],
                name: names[Math.floor(Math.random() * names.length)],
                date: moment(date + Math.floor(Math.random() * (86400000 - 0)) + 0),
                items: [],
                subTotal: 0,
                status: statuses[Math.floor(Math.random() * statuses.length)],
                tax: 0,
                total: 0
            };

            var numItems = Math.floor(Math.random() * (6 - 1)) + 1;
            var productAdjectives = ['Super', 'Amazing', 'Great', 'New'];
            var productTypes = ['T-Shirt', 'Book', 'Desk', 'Coat', 'Chair', 'Hat', 'Jeans'];
            var productColors = ['Red', 'Green', 'Blue', 'Pink', 'Yellow', 'Orange'];
            var productCategories = ['Books', 'Electronics', 'Home', 'Toys', 'Clothes', 'Shoes', 'Mobiles'];
            for(var i = 0; i < numItems; i++) {
                var item = {
                    name: productAdjectives[Math.floor(Math.random() * productAdjectives.length)] + ' ' + productColors[Math.floor(Math.random() * productColors.length)] + ' ' + productTypes[Math.floor(Math.random() * productTypes.length)],
                    category: productCategories[Math.floor(Math.random() * productCategories.length)],
                    price: (Math.random() * (100 - 1) + 1).toFixed(2)
                };
                order.subTotal += parseFloat(item.price);

                order.items.push(item);
            }

            order.tax = order.subTotal * 0.2;
            order.total += order.subTotal + order.tax;
            return order;
        }

        function createLineChartData(salesData) {
            var chartData = {
                labels: [],
                series: ['Sales'],
                options: {
                    maintainAspectRatio: false,
                    datasetFill: false,
                    responsive: true,
                    scaleShowGridLines: false,
                    bezierCurve: true,
                    pointDotRadius: 2,
                    scaleFontColor: '#ffffff',
                    scaleFontSize: 16
                },
                colors: ['#ffffff'],
                data: []
            };

            var row = [];
            for (var i = 0; i < salesData.dayTotals.length; i++) {
                chartData.labels.push(salesData.dayTotals[i].date.format('M/D/YY'));
                row.push(salesData.dayTotals[i].sales);
            }
            chartData.data.push(row);

            return chartData;
        }

        function createPieChartData(salesData) {
            var chartData = {
                labels: [],
                data: []
            };

            for (var i = 0; i < salesData.orders.length; i++) {
                if(chartData.labels.indexOf(salesData.orders[i].status) === -1) {
                    chartData.labels.push(salesData.orders[i].status);
                    chartData.data.push(0);
                }
                var index = chartData.labels.indexOf(salesData.orders[i].status);
                chartData.data[index]++;
            }
            return chartData;
        }

        function createBarChartData(salesData) {
            var chartData = {
                labels: [],
                series: ['Sales'],
                data: [],
                options: {
                    barShowStroke : false
                }
            };

            var row = [];
            for (var order = 0; order < salesData.orders.length; order++) {
                for (var item = 0; item < salesData.orders[order].items.length; item++) {
                    if(chartData.labels.indexOf(salesData.orders[order].items[item].category) === -1) {
                        chartData.labels.push(salesData.orders[order].items[item].category);
                        row.push(0);
                    }
                    var index = chartData.labels.indexOf(salesData.orders[order].items[item].category);
                    row[index]++;
                }
            }
            chartData.data.push(row);
            return chartData;
        }

        function makeid() {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

            for( var i=0; i < 5; i++ ) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
        }
    }
})();
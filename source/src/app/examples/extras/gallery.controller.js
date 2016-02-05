(function() {
    'use strict';

    angular
        .module('app.examples.extras')
        .controller('GalleryController', GalleryController);

    /* @ngInject */
    function GalleryController($mdDialog) {
        var vm = this;
        vm.feed = [];
        vm.openImage = openImage;

        ////////////////

        // number of days of dummy data to show
        var numberOfFeedDays = 5;
        var loremPixelCategories = ['abstract', 'city', 'people', 'nature', 'food', 'fashion', 'nightlife'];

        function randomImage(title) {
            var randImage = Math.floor((Math.random() * 10) + 1);
            var randomCategory = loremPixelCategories[Math.floor((Math.random() * (loremPixelCategories.length-1)) + 1)];

            var width = [300, 640];
            var height = [225, 480];

            var image = {
                url: 'http://lorempixel.com/',
                urlFull: 'http://lorempixel.com/',
                title: title
            };


            if(Math.random() < 0.7) {
                image.url += width[0] + '/' + height[0];
                image.urlFull += width[1] + '/' + height[1];
                image.rowspan = 2;
                image.colspan = 2;
            }
            else {
                image.url += height[0] + '/' + width[0];
                image.urlFull += height[1] + '/' + width[1];
                image.rowspan = 2;
                image.colspan = 1;
            }

            image.url += '/' + randomCategory + '/' + randImage;
            image.urlFull += '/' + randomCategory + '/' + randImage;

            return image;
        }

        function createDayOfImages(day) {
            var dayFeed = {
                date: moment().subtract(day, 'days'),
                images: []
            };

            var numberOfImages = Math.floor((Math.random() * 4) + 6);
            for(var i = 0; i < numberOfImages; i++) {
                dayFeed.images.push(randomImage('Photo ' + (i+1)));
            }

            return dayFeed;
        }

        function openImage(day, image, $event) {
            $mdDialog.show({
                controller: 'GalleryDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/extras/gallery-dialog.tmpl.html',
                clickOutsideToClose: true,
                focusOnOpen: false,
                targetEvent: $event,
                locals: {
                    day: day,
                    image: image
                }
            });
        }

        function createFeed() {
            for(var day = 0; day < numberOfFeedDays; day++) {
                vm.feed.push(createDayOfImages(day));
            }
        }

        // init

        createFeed();
    }
})();
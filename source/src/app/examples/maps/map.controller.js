(function() {
    'use strict';

    angular
        .module('app.examples.maps')
        .controller('MapController', MapController);

    /* @ngInject */
    function MapController(uiGmapGoogleMapApi) {
        var vm = this;

        uiGmapGoogleMapApi.then(function(maps) {
            vm.map = {
                center: {
                    latitude: 35.027469,
                    longitude: -111.022753
                },
                zoom: 4,
                marker: {
                    id:0,
                    coords: {
                        latitude: 35.027469,
                        longitude: -111.022753
                    },
                    options: {
                        icon: {
                            anchor: new maps.Point(36,36),
                            origin: new maps.Point(0,0),
                            url: 'assets/images/maps/blue_marker.png'
                        }
                    }
                }
            };
        });
    }
})();
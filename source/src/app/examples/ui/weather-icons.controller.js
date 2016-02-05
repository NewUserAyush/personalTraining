(function() {
    'use strict';

    angular
        .module('app.examples.ui')
        .controller('WeatherIconsController', WeatherIconsController);

    /* @ngInject */
    function WeatherIconsController($mdDialog, $document, $scope, $compile) {
        var vm = this;
        vm.icons = [{
            'className': 'wi wi-day-cloudy-gusts',
            'name': 'Day Cloudy Gusts'
        },{
            'className': 'wi wi-day-cloudy-windy',
            'name': 'Day Cloudy Windy'
        },{
            'className': 'wi wi-day-cloudy',
            'name': 'Day Cloudy'
        },{
            'className': 'wi wi-day-fog',
            'name': 'Day Fog'
        },{
            'className': 'wi wi-day-hail',
            'name': 'Day Hail'
        },{
            'className': 'wi wi-day-lightning',
            'name': 'Day Lightning'
        },{
            'className': 'wi wi-day-rain-mix',
            'name': 'Day Rain Mix'
        },{
            'className': 'wi wi-day-rain-wind',
            'name': 'Day Rain Wind'
        },{
            'className': 'wi wi-day-rain',
            'name': 'Day Rain'
        },{
            'className': 'wi wi-day-showers',
            'name': 'Day Showers'
        },{
            'className': 'wi wi-day-snow',
            'name': 'Day Snow'
        },{
            'className': 'wi wi-day-sprinkle',
            'name': 'Day Sprinkle'
        },{
            'className': 'wi wi-day-sunny-overcast',
            'name': 'Day Sunny Overcast'
        },{
            'className': 'wi wi-day-sunny',
            'name': 'Day Sunny'
        },{
            'className': 'wi wi-day-storm-showers',
            'name': 'Day Storm Showers'
        },{
            'className': 'wi wi-day-thunderstorm',
            'name': 'Day Thunderstorm'
        },{
            'className': 'wi wi-cloudy-gusts',
            'name': 'Cloudy Gusts'
        },{
            'className': 'wi wi-cloudy-windy',
            'name': 'Cloudy Windy'
        },{
            'className': 'wi wi-cloudy',
            'name': 'Cloudy'
        },{
            'className': 'wi wi-fog',
            'name': 'Fog'
        },{
            'className': 'wi wi-hail',
            'name': 'Hail'
        },{
            'className': 'wi wi-lightning',
            'name': 'Lightning'
        },{
            'className': 'wi wi-rain-mix',
            'name': 'Rain Mix'
        },{
            'className': 'wi wi-rain-wind',
            'name': 'Rain Wind'
        },{
            'className': 'wi wi-rain',
            'name': 'Rain'
        },{
            'className': 'wi wi-showers',
            'name': 'Showers'
        },{
            'className': 'wi wi-snow',
            'name': 'Snow'
        },{
            'className': 'wi wi-sprinkle',
            'name': 'Sprinkle'
        },{
            'className': 'wi wi-storm-showers',
            'name': 'Storm Showers'
        },{
            'className': 'wi wi-thunderstorm',
            'name': 'Thunderstorm'
        },{
            'className': 'wi wi-windy',
            'name': 'Windy'
        },{
            'className': 'wi wi-night-alt-cloudy-gusts',
            'name': 'Night Alt Cloudy Gusts'
        },{
            'className': 'wi wi-night-alt-cloudy-windy',
            'name': 'Night Alt Cloudy Windy'
        },{
            'className': 'wi wi-night-alt-hail',
            'name': 'Night Alt Hail'
        },{
            'className': 'wi wi-night-alt-lightning',
            'name': 'Night Alt Lightning'
        },{
            'className': 'wi wi-night-alt-rain-mix',
            'name': 'Night Alt Rain Mix'
        },{
            'className': 'wi wi-night-alt-rain-wind',
            'name': 'Night Alt Rain Wind'
        },{
            'className': 'wi wi-night-alt-rain',
            'name': 'Night Alt Rain'
        },{
            'className': 'wi wi-night-alt-showers',
            'name': 'Night Alt Showers'
        },{
            'className': 'wi wi-night-alt-snow',
            'name': 'Night Alt Snow'
        },{
            'className': 'wi wi-night-alt-sprinkle',
            'name': 'Night Alt Sprinkle'
        },{
            'className': 'wi wi-night-alt-storm-showers',
            'name': 'Night Alt Storm Showers'
        },{
            'className': 'wi wi-night-alt-thunderstorm',
            'name': 'Night Alt Thunderstorm'
        },{
            'className': 'wi wi-night-clear',
            'name': 'Night Clear'
        },{
            'className': 'wi wi-night-cloudy-gusts',
            'name': 'Night Cloudy Gusts'
        },{
            'className': 'wi wi-night-cloudy-windy',
            'name': 'Night Cloudy Windy'
        },{
            'className': 'wi wi-night-cloudy',
            'name': 'Night Cloudy'
        },{
            'className': 'wi wi-night-hail',
            'name': 'Night Hail'
        },{
            'className': 'wi wi-night-lightning',
            'name': 'Night Lightning'
        },{
            'className': 'wi wi-night-rain-mix',
            'name': 'Night Rain Mix'
        },{
            'className': 'wi wi-night-rain-wind',
            'name': 'Night Rain Wind'
        },{
            'className': 'wi wi-night-rain',
            'name': 'Night Rain'
        },{
            'className': 'wi wi-night-showers',
            'name': 'Night Showers'
        },{
            'className': 'wi wi-night-snow',
            'name': 'Night Snow'
        },{
            'className': 'wi wi-night-sprinkle',
            'name': 'Night Sprinkle'
        },{
            'className': 'wi wi-night-storm-showers',
            'name': 'Night Storm Showers'
        },{
            'className': 'wi wi-night-thunderstorm',
            'name': 'Night Thunderstorm'
        },{
            'className': 'wi wi-celsius',
            'name': 'Celsius'
        },{
            'className': 'wi wi-cloud-down',
            'name': 'Cloud Down'
        },{
            'className': 'wi wi-cloud-refresh',
            'name': 'Cloud Refresh'
        },{
            'className': 'wi wi-cloud-up',
            'name': 'Cloud Up'
        },{
            'className': 'wi wi-cloud',
            'name': 'Cloud'
        },{
            'className': 'wi wi-degrees',
            'name': 'Degrees'
        },{
            'className': 'wi wi-down-left',
            'name': 'Down Left'
        },{
            'className': 'wi wi-down',
            'name': 'Down'
        },{
            'className': 'wi wi-fahrenheit',
            'name': 'Fahrenheit'
        },{
            'className': 'wi wi-horizon-alt',
            'name': 'Horizon Alt'
        },{
            'className': 'wi wi-horizon',
            'name': 'Horizon'
        },{
            'className': 'wi wi-left',
            'name': 'Left'
        },{
            'className': 'wi wi-lightning',
            'name': 'Lightning'
        },{
            'className': 'wi wi-night-fog',
            'name': 'Night Fog'
        },{
            'className': 'wi wi-refresh-alt',
            'name': 'Refresh Alt'
        },{
            'className': 'wi wi-refresh',
            'name': 'Refresh'
        },{
            'className': 'wi wi-right',
            'name': 'Right'
        },{
            'className': 'wi wi-sprinkles',
            'name': 'Sprinkles'
        },{
            'className': 'wi wi-strong-wind',
            'name': 'Strong Wind'
        },{
            'className': 'wi wi-sunrise',
            'name': 'Sunrise'
        },{
            'className': 'wi wi-sunset',
            'name': 'Sunset'
        },{
            'className': 'wi wi-thermometer-exterior',
            'name': 'Thermometer Exterior'
        },{
            'className': 'wi wi-thermometer-internal',
            'name': 'Thermometer Internal'
        },{
            'className': 'wi wi-thermometer',
            'name': 'Thermometer'
        },{
            'className': 'wi wi-tornado',
            'name': 'Tornado'
        },{
            'className': 'wi wi-up-right',
            'name': 'Up Right'
        },{
            'className': 'wi wi-up',
            'name': 'Up'
        },{
            'className': 'wi wi-wind-west',
            'name': 'Wind West'
        },{
            'className': 'wi wi-wind-south-west',
            'name': 'Wind South West'
        },{
            'className': 'wi wi-wind-south-east',
            'name': 'Wind South East'
        },{
            'className': 'wi wi-wind-south',
            'name': 'Wind South'
        },{
            'className': 'wi wi-wind-north-west',
            'name': 'Wind North West'
        },{
            'className': 'wi wi-wind-north-east',
            'name': 'Wind North East'
        },{
            'className': 'wi wi-wind-north',
            'name': 'Wind North'
        },{
            'className': 'wi wi-wind-east',
            'name': 'Wind East'
        },{
            'className': 'wi wi-smoke',
            'name': 'Smoke'
        },{
            'className': 'wi wi-dust',
            'name': 'Dust'
        },{
            'className': 'wi wi-snow-wind',
            'name': 'Snow Wind'
        },{
            'className': 'wi wi-day-snow-wind',
            'name': 'Day Snow Wind'
        },{
            'className': 'wi wi-night-snow-wind',
            'name': 'Night Snow Wind'
        },{
            'className': 'wi wi-night-alt-snow-wind',
            'name': 'Night Alt Snow Wind'
        },{
            'className': 'wi wi-day-sleet-storm',
            'name': 'Day Sleet Storm'
        },{
            'className': 'wi wi-night-sleet-storm',
            'name': 'Night Sleet Storm'
        },{
            'className': 'wi wi-night-alt-sleet-storm',
            'name': 'Night Alt Sleet Storm'
        },{
            'className': 'wi wi-day-snow-thunderstorm',
            'name': 'Day Snow Thunderstorm'
        },{
            'className': 'wi wi-night-snow-thunderstorm',
            'name': 'Night Snow Thunderstorm'
        },{
            'className': 'wi wi-night-alt-snow-thunderstorm',
            'name': 'Night Alt Snow Thunderstorm'
        },{
            'className': 'wi wi-solar-eclipse',
            'name': 'Solar Eclipse'
        },{
            'className': 'wi wi-lunar-eclipse',
            'name': 'Lunar Eclipse'
        },{
            'className': 'wi wi-meteor',
            'name': 'Meteor'
        },{
            'className': 'wi wi-hot',
            'name': 'Hot'
        },{
            'className': 'wi wi-hurricane',
            'name': 'Hurricane'
        },{
            'className': 'wi wi-smog',
            'name': 'Smog'
        },{
            'className': 'wi wi-alien',
            'name': 'Alien'
        },{
            'className': 'wi wi-snowflake-cold',
            'name': 'Snowflake Cold'
        },{
            'className': 'wi wi-stars',
            'name': 'Stars'
        },{
            'className': 'wi wi-night-partly-cloudy',
            'name': 'Night Partly Cloudy'
        },{
            'className': 'wi wi-umbrella',
            'name': 'Umbrella'
        },{
            'className': 'wi wi-day-windy',
            'name': 'Day Windy'
        },{
            'className': 'wi wi-night-alt-cloudy',
            'name': 'Night Alt Cloudy'
        },{
            'className': 'wi wi-up-left',
            'name': 'Up Left'
        },{
            'className': 'wi wi-down-right',
            'name': 'Down Right'
        },{
            'className': 'wi wi-time-12',
            'name': 'Time 12'
        },{
            'className': 'wi wi-time-1',
            'name': 'Time 1'
        },{
            'className': 'wi wi-time-2',
            'name': 'Time 2'
        },{
            'className': 'wi wi-time-3',
            'name': 'Time 3'
        },{
            'className': 'wi wi-time-4',
            'name': 'Time 4'
        },{
            'className': 'wi wi-time-5',
            'name': 'Time 5'
        },{
            'className': 'wi wi-time-6',
            'name': 'Time 6'
        },{
            'className': 'wi wi-time-7',
            'name': 'Time 7'
        },{
            'className': 'wi wi-time-8',
            'name': 'Time 8'
        },{
            'className': 'wi wi-time-9',
            'name': 'Time 9'
        },{
            'className': 'wi wi-time-10',
            'name': 'Time 10'
        },{
            'className': 'wi wi-time-11',
            'name': 'Time 11'
        },{
            'className': 'wi wi-day-sleet',
            'name': 'Day Sleet'
        },{
            'className': 'wi wi-night-sleet',
            'name': 'Night Sleet'
        },{
            'className': 'wi wi-night-alt-sleet',
            'name': 'Night Alt Sleet'
        },{
            'className': 'wi wi-sleet',
            'name': 'Sleet'
        },{
            'className': 'wi wi-day-haze',
            'name': 'Day Haze'
        },{
            'className': 'wi wi-beafort-0',
            'name': 'Beafort 0'
        },{
            'className': 'wi wi-beafort-1',
            'name': 'Beafort 1'
        },{
            'className': 'wi wi-beafort-2',
            'name': 'Beafort 2'
        },{
            'className': 'wi wi-beafort-3',
            'name': 'Beafort 3'
        },{
            'className': 'wi wi-beafort-4',
            'name': 'Beafort 4'
        },{
            'className': 'wi wi-beafort-5',
            'name': 'Beafort 5'
        },{
            'className': 'wi wi-beafort-6',
            'name': 'Beafort 6'
        },{
            'className': 'wi wi-beafort-7',
            'name': 'Beafort 7'
        },{
            'className': 'wi wi-beafort-8',
            'name': 'Beafort 8'
        },{
            'className': 'wi wi-beafort-9',
            'name': 'Beafort 9'
        },{
            'className': 'wi wi-beafort-10',
            'name': 'Beafort 10'
        },{
            'className': 'wi wi-beafort-11',
            'name': 'Beafort 11'
        },{
            'className': 'wi wi-beafort-12',
            'name': 'Beafort 12'
        },{
            'className': 'wi wi-wind-default',
            'name': 'Wind Default'
        },{
            'className': 'wi wi-moon-new',
            'name': 'Moon New'
        },{
            'className': 'wi wi-moon-waxing-cresent-1',
            'name': 'Moon Waxing Cresent 1'
        },{
            'className': 'wi wi-moon-waxing-cresent-2',
            'name': 'Moon Waxing Cresent 2'
        },{
            'className': 'wi wi-moon-waxing-cresent-3',
            'name': 'Moon Waxing Cresent 3'
        },{
            'className': 'wi wi-moon-waxing-cresent-4',
            'name': 'Moon Waxing Cresent 4'
        },{
            'className': 'wi wi-moon-waxing-cresent-5',
            'name': 'Moon Waxing Cresent 5'
        },{
            'className': 'wi wi-moon-waxing-cresent-6',
            'name': 'Moon Waxing Cresent 6'
        },{
            'className': 'wi wi-moon-first-quarter',
            'name': 'Moon First Quarter'
        },{
            'className': 'wi wi-moon-waxing-gibbous-1',
            'name': 'Moon Waxing Gibbous 1'
        },{
            'className': 'wi wi-moon-waxing-gibbous-2',
            'name': 'Moon Waxing Gibbous 2'
        },{
            'className': 'wi wi-moon-waxing-gibbous-3',
            'name': 'Moon Waxing Gibbous 3'
        },{
            'className': 'wi wi-moon-waxing-gibbous-4',
            'name': 'Moon Waxing Gibbous 4'
        },{
            'className': 'wi wi-moon-waxing-gibbous-5',
            'name': 'Moon Waxing Gibbous 5'
        },{
            'className': 'wi wi-moon-waxing-gibbous-6',
            'name': 'Moon Waxing Gibbous 6'
        },{
            'className': 'wi wi-moon-full',
            'name': 'Moon Full'
        },{
            'className': 'wi wi-moon-waning-gibbous-1',
            'name': 'Moon Waning Gibbous 1'
        },{
            'className': 'wi wi-moon-waning-gibbous-2',
            'name': 'Moon Waning Gibbous 2'
        },{
            'className': 'wi wi-moon-waning-gibbous-3',
            'name': 'Moon Waning Gibbous 3'
        },{
            'className': 'wi wi-moon-waning-gibbous-4',
            'name': 'Moon Waning Gibbous 4'
        },{
            'className': 'wi wi-moon-waning-gibbous-5',
            'name': 'Moon Waning Gibbous 5'
        },{
            'className': 'wi wi-moon-waning-gibbous-6',
            'name': 'Moon Waning Gibbous 6'
        },{
            'className': 'wi wi-moon-3rd-quarter',
            'name': 'Moon 3rd Quarter'
        },{
            'className': 'wi wi-moon-waning-crescent-1',
            'name': 'Moon Waning Crescent 1'
        },{
            'className': 'wi wi-moon-waning-crescent-2',
            'name': 'Moon Waning Crescent 2'
        },{
            'className': 'wi wi-moon-waning-crescent-3',
            'name': 'Moon Waning Crescent 3'
        },{
            'className': 'wi wi-moon-waning-crescent-4',
            'name': 'Moon Waning Crescent 4'
        },{
            'className': 'wi wi-moon-waning-crescent-5',
            'name': 'Moon Waning Crescent 5'
        },{
            'className': 'wi wi-moon-waning-crescent-6',
            'name': 'Moon Waning Crescent 6'
        }];
        vm.iconSource = 'Select icon below to see HTML';
        vm.selectIcon = selectIcon;

        function selectIcon($event, icon) {
            var dialogContent = $compile('<div hljs language="html"><md-icon md-font-icon="' + icon.className + '"></md-icon></div>')($scope);
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element($document.body))
                .title('Here\'s the code for that icon')
                .htmlContent(dialogContent[0].innerHTML)
                .ok('Thanks')
                .targetEvent($event)
            );
        }
    }
})();

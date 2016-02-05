(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('DashboardSocialController', DashboardSocialController);

    /* @ngInject */
    function DashboardSocialController() {
        var vm = this;
        vm.whotofollow = [{
            name: 'Twitch',
            user: 'twitch',
            avatar: 'assets/images/avatars/avatar-1.png'
        },{
            name: 'MaterialUp',
            user: 'materialUP',
            avatar: 'assets/images/avatars/avatar-3.png'
        },{
            name: 'Bower',
            user: 'bower',
            avatar: 'assets/images/avatars/avatar-2.png'
        }];

        vm.trends = [
            '#DescribeTwitterIn3Words',
            '#OhNoHarry',
            '#mnimonio3',
            '#WeForgiveYouAriana',
            '#FifthHarmonyTODAY',
            'Omar Sharif',
            'Go Set a Watchman',
            'Ηρωδειο',
            'Ryanair',
            'Η ΕΡΤ'
        ];

        vm.favorites = [{
            name: 'Twitch',
            avatar: 'assets/images/avatars/avatar-1.png',
            user: 'twitch',
            date: moment().subtract(1, 'hour'),
            tweet: 'We had an absolute blast bringing @E3 to you this year. Check out our video recap.'
        },{
            name: 'PixelBucket',
            avatar: 'assets/images/avatars/avatar-2.png',
            user: 'twitch',
            date: moment().subtract(1, 'days'),
            tweet: 'Turn a Pencil Sketch Into a Colorful and Dynamic Character Illustration http://bit.ly/1HoJhbN  @TutsPlusDesign'
        },{
            name: 'Webdesigntuts',
            avatar: 'assets/images/avatars/avatar-3.png',
            user: 'wdtuts',
            date: moment().subtract(2, 'days'),
            tweet: '100 people have entered our challenge to win @CodePen & @envatomarket goodies! 2 days left :) http://ow.ly/PqjP9'
        },{
            name: 'BestCSS',
            avatar: 'assets/images/avatars/avatar-4.png',
            user: 'bestcss',
            date: moment().subtract(3, 'days'),
            tweet: '#Site of the Day'
        },{
            name: 'MaterialUP',
            avatar: 'assets/images/avatars/avatar-5.png',
            user: 'materialup',
            date: moment().subtract(4, 'days'),
            tweet: 'OnePlus One Mockup PSD - Mockup by @zerpixelung'
        },{
            name: 'Webdesigner Depot',
            avatar: 'assets/images/avatars/avatar-6.png',
            user: 'DesignerDepot',
            date: moment().subtract(7, 'days'),
            tweet: 'Semantic UI 2.0: Design beautiful websites quicker http://depot.ly/Pq6oC'
        }];
    }
})();
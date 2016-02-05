(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .directive('twitterWidget', twitterWidget);

    /* @ngInject */
    function twitterWidget() {
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
            $scope.tweets = [{
                user: 'oxygenna',
                body: 'Don\'t miss it! A Material Design Avatar set with 1440 avatars! http://sellfy.com/p/EUcC/ #avatars #materialdesign'
            },{
                user: 'oxygenna',
                body: 'Looking for a design for emotion case study to convince the boss/client? This one\'s worth $2.8 million.'
            },{
                user: 'oxygenna',
                body: 'New Freebie! A set of 27 Drinks-Lifestyle Icons available in PSD/AI/PNG format #freebie #icons #drinks http://wp.me/p5Xp06-Fq'
            }];

            $scope.selectedTab = 0;

            $scope.prevTweet = function() {
                $scope.selectedTab--;
                if($scope.selectedTab < 0) {
                    $scope.selectedTab = $scope.tweets.length - 1;
                }
            };

            $scope.nextTweet = function() {
                $scope.selectedTab++;
                if($scope.selectedTab === $scope.tweets.length) {
                    $scope.selectedTab = 0;
                }
            };
        }
    }
})();
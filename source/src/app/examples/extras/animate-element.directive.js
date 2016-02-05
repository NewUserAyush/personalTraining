(function() {
    'use strict';

    angular
        .module('app.examples.extras')
        .directive('animateElements', animateElements);

    /* @ngInject */
    function animateElements($interval) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element) {
            var $widgets  = [];
            var $dividers = [];


            function isLoaded(widget) {
                return widget.clientHeight > 1;
            }

            // using interval checking since window load event does not work on some machines
            var widgetsLoaded = $interval(function() {
                $widgets = $element.find('.timeline-widget');
                if($widgets.length > 0 && $widgets.toArray().every(isLoaded)) {
                    $dividers = $element.find('.timeline-x-axis');
                    onScrollCallback();
                    $interval.cancel(widgetsLoaded);
                }
            }, 1000);

            var onScrollCallback =  function() {
                for(var i = 0; i < $widgets.length; i++) {
                    if(angular.element($widgets[i]).offset().top <= angular.element(window).scrollTop() + angular.element(window).height() * 0.80 && angular.element($widgets[i]).height() > 1) {
                        var dir = ( i % 2 === 0 ) ? 'left':'right';
                        angular.element($dividers[i]).addClass('timeline-content-animated '+ dir);
                        angular.element($widgets[i]).addClass('timeline-content-animated '+ dir);
                    }
                }
            };

            angular.element('md-content').bind('scroll', onScrollCallback).scroll();
        }
    }
})();

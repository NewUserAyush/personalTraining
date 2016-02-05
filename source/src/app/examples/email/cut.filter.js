(function() {
    'use strict';

    angular
        .module('app.examples.email')
        .filter('cut', cut);

    function cut() {
        return filterFunction;

        ////////////////

        function filterFunction(value, wordwise, max, tail) {
            if (!value) {
                return '';
            }

            max = parseInt(max, 10);
            if (!max) {
                return value;
            }
            if (value.length <= max) {
                return value;
            }

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace !== -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        }
    }

})();
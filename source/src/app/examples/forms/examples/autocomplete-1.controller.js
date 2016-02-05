(function() {
    'use strict';

    angular
        .module('app.examples.forms')
        .controller('Autocomplete1Controller', Autocomplete1Controller);

    /* @ngInject */
    function Autocomplete1Controller($timeout, $q, $log) {
        var vm = this;
        // list of `state` value/display objects
        vm.states             = loadAll();
        vm.selectedItem       = null;
        vm.searchText         = null;
        vm.querySearch        = querySearch;
        vm.simulateQuery      = false;
        vm.isDisabled         = false;
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange   = searchTextChange;

        //////////////////
        function querySearch (query) {
            var results = query ? vm.states.filter( createFilterFor(query) ) : vm.states, deferred;
            if(self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + item);
        }

        /**
        * Build `states` list of key/value pairs
        */
        function loadAll() {
        /* jshint multistr: true */
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                Wisconsin, Wyoming';

            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
        * Create filter function for a query string
        */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }
})();
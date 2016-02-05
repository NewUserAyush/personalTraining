(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .controller('ChipsController', ChipsController);

    /* @ngInject */
    function ChipsController(contacts) {
        var vm = this;
        vm.email = {
            to: [],
            cc: [],
            bcc: []
        };
        vm.queryContacts = queryContacts;

        ////////////////

        function queryContacts($query) {
            var lowercaseQuery = angular.lowercase($query);
            return contacts.data.filter(function(contact) {
                var lowercaseName = angular.lowercase(contact.name);
                if (lowercaseName.indexOf(lowercaseQuery) !== -1) {
                    return contact;
                }
            });
        }
    }
})();
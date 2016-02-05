(function() {
    'use strict';

    angular
        .module('app.examples.email')
        .controller('EmailDialogController', EmailDialogController);

    /* @ngInject */
    function EmailDialogController($timeout, $mdDialog, $filter, triSkins, textAngularManager, title, email, contacts, getFocus) {
        var contactsData = contacts.data;

        var vm = this;
        vm.cancel = cancel;
        vm.email = email;
        vm.title = title;
        vm.send = send;
        vm.showCCSIcon = 'zmdi zmdi-caret-down';
        vm.showCCS = false;
        vm.toggleCCS = toggleCCS;
        vm.triSkin = triSkins.getCurrent();
        vm.queryContacts = queryContacts;

        ///////////////

        function cancel() {
            $mdDialog.cancel();
        }

        function toggleCCS() {
            vm.showCCS = !vm.showCCS;
            vm.showCCSIcon = vm.showCCS ? 'zmdi zmdi-caret-up' : 'zmdi zmdi-caret-down';
        }

        function send() {
            $mdDialog.hide(vm.email);
        }

        function queryContacts($query) {
            var lowercaseQuery = angular.lowercase($query);
            return contactsData.filter(function(contact) {
                var lowercaseName = angular.lowercase(contact.name);
                if (lowercaseName.indexOf(lowercaseQuery) !== -1) {
                    return contact;
                }
            });
        }

        ////////////////
        if(getFocus) {
            $timeout(function() {
                // Retrieve the scope and trigger focus
                var editorScope = textAngularManager.retrieveEditor('emailBody').scope;
                editorScope.displayElements.text.trigger('focus');
            }, 500);
        }
    }
})();
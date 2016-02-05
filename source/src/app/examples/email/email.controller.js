(function() {
    'use strict';

    angular
        .module('app.examples.email')
        .controller('EmailController', EmailController);

    /* @ngInject */
    function EmailController($scope, $stateParams, $mdDialog, $mdToast, $filter, emails, email, contacts) {
        var vm = this;
        vm.closeEmail = closeEmail;
        vm.deleteEmail = deleteEmail;
        vm.email = email;
        vm.emailAction = emailAction;
        vm.menuClick = menuClick;

        /////////////////

        function closeEmail() {
            $scope.$emit('closeEmail');
        }

        function deleteEmail(email) {
            $scope.$emit('deleteEmail', email);
        }

        function emailAction(title) {
            var replyEmail = {
                to: [],
                cc: [],
                bcc: [],
                // add r.e to subject if there is one
                subject: email.subject === '' ? '' : $filter('translate')('EMAIL.RE') + email.subject,
                // wrap previous content in blockquote and add new line
                content: '<br><br><blockquote>' + email.content + '</blockquote>'
            };

            // get contact and add it to to if replying
            angular.forEach(contacts.data, function(contact) {
                if(contact.email === email.from.email) {
                    replyEmail.to.push(contact);
                }
            });

            openEmail(replyEmail, $filter('translate')(title));
        }

        function menuClick($event) {
            // store copy of button click event to use for dialog animations
            vm.menuClickEvent = $event;
        }

        function openEmail(email, title) {
            $mdDialog.show({
                controller: 'EmailDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/email/email-dialog.tmpl.html',
                targetEvent: vm.menuClickEvent,
                locals: {
                    title: title,
                    email: email,
                    contacts: contacts,
                    getFocus: true
                },
                focusOnOpen: false
            })
            .then(function(email) {
                // send email sent event
                $scope.$emit('sendEmail', email);
            }, cancelEmail);

            function cancelEmail() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('EMAIL.CANCELED'))
                    .position('bottom right')
                    .hideDelay(3000)
                );
            }
        }
    }
})();
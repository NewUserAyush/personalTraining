(function() {
    'use strict';

    angular
        .module('app.examples.email')
        .controller('InboxController', InboxController);

    /* @ngInject */
    function InboxController($scope, $filter, $location, $state, $mdMedia, $mdBottomSheet, $stateParams, $mdDialog, $mdToast, emails, contacts) {
        var vm = this;
        // store the base state of where we are /inbox or /trash or /sent
        // this can be then used if we close / delete email to return to
        vm.baseState = $state.current;
        vm.composeClick = composeClick;
        vm.inboxBasePath = $location.path();
        vm.openMail = openMail;
        // store selected email if we have one
        vm.selectedMail = null;
        // variable to store backup of emailGroups for search filtering
        var emailGroupsBackup = null;

        ////////////////////

        function createEmailGroups() {
            // create email groups using the emails from the resolve
            if(emails.status === 200) {
                vm.emails = emails.data;

                vm.emailGroups = [{
                    name: $filter('translate')('EMAIL.INBOX.GROUPS.TODAY'),
                    from: moment().startOf('day'),
                    to: moment().endOf('day')
                },{
                    name: $filter('translate')('EMAIL.INBOX.GROUPS.YESTERDAY'),
                    from: moment().subtract(1, 'days').startOf('day'),
                    to: moment().subtract(1, 'days').endOf('day')
                },{
                    name: $filter('translate')('EMAIL.INBOX.GROUPS.OLDER'),
                    from: moment().subtract(100, 'years').endOf('day'),
                    to: moment().subtract(2, 'days').startOf('day')
                }];

                angular.forEach(vm.emailGroups, function(group) {
                    group.emails = $filter('emailGroup')(vm.emails, group);
                });

                // create backup of emailGroups for search filtering
                emailGroupsBackup = angular.copy(vm.emailGroups);
            }
        }

        // opens an email
        function openMail(email) {
            $state.go(vm.baseState.name + '.email', {
                emailID: email.id
            });
            email.unread = false;
            vm.selectedMail = email.id;
        }

        // returns back to email list
        function openlist() {
            $state.go(vm.baseState.name);
        }

        // opens the compose dialog
        function composeClick($event) {
            $mdDialog.show({
                controller: 'EmailDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/email/email-dialog.tmpl.html',
                targetEvent: $event,
                locals: {
                    title: $filter('translate')('EMAIL.NEW'),
                    email: {
                        to: [],
                        cc: [],
                        bcc:[],
                        subject: '',
                        content: ''
                    },
                    contacts: contacts,
                    getFocus: false
                }
            })
            .then(function(email) {
                sendEmail(null, email);
            }, emailCancel);

            function emailCancel() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('EMAIL.CANCELED'))
                    .position('bottom right')
                    .hideDelay(3000)
                );
            }
        }

        function sendEmail($event, email) {
            // make list of users that have been sent to
            var sentTo = [];
            angular.forEach(email.to, function(to) {
                sentTo.push(to.name);
            });
            $mdToast.show(
                $mdToast.simple()
                .content($filter('translate')('EMAIL.SENT', {to: sentTo.join(', ')}))
                .position('bottom right')
                .hideDelay(3000)
            );
        }

        function checkEmailList() {
            vm.showEmailList = !($mdMedia('xs') && angular.isDefined($state.current.resolve.email));
        }

        // watches

        $scope.$on('emailSearch', function(event, emailSearch) {
            for(var g in emailGroupsBackup) {
                vm.emailGroups[g].emails = $filter('emailSearchFilter')(emailGroupsBackup[g].emails, emailSearch);
            }
        });

        // add a watch for when the url location changes
        $scope.$on('$locationChangeSuccess', checkEmailList);

        // handle delete email event sent from email menu in email view
        $scope.$on('deleteEmail', function($event, deleteEmail) {
            angular.forEach(vm.emailGroups, function(group) {
                var removeEmailIndex = null;
                angular.forEach(group.emails, function(email, index) {
                    if(deleteEmail.id === email.id) {
                        removeEmailIndex = index;
                    }
                });
                if(null !== removeEmailIndex) {
                    group.emails.splice(removeEmailIndex, 1);
                    $mdToast.show(
                        $mdToast.simple()
                        .content($filter('translate')('EMAIL.DELETED'))
                        .position('bottom right')
                        .hideDelay(3000)
                    );
                }
            });

            openlist();
        });

        // handle close email event sent from email menu in email view
        $scope.$on('closeEmail', openlist);

        // handle close email event sent from email controller
        $scope.$on('sendEmail', sendEmail);

        // init

        checkEmailList();

        createEmailGroups();
    }
})();
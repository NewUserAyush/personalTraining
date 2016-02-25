/**
 * Created by Admin on 2/15/2016.
 */
(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .service('instructorService', fn);

    /* @ngInject */
    function fn()
    {
        var a = [{id: 11, name: 'jay', age: 31, style: 'dance', doj: "31/12/2015"},
            {id: 12, name: 'ayush', age: 33, style: 'math', doj: "12/2/2015"},
            {id: 14, name: 'ram', age: 25, style: 'hindi', doj: "12/3/2015"},
            {id: 15, name: 'shyam', age: 23, style: 'english', doj: "22/04/2016"},
            {id: 16, name: 'Raju', age: 26, style: 'computer', doj: "31/12/2012"},
            {id: 17, name: 'priya', age: 45, style: 'physics', doj: "31/12/2011"},
            {id: 18, name: 'shraddha', age: 25, style: 'chemistry', doj: "31/12/2013"},
            {id: 19, name: 'snehil', age: 545, style: 'urdu', doj: "31/12/2009"},
            {id: 20, name: 'amit', age: 65, style: 'geogorophy', doj: "31/12/2008"},
            {id: 21, name: 'samu', age: 75, style: 'biology', doj: "31/12/2007"},
            {id: 22, name: 'ajay', age: 35, style: 'giology', doj: "02/02/2006"},
            {id: 23, name: 'rahul', age: 15, style: 'phycology', doj: "31/07/2013"},
            {id: 24, name: 'jai', age: 95, style: 'image proccessing', doj: "31/9/2015"},
            {id: 25, name: 'aman', age: 85, style: 'graphics', doj: "31/12/2015"},
            {id: 26, name: 'raman', age: 89, style: '', doj: "31/12/2015"},
            {id: 27, name: 'chaman', age: 67, style: 'information Technology', doj: "05/12/2012"},
            {id: 28, name: 'daman', age: 78, style: 'Data structure', doj: "31/09/2014"},
            {id: 29, name: 'saman', age: 89, style: 'Algorithms', doj: "12/08/2014"}
        ]

        this.getData=getData;
        this.getDetail = getDetail;

        function getData() {


            return a;
          }
        // store the base state of where we are /inbox or /trash or /sent
        // this can be then used if we close / delete email to return to
        //vm.baseState = $state.current;
        //vm.composeClick = composeClick;
        //vm.inboxBasePath = $location.path();
        //vm.openMail = openMail;
        //// store selected email if we have one
        //vm.selectedMail = null;
        //// variable to store backup of emailGroups for search filtering
        //var emailGroupsBackup = null;
        //
        //////////////////////
        //
        //function createEmailGroups() {
        //    // create email groups using the emails from the resolve
        //    if(emails.status === 200) {
        //        vm.emails = emails.data;
        //
        //        vm.emailGroups = [{
        //            name: $filter('translate')('EMAIL.INBOX.GROUPS.TODAY'),
        //            from: moment().startOf('day'),
        //            to: moment().endOf('day')
        //        },{
        //            name: $filter('translate')('EMAIL.INBOX.GROUPS.YESTERDAY'),
        //            from: moment().subtract(1, 'days').startOf('day'),
        //            to: moment().subtract(1, 'days').endOf('day')
        //        },{
        //            name: $filter('translate')('EMAIL.INBOX.GROUPS.OLDER'),
        //            from: moment().subtract(100, 'years').endOf('day'),
        //            to: moment().subtract(2, 'days').startOf('day')
        //        }];
        //
        //        angular.forEach(vm.emailGroups, function(group) {
        //            group.emails = $filter('emailGroup')(vm.emails, group);
        //        });
        //
        //        // create backup of emailGroups for search filtering
        //        emailGroupsBackup = angular.copy(vm.emailGroups);
        //    }
        //}
        //
        //// opens an email
        //function openMail(email) {
        //    $state.go(vm.baseState.name + '.email', {
        //        emailID: email.id
        //    });
        //    email.unread = false;
        //    vm.selectedMail = email.id;
        //}
        //
        //// returns back to email list
        //function openlist() {
        //    $state.go(vm.baseState.name);
        //}
        //
        //// opens the compose dialog
        //function composeClick($event) {
        //    $mdDialog.show({
        //        controller: 'EmailDialogController',
        //        controllerAs: 'vm',
        //        templateUrl: 'app/examples/email/email-dialog.tmpl.html',
        //        targetEvent: $event,
        //        locals: {
        //            title: $filter('translate')('EMAIL.NEW'),
        //            email: {
        //                to: [],
        //                cc: [],
        //                bcc:[],
        //                subject: '',
        //                content: ''
        //            },
        //            contacts: contacts,
        //            getFocus: false
        //        }
        //    })
        //    .then(function(email) {
        //        sendEmail(null, email);
        //    }, emailCancel);
        //
        //    function emailCancel() {
        //        $mdToast.show(
        //            $mdToast.simple()
        //            .content($filter('translate')('EMAIL.CANCELED'))
        //            .position('bottom right')
        //            .hideDelay(3000)
        //        );
        //    }
        //}
        //
        //function sendEmail($event, email) {
        //    // make list of users that have been sent to
        //    var sentTo = [];
        //    angular.forEach(email.to, function(to) {
        //        sentTo.push(to.name);
        //    });
        //    $mdToast.show(
        //        $mdToast.simple()
        //        .content($filter('translate')('EMAIL.SENT', {to: sentTo.join(', ')}))
        //        .position('bottom right')
        //        .hideDelay(3000)
        //    );
        //}
        //
        //function checkEmailList() {
        //    vm.showEmailList = !($mdMedia('xs') && angular.isDefined($state.current.resolve.email));
        //}
        //
        //// watches
        //
        //$scope.$on('emailSearch', function(event, emailSearch) {
        //    for(var g in emailGroupsBackup) {
        //        vm.emailGroups[g].emails = $filter('emailSearchFilter')(emailGroupsBackup[g].emails, emailSearch);
        //    }
        //});
        //
        //// add a watch for when the url location changes
        //$scope.$on('$locationChangeSuccess', checkEmailList);
        //
        //// handle delete email event sent from email menu in email view
        //$scope.$on('deleteEmail', function($event, deleteEmail) {
        //    angular.forEach(vm.emailGroups, function(group) {
        //        var removeEmailIndex = null;
        //        angular.forEach(group.emails, function(email, index) {
        //            if(deleteEmail.id === email.id) {
        //                removeEmailIndex = index;
        //            }
        //        });
        //        if(null !== removeEmailIndex) {
        //            group.emails.splice(removeEmailIndex, 1);
        //            $mdToast.show(
        //                $mdToast.simple()
        //                .content($filter('translate')('EMAIL.DELETED'))
        //                .position('bottom right')
        //                .hideDelay(3000)
        //            );
        //        }
        //    });
        //
        //    openlist();
        //});
        //
        //// handle close email event sent from email menu in email view
        //$scope.$on('closeEmail', openlist);
        //
        //// handle close email event sent from email controller
        //$scope.$on('sendEmail', sendEmail);
        //
        //// init
        //
        //checkEmailList();
        //
        //createEmailGroups();

        function getDetail(id)
        {
            var result;

            result =   a.filter(function(data){
                if(data.id === parseInt(id))
                {
                    return data;
                };
            })

            return result;

        }

    }
})();

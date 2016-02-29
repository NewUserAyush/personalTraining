(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('DefaultToolbarController', DefaultToolbarController);

    /* @ngInject */
    function DefaultToolbarController($scope, $rootScope, $mdMedia, $translate, $state, $element, $filter, $mdUtil, $mdSidenav, $mdToast, $timeout, $document, triBreadcrumbsService, triSettings, triLayout,$mdDialog,Facebook,triMenu,$cookieStore) {
        var vm = this;
        vm.fbUserName = null;
       // vm.goToFbLogin = goToFbLogin;
        vm.breadcrumbs = triBreadcrumbsService.breadcrumbs;
        vm.emailNew = false;
        vm.languages = triSettings.languages;
        vm.openSideNav = openSideNav;
        vm.hideMenuButton = hideMenuButton;
        vm.switchLanguage = switchLanguage;
        vm.toggleNotificationsTab = toggleNotificationsTab;
        vm.isFullScreen = false;
        vm.fullScreenIcon = 'zmdi zmdi-fullscreen';
        vm.toggleFullScreen = toggleFullScreen;
        vm.toggleSearch=toggleSearch;
        vm.showSearch = false;
        // initToolbar();
        function init()
        {
            //if session load it in vm.fbusername
            if($cookieStore.get('fblog'))
            vm.fbUserName=$cookieStore.get('fblog');
        }
        init();
        ////////////////
        function toggleSearch() {
            vm.showSearch = !vm.showSearch;
        }


        function openSideNav(navID) {
            $mdUtil.debounce(function(){
                $mdSidenav(navID).toggle();
            }, 300)();
        }

        function switchLanguage(languageCode) {
            $translate.use(languageCode)
            .then(function() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('MESSAGES.LANGUAGE_CHANGED'))
                    .position('bottom right')
                    .hideDelay(500)
                );
            });
        }

        function hideMenuButton() {
            return triLayout.layout.sideMenuSize !== 'hidden' && $mdMedia('gt-sm');
        }

        function toggleNotificationsTab() {
            $state.go("triangular-no-scroll.admin-default-no-scroll.login.login.tmpl.html");
        }

        function toggleFullScreen() {
            vm.isFullScreen = !vm.isFullScreen;
            vm.fullScreenIcon = vm.isFullScreen ? 'zmdi zmdi-fullscreen-exit':'zmdi zmdi-fullscreen';
            // more info here: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
            var doc = $document[0];
            if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement ) {
                if (doc.documentElement.requestFullscreen) {
                    doc.documentElement.requestFullscreen();
                } else if (doc.documentElement.msRequestFullscreen) {
                    doc.documentElement.msRequestFullscreen();
                } else if (doc.documentElement.mozRequestFullScreen) {
                    doc.documentElement.mozRequestFullScreen();
                } else if (doc.documentElement.webkitRequestFullscreen) {
                    doc.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                } else if (doc.msExitFullscreen) {
                    doc.msExitFullscreen();
                } else if (doc.mozCancelFullScreen) {
                    doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) {
                    doc.webkitExitFullscreen();
                }
            }
        }

        $scope.$on('newMailNotification', function(){
            vm.emailNew = true;
        })
        //$rootScope.$on('notifyFBUser', function(event,data){
        //    vm.fbUserName  = data.userName;
        //});
        //
        //function goToFbLogin()
        //{
        //    $state.go("authentication.login");
        //}

        $scope.showAdvanced = function(ev) {
            if(vm.fbUserName)
            {
                Facebook.logout(function(){
                    //remove session
                    $cookieStore.remove('fblog');
                    vm.fbUserName=null;
                    triMenu.removeMenu('triangular-no-scroll.admin-default-no-scroll.instructor');
                    triMenu.removeMenu('triangular.admin-default.student_information');
                    triMenu.removeMenu('triangular.admin-default.extra-blank');
                } );
                return;
            }
            var useFullScreen = ($mdMedia('lg')||$mdMedia('gt')||$mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
                    controller: 'LoginController',
                    templateUrl: 'app/examples/authentication/login/login.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true,
                    fullscreen: useFullScreen
                })
                .then(function(answer) {
                    //save
                    $cookieStore.put('fblog',answer);
                    vm.fbUserName = answer;
                    triMenu.addMenu({
                        name: 'Admin',
                        icon: 'zmdi zmdi-view-list-alt',
                        type: 'dropdown',
                        priority: 1.5,
                        children: [{
                            name: 'Instructor',
                            state: 'triangular-no-scroll.admin-default-no-scroll.instructor',
                            icon: 'zmdi zmdi-account-box',
                            type: 'link'
                        },{
                            name: 'student_information',
                            state: 'triangular.admin-default.student_information',
                            icon: 'zmdi zmdi-library',
                            type: 'link'
                        },{
                            name: 'blank-3',
                            state: 'triangular.admin-default.extra-blank',
                            icon: 'zmdi zmdi-view-list-alt',
                            type: 'link'
                        }]
                    });
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };
    }
})();

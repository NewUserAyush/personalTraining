(function() {
    'use strict';

    angular
        .module('app.examples.authentication')
        .controller('LoginController', LoginController);

    /* @ngInject */

    function LoginController($state, triSettings,$scope, $auth,Facebook,$rootScope,$mdDialog,$http,$location,$cookieStore) {
        var vm = this;
        //vm.loginClick = loginClick;

        //vm.socialLogins = [{
        //    icon: 'fa fa-twitter',
        //    color: '#5bc0de',
        //    url: '#'
        //},{
        //    icon: 'fa fa-facebook',
        //    color: '#337ab7',
        //    url: '#'
        //},{
        //    icon: 'fa fa-google-plus',
        //    color: '#e05d6f',
        //    url: '#'
        //},{
        //    icon: 'fa fa-linkedin',
        //    color: '#337ab7',
        //    url: '#'
        //}];

        vm.triSettings = triSettings;
        // create blank user variable for login form
        //vm.user = {
        //    email: '',
        //    password: ''
        //};

////////////////////////////
        var userName=null;
        $scope.isLoggedIn=false;
        $scope.toggleLogIn=function(isLoggedIn)
        {
            if(isloggedIn) $scope.logout();
            else  $scope.IntentLogin();
        };

        $scope.Login=function()
        {
            Facebook.login(function(responce)
            {
                if(responce.status=='connected')
                {
                    Facebook.api('/me',function (responce)
                    {

                        $mdDialog.hide(responce.first_name);

                        //$rootScope.$emit("notifyFBUser",{userName:responce.first_name})
                       // $state.go("triangular.admin-default.home");

                    }
                    )
                }

            });
        };

        ////////////////

        //function loginClick() {
        //    $state.go('triangular.admin-default.introduction');
        //}
    }
})();

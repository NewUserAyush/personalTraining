(function() {
    'use strict';

    angular
        .module('app.examples.forms')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/forms');

        $stateProvider
        .state('triangular.admin-default.forms-inputs', {
            url: '/forms/inputs',
            templateUrl: 'app/examples/forms/inputs.tmpl.html'
        })
        .state('triangular.admin-default.forms-binding', {
            url: '/forms/binding',
            templateUrl: 'app/examples/forms/binding.tmpl.html'
        })
        .state('triangular.admin-default.forms-autocomplete', {
            url: '/forms/autocomplete',
            templateUrl: 'app/examples/forms/autocomplete.tmpl.html'
        })
        .state('triangular.admin-default.forms-wizard', {
            url: '/forms/wizard',
            templateUrl: 'app/examples/forms/wizard.tmpl.html',
            controller: 'FormWizardController',
            controllerAs: 'wizardController',
            data: {
                layout: {
                    contentClass: 'full-image-background mb-bg-fb-02 background-overlay-static',
                    innerContentClass: 'overlay-gradient-20'
                }
            }
        })
        .state('triangular.admin-default.forms-validation', {
            url: '/forms/validation',
            templateUrl: 'app/examples/forms/validation.tmpl.html'
        });

        triMenuProvider.addMenu({
            name: 'MENU.FORMS.FORMS',
            icon: 'zmdi zmdi-calendar-check',
            type: 'dropdown',
            priority: 3.3,
            children: [{
                name: 'MENU.FORMS.AUTOCOMPLETE',
                type: 'link',
                state: 'triangular.admin-default.forms-autocomplete'
            },{
                name: 'MENU.FORMS.BINDING',
                type: 'link',
                state: 'triangular.admin-default.forms-binding'
            },{
                name: 'MENU.FORMS.INPUTS',
                type: 'link',
                state: 'triangular.admin-default.forms-inputs'
            },{
                name: 'MENU.FORMS.WIZARD',
                type: 'link',
                state: 'triangular.admin-default.forms-wizard'
            },{
                name: 'MENU.FORMS.VALIDATION',
                type: 'link',
                state: 'triangular.admin-default.forms-validation'
            }]
        });
        triMenuProvider.addMenu({
            type: 'divider',
            priority: 3.4
        });
    }
})();
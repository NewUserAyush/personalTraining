/**
 * Created by Jayant on 1/28/2016.
 */
(function() {
    'use strict';

    angular
        .module('pt.contact')
        .service('contactmodel', SalesService);

    /* @ngInject */
    function SalesService()
    {

        this.submitform=submitform;


        function  submitform(vms)
        {
            console.log(vms.STinfo);
        }
    }
})();

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
        this.getData = getData;
        this.submitform=submitform;


        function getData()
        {
            var a ={
                title:"contact",
                content:"Hello I am content"
            };

            return a;
        }

        function  submitform(studentInfo)
        {
            console.log(studentInfo);
        }
    }
})();

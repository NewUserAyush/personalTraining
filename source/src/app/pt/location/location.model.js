/**
 * Created by Jayant on 1/28/2016.
 */
(function() {
    'use strict';

    angular
        .module('pt.location')
        .service('locationmodel', SalesService);

    /* @ngInject */
    function SalesService()
    {
        this.getData = getData;



        function getData()
        {
            var a ={
                title:"Location",
                content:"Headquartered in Redmond, Washington, OfficeIntegrators Inc was incorporated in 2004." +
                " Today OfficeIntegrators Inc (OI) is the leading provider of Microsoft Office Apps. With offices in US, " +
                "India OI provides support from the conceptualization phase, leading to development and customization of Office Apps. " +
                "The team have been consistently delivering industry leading Office Customizations to its valued customers for over a decade."

            };

            return a;
        }
    }
})();

/**
 * Created by Jayant on 1/28/2016.
 */
(function() {
    'use strict';

    angular
        .module('pt.instructor')
        .service('instructormodel', SalesService);

    /* @ngInject */
    /* @ngInject */
    function SalesService(breeze, $q)
    {
        this.getData = getData;


        var serviceName='http://w2idemo.azurewebsites.net/breeze/home/';
        var manager = new breeze.EntityManager(serviceName);




        function getData()
        {
            //var a ={
            //    title:"Instructor",
            //    content:"Hello I am content"
            //     };

            var promise;
            var query= breeze.EntityQuery.from('instructor')
            var deferred=$q.defer();
            manager.executeQuery(query).then(function(result){
                deferred.resolve(result);
            })

            promise=deferred.promise;
            return promise;

        }
    }
})();

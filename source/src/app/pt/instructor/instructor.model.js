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
        var serviceName='http://w2idemo.azurewebsites.net/breeze/home/';
        var manager = new breeze.EntityManager(serviceName);
        //interface
        this.getData = getData;
        this.addItem = addItem;






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




        function addItem(a)
        {
            var a=
            {

                Name:"rahul",
                Student:"ahg",
                Location:"pune",
                Student_age:12,
                student_join_date:"12/14/14"
            }
            //var instructtype=manager.metadataStore.getEntities('instuctor');
            //var newinstruct=instructtype.createEntity(a);
            //return manager.addEntity(newinstuct);

            return manager.createEntity('Instructor', a);
        }

    }
})();


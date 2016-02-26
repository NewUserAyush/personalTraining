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
    function SalesService(breezeService)
    {
        //var serviceName='http://w2idemo.azurewebsites.net/breeze/home/';
        //var manager = new breeze.EntityManager(serviceName);
        //interface
        this.getData = getData;
        this.addItem = addItem;
        this.showItem=showItem;
        this.savedata=savedata;
        this.itemFilter=itemFilter;


        function getData()
        {
            var promise=breezeService.getEntities('instructors');
            return promise;


                //instructormodel.getData().then(function (data) {
                //    vm.items = data;
                //})

            //var promise;
            //var query= breeze.EntityQuery.from('instructor')
            //var deferred=$q.defer();
            //manager.executeQuery(query).then(function(result){
            //    //deferred.resolve(result);
            //    var query= breeze.EntityQuery.from('instructor')
            //    var arrData =  manager.executeQueryLocally(query);
            //    deferred.resolve(arrData);
            //})
            //
            //promise=deferred.promise;
            //return promise;



         }




        function addItem(tn,ts,tl,ta,td)
        {
            var a=
            {

                Name:tn,
                Student:ts,
                Location:tl,
                Student_age:ta,
                Student_join_date:td
            }
            //var instructtype=manager.metadataStore.getEntities('instuctor');
            //var newinstruct=instructtype.createEntity(a);
            //return manager.addEntity(newinstuct);

            return manager.createEntity('Instructor', a);
        }


        function showItem()
        {
            var query= breeze.EntityQuery.from('instructor')
           return  manager.executeQueryLocally(query);

            //var promise=manager.executeQueryLocally('instructor')
            //return promise;
        }

        function savedata()
        {

            return manager.saveChanges().then(function(success)
            {
                console.log(success);
            }).catch(function(error){
                console.log(error);
            });
        }


        function itemFilter() {

        }

    }
})();


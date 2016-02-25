/**
 * Created by akj on 2/24/2016.
 */

(function () {
    'use strict';
    angular
        .module('web2')
        .service('breezeService', Service);
    Service.$inject = ['breeze', '$q', '$rootScope', '$timeout'];
    /* @ngInject */
    function Service(breeze, $q, $rootScope, $timeout) {
        //private variables
        var serviceName = 'http://w2idemo.azurewebsites.net/breeze/home/';
        var manager = new breeze.EntityManager(serviceName);
        //interface
        this.isBreezeReady     = false;
        this.getMetadata       = getMetadata;
        this.getEntities       = getEntities;
        this.createEntity      = createEntity;
        this.getEntityById     = getEntityById;
        //
        function getMetadata() {
            var self = this;
            $rootScope.$emit('loadingActivity',{message:'configuring application please wait'});
            manager.metadataStore.fetchMetadata(serviceName).then(function () {
                self.isBreezeReady = true;
                $rootScope.$emit('loadedActivity');
            }).catch(_queryFailed);
        }
        //
        function createEntity(entityName,paramObj)
        {
            if(angular.isDefined(paramObj.Id))
            {
                return manager.saveChanges().catch(_queryFailed);
            }
            else
            {
                manager.createEntity(entityName,paramObj);
                return manager.saveChanges().catch(_queryFailed);
            }
        }
        //
        function getEntityById(entityName, id, forceRemote) {
            if (!forceRemote) {
                // check cache first
                var entity = manager.getEntityByKey(entityName, id);
                if (entity) {
                    if (entity.entityAspect.entityState.isDeleted()) {
                        entity = null; // hide session marked-for-delete
                    }
                    return $q.when(entity);
                }
            }
            // Hit the server
            // It was not found in cache, so let's query for it.
            return manager.fetchEntityByKey(entityName, id).catch(_queryFailed);
        }
        //
        function getEntities(entityName){
            var promise;
            var query = breeze.EntityQuery.from(entityName)
            var deferred = $q.defer();
            manager.executeQuery(query).
                then(function(result){
                    deferred.resolve(result);
                })
                .catch(function(error){
                    deferred.reject(error);
                } );
            promise = deferred.promise
            return promise;
        }


        function _queryFailed(error) {
            $rootScope.$emit('loadedActivity');
            $rootScope.$emit('service-error', error);
        }
    }


})();

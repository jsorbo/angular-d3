'use strict';

angular.module('services')
    .factory("cBioPortalService", ["$http", function($http) {
        var obj = {};
        obj.getData = function(queryString) {
            return $http({
                url: "http://www.cbioportal.org/webservice.do?" + queryString,
                method: "GET",
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }).then(function(response) {
                return response.data;
            });
        };
        return obj;
    }]);
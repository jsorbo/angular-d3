'use strict';

/**
 * @ngdoc function
 * @name angularD3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularD3App
 */
angular.module('angularD3App')
    .controller('MainCtrl', function ($scope,
        cancerStudiesService, typesOfCancerService, geneticProfilesService, caseListsService,
        profileDataService, extendedMutationDataService, clinicalDataService,
        proteinArrayInfoService, proteinArrayDataService) {
        var onGetDataComplete = function (data) {
            $scope.bioData = data;
        };

        var onError = function (reason) {
            $scope.error = "Error retrieving data";
        };

        $scope.getTypesOfCancerClick = function () {
            typesOfCancerService.getData()
                .then(onGetDataComplete, onError);
        };

        $scope.getCancerStudiesClick = function () {
            cancerStudiesService.getData()
                .then(onGetDataComplete, onError);
        };

        $scope.getGeneticProfilesClick = function () {
            geneticProfilesService.getData("skcm_yale")
                .then(onGetDataComplete, onError);
        };

        $scope.getCaseListsClick = function () {
            caseListsService.getData("skcm_yale")
                .then(onGetDataComplete, onError);
        };

        $scope.getProfileDataClick = function () {
            profileDataService.getData("skcm_yale_all", "skcm_yale_mutations", "BRAF")//+DNAH5+LRP1B+DCC+PTPRD+DNAH8+COL22A1+COL4A5+NRAS+RELN+COL5A1
                .then(onGetDataComplete, onError);
        };

        $scope.getExtendedMutationDataClick = function () {
            extendedMutationDataService.getData("skcm_yale_all", "skcm_yale_mutations", "BRAF")
                .then(onGetDataComplete, onError);
        };

        $scope.getClinicalDataClick = function () {
            clinicalDataService.getData("skcm_yale_all")
                .then(onGetDataComplete, onError);
        };

        $scope.getProteinArrayInfoClick = function () {
            proteinArrayInfoService.getData("skcm_yale", "protein_level", "BRAF")
                .then(onGetDataComplete, onError);
        };

        $scope.getProteinArrayDataClick = function () {
            proteinArrayDataService.getData("skcm_yale_all", "1")
                .then(onGetDataComplete, onError);
        };

        $scope.resetClick = function () {
            $scope.bioData = [];
        };
    });

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
            geneticProfilesService.getData("paac_jhu_2014")
                .then(onGetDataComplete, onError);
        };

        $scope.getCaseListsClick = function () {
            caseListsService.getData("paac_jhu_2014")
                .then(onGetDataComplete, onError);
        };

        $scope.getProfileDataClick = function () {
            profileDataService.getData("gbm_tcga_all", "gbm_tcga_mutations", "BRCA1+BRCA2+TP53")
                .then(onGetDataComplete, onError);
        };

        $scope.getExtendedMutationDataClick = function () {
            extendedMutationDataService.getData("gbm_tcga_all", "gbm_tcga_mutations", "EGFR+PTEN")
                .then(onGetDataComplete, onError);
        };

        $scope.getClinicalDataClick = function () {
            clinicalDataService.getData("ov_tcga_all")
                .then(onGetDataComplete, onError);
        };

        $scope.getProteinArrayInfoClick = function () {
            proteinArrayInfoService.getData("paac_jhu_2014")
                .then(onGetDataComplete, onError);
        };

        $scope.getProteinArrayDataClick = function () {
            proteinArrayDataService.getData("coadread_tcga_RPPA")
                .then(onGetDataComplete, onError);
        };

        $scope.resetClick = function () {
            $scope.bioData = [];
        }
    });

'use strict';

angular.module('services')
    .factory("genericDataService", ["cBioPortalService", "$parse", function (cBioPortalService, $parse) {
        var obj = {};
        obj.getData = function (queryString) {
            var parseData = function (data) {
                return Papa.parse(data, {
                    "header": "true",
                    "delimiter": "\t",
                    "comments": "#"
                }).data;
            }

            return cBioPortalService.getData(queryString)
                .then(function (response) {
                    return parseData(response);
                });
        };
        return obj;
    }])
    .factory("typesOfCancerService", ["genericDataService", function (genericDataService) {
        var obj = {};
        obj.getData = function () {
            var queryString = "cmd=getTypesOfCancer";
            return genericDataService.getData(queryString);
        };
        return obj;
    }])
    .factory("cancerStudiesService", ["genericDataService", function (genericDataService) {
        var obj = {};
        obj.getData = function () {
            var queryString = "cmd=getCancerStudies";
            return genericDataService.getData(queryString);
        };
        return obj;
    }])
    .factory("geneticProfilesService", ["genericDataService", function (genericDataService) {
        var obj = {};
        obj.getData = function (cancerStudyId) {
            var queryString = "cmd=getGeneticProfiles&cancer_study_id=" + cancerStudyId;
            return genericDataService.getData(queryString);
        };
        return obj;
    }])
    .factory("caseListsService", ["genericDataService", function (genericDataService) {
        var obj = {};
        obj.getData = function (cancerStudyId) {
            var queryString = "cmd=getCaseLists&cancer_study_id=" + cancerStudyId;
            return genericDataService.getData(queryString);
        };
        return obj;
    }])
    .factory("profileDataService", ["genericDataService", function (genericDataService) {
        var obj = {};
        obj.getData = function (caseSetId, geneticProfileId, geneList) {
            var queryString = "cmd=getProfileData&case_set_id=" + caseSetId
                + "&genetic_profile_id=" + geneticProfileId
                + "&gene_list=" + geneList;
            return genericDataService.getData(queryString);
        };
        return obj;
    }])
    .factory("extendedMutationDataService", ["genericDataService", function (genericDataService) {
        var obj = {};
        obj.getData = function (caseSetId, geneticProfileId, geneList) {
            var queryString = "cmd=getMutationData&case_set_id=" + caseSetId
                + "&genetic_profile_id=" + geneticProfileId
                + "&gene_list=" + geneList;
            return genericDataService.getData(queryString);
        };
        return obj;
    }])
    .factory("clinicalDataService", ["genericDataService", function (genericDataService) {
        var obj = {};
        obj.getData = function (caseSetId) {
            var queryString = "cmd=getClinicalData&case_set_id=" + caseSetId;
            return genericDataService.getData(queryString);
        };
        return obj;
    }])
    .factory("proteinArrayInfoService", ["genericDataService", function (genericDataService) {
        var obj = {};
        obj.getData = function (cancerStudyId, proteinArrayType, geneList) {
            var queryString = "cmd=getProteinArrayInfo&cancer_study_id=" + cancerStudyId
                + "&protein_array_type=" + proteinArrayType
                + "&gene_list=" + geneList;
            return genericDataService.getData(queryString);
        };
        return obj;
    }])
    .factory("proteinArrayDataService", ["genericDataService", function (genericDataService) {
        var obj = {};
        obj.getData = function (caseSetId, arrayInfo) {
            var queryString = "cmd=getProteinArrayData&case_set_id=" + caseSetId
                + "&array_info=" + arrayInfo;
            return genericDataService.getData(queryString);
        };
        return obj;
    }]);

/**
 * Created by Student on 9/7/2016.
 */
var JPMPortfolioManager = angular.module('JPMPortfolioManager', ['ngRoute', 'angular.filter']);
JPMPortfolioManager.config(function ($routeProvider) {
    $routeProvider
        .when("/overview", {
            templateUrl: "overview.html",
            controller: "OverviewController"
        })
        .when("/details/:id", {
            templateUrl: "details.html",
            controller: "DetailController"
        })
        .otherwise({
            redirectTo: "/"
        });
});
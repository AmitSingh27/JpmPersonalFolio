/**
 * Created by Student on 9/7/2016.
 */
var JPMPortfolioManager = angular.module('JPMPortfolioManager', ['ngRoute']);
JPMPortfolioManager.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "overview.html",
            controller: "OverviewController"
        })
        .when("/details", {
            templateUrl: "details.html",
            controller: "DetailController"
        })
        .otherwise({
            redirectTo: "/"
        });
});
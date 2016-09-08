/**
 * Created by Student on 9/7/2016.
 */
JPMPortfolioManager.controller('OverviewController', function($scope, $http) {
    $scope.appName = 'Portfolio Manager';

    //TODO load from JSON
    $scope.pieChartlabels = ["Equities", "Fixed Income", "Commodities"];
    $scope.pieChartData = [60, 30, 10];
    console.log($scope.pieChartData);
/*
    var url = "http://localhost:8081/";

    $http.get(url).success( function(response) {
    });
*/
});
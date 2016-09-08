/**
 * Created by Student on 9/7/2016.
 */
JPMPortfolioManager.controller('OverviewController', function($scope, $http) {
    $scope.appName = 'Portfolio Manager';

    var url = "http://localhost:8081/";

    $http.get(url).success( function(response) {
    });

});
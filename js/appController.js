/**
 * Created by Student on 9/7/2016.
 */


JPMPortfolioManager.controller('MainController', function($scope, $http) {
    $scope.appName = 'Portfolio Manager';

    var url = "http://localhost:8081/user";

    $http.get(url).success( function(response) {

        $scope.userName = response.name;
    });

});
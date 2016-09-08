/**
 * Created by Student on 9/7/2016.
 */
JPMPortfolioManager.controller('DetailController', function($scope, $http, $routeParams) {
    $scope.appName = 'Portfolio Manager';
    var self = this;
    self.id = $routeParams.id;

    var url = "http://localhost:8081/";

    $http.get(url).success( function(response) {
    });

});
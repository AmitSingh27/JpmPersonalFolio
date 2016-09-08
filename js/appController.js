/**
 * Created by Student on 9/7/2016.
 */


JPMPortfolioManager.controller('MainController', function($scope, userService) {
    $scope.appName = 'Portfolio Manager';

    userService.getUserDetails()
        .success( function(user) {
            $scope.userName = user.name;
        }
    );

});
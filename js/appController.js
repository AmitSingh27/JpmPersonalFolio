/**
 * Created by Student on 9/7/2016.
 */


JPMPortfolioManager.controller('MainController', function($scope, userService) {
    $scope.appName = 'Portfolio Manager';

    userService.getUserDetails()
        .success( function(user) {
            $scope.userName = user.data[0].name;
        }
    );

    userService.getNews()
        .success( function(news) {
                $scope.news = news.data;
            console.log(news.data);
            }
        );

});

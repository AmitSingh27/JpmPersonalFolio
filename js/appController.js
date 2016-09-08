/**
 * Created by Student on 9/7/2016.
 */


JPMPortfolioManager.controller('MainController', function ($scope, $filter, dataService) {
    $scope.appName = 'Portfolio Manager';

    dataService.getUserDetails()
        .success(function (user) {
                $scope.userName = user.data[0].name;
            }
        );

    dataService.getNews()
        .success(function (news) {
                $scope.news = news.data;
            }
        );

    dataService.getStocks()
        .success(function (stocks) {
                $scope.stocks = stocks.data;
                console.log($scope.stocks);
            }
        );

});

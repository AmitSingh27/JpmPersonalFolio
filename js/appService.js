/**
 * Created by Student on 9/7/2016.
 */


JPMPortfolioManager.service('dataService', function($http){

    this.getUserDetails = function(){
        var url = "http://localhost:3000/users/1";

    return $http.get(url);
    }

    this.getNews = function(){

        var url = "http://localhost:3000/news";

        return $http.get(url);
    }

    this.getStocks = function(){

        var url = "http://localhost:3000/stocks";

        return $http.get(url);
    }

});
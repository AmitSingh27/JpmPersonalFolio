/**
 * Created by Student on 9/7/2016.
 */


JPMPortfolioManager.service('userService', function($http){

    this.getUserDetails = function(){
        var url = "http://localhost:8081/user";

    return $http.get(url);
    }

});
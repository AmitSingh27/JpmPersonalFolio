/**
 * Created by Student on 9/7/2016.
 */


JPMPortfolioManager.service('userService', function($http){

    this.getUserDetails = function(){
        var url = "http://localhost:3000/users/1";

    return $http.get(url);
    }

});
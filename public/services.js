angular.module('QuranMediaPlayer.services', []).
  factory('ergastAPIservice', function($http,$location,$window,$rootScope) {

    var ergastAPI = {};

    ergastAPI.sendLoginData = function(formData) {
      $http.post('http://localhost:3030/login', formData).success(function (data) { 
            if(data.auth){
                $rootScope.auth = true;
                $window.location.href = '/#/home';
            }
            else
            {
                $rootScope.auth = false;
            } 
    });
    }

    ergastAPI.sendRegisteration = function(formData) {
      $http.post('http://localhost:3030/register', formData).success(function (data) {   
    });

    }

    ergastAPI.postBlog = function(formData) {
      $http.post('http://localhost:3030/postBlog', formData).success(function (data) {   
        alert("Blog Posted");
    });

    }

    ergastAPI.getAyaat = function() {
      return $http({
        method: 'GET', 
        url: 'http://localhost:3030/getAyaat/2'
      });
    }
    
    return ergastAPI;

  
  });
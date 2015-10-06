/*angular.module('QuranMediaPlayer.controllers', ['mediaPlayer'],[]).*/
angular.module('QuranMediaPlayer.controllers',[]).
controller('audioController', function($scope) {

    
}).
controller('indexController', function($scope,$location,$window) {


}).
controller('fullPageController', function($scope,ergastAPIservice) {


}).
controller('registerController', function($scope,ergastAPIservice) {

    $scope.register = function() {
        ergastAPIservice.sendRegisteration($scope.formData);
    }

}).
controller('homeController', function($scope,ergastAPIservice) {

    // $scope.filter="";
    // $scope.search = function (blog) {
    //     var keyword = new RegExp($scope.filter, 'i');
    //     return !$scope.filter || keyword.test(blog.title) || keyword.test(blog.title);
    // };

    $scope.abc = function(ref){
        alert(ref);
    }

    $scope.ayaatList = [];
    ergastAPIservice.getAyaat().success(function(res){
      //alert("loaded");
      $scope.ayaatList = res;
  });

});


'use strict';


angular.module('QuranMediaPlayer',[
  'QuranMediaPlayer.controllers','QuranMediaPlayer.services','ngRoute','mediaPlayer'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
 when("/fullPage", {templateUrl: "partials/fullPage.html", controller: "fullPageController"}).
 when("/register", {templateUrl: "partials/register.html", controller: "registerController"}).
 when("/home", {templateUrl: "partials/home.html", controller: "homeController"}).
 when("/audio", {templateUrl: "partials/audio.html", controller: "audioController"}).
 otherwise({redirectTo: '/home'});
}]);
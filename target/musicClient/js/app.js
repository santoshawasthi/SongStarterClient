//var musicApp = angular.module('musicApp', []);
 var musicApp = angular.module('musicApp', ['ui.router']);
 musicApp.config(function($stateProvider, $urlRouterProvider) {

 $stateProvider
         .state('home', {
             url: '/home',
             templateUrl: 'template/viewAlbum.html',
             controller:'albumController'
         })
         .state('home.songs', {
             url: '/songs',
             templateUrl: 'template/songs.html',
             controller: 'songsController'
         })
         .state('home.songs.edit', {
             url: '/edit',
             templateUrl: 'template/editSongs.html',
             controller: 'editSongsController'
         });

          $urlRouterProvider.otherwise('/home');

 });

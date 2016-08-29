//var musicApp = angular.module('musicApp', []);
 var musicApp = angular.module('musicApp', ['ui.router']);
 musicApp.config(function($stateProvider, $urlRouterProvider) {

 $stateProvider
         .state('home', {
             url: '/home',
             templateUrl: 'template/viewAlbum.html',
             controller:'albumController'
         })
         .state('songs', {
             url: '/songs/:albumId',
             templateUrl: 'template/viewSongs.html',
             controller: 'songsController'
         })
         .state('editSongs', {
             url: '/edit/:albumId',
             templateUrl: 'template/editSong.html',
             controller: 'editSongsController'
         });

          $urlRouterProvider.otherwise('/home');

 });

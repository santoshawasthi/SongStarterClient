angular.module('directory.controllers', ['ui.bootstrap'])

musicApp.factory('MusicCache', function ($cacheFactory) {
    return $cacheFactory('musicCache');
});

musicApp.controller('albumController', [
		'$scope',
		'$http',
		'$location',
		'$state',
		'$rootScope',
		function($scope, $http, $location, $state, $rootScope) {
			$scope.objectData = [];

			$scope.getAlbumList = function() {
				$http.get(serverUrl+"/album/getAll",{ cache: true}).success(
						function(jsonData, status, headers, config) {
							$scope.objectData = jsonData.artist.album;
							$scope.artistname = jsonData.artist.artistname;
						}).error(
						function(data, status, header, config) {
							$scope.ResponseDetails = "Data: "
									+ JSON.stringify(data) + "<br />status: "
									+ status + "<br />headers: "
									+ jsonFilter(header) + "<br />config: "
									+ jsonFilter(config);
						});
			};
			$scope.setData = function($event) {
				$rootScope.albumName = $event.target.textContent;
			}

			$scope.getAlbumList();
		} ]);

musicApp
		.controller(
				'editSongsController',
				[
						'$scope',
						'$http',
						'$location',
						'$rootScope',
						'$stateParams','$cacheFactory',
						function($scope, $http, $location, $rootScope,
								$stateParams,$cacheFactory) {
							$scope.editSongs = [];
							$scope.song = [];
							$scope.hideSearch = false;
							if ($rootScope.albumName != null
									&& $rootScope.albumName != undefined) {
								$scope.albumName = $rootScope.albumName;
								$scope.albumId = $stateParams.albumId;
							}
							if($rootScope.songDetail != null
									&& $rootScope.songDetail != undefined){
								$scope.song=$rootScope.songDetail;
//								$scope.songDetail = $rootScope.songDetail;
//								$scope.song.title= $scope.songDetail.title;
//								$scope.song.tracknumber= $scope.songDetail.tracknumber;
//								$scope.song.length= $scope.songDetail.length;
//								$scope.song.genre= $scope.songDetail.genre;
//								$scope.song.datecreated= $scope.songDetail.datecreated;
//								$scope.song.datemodified= $scope.songDetail.datemodified;
//								$scope.song.songid= $scope.songDetail.songid;
								$rootScope.songDetail = null;
							}
							
							$scope.$back = function() {
								window.history.back();
							}
							
							$scope.submit = function() {
								var config = {
									headers : {
										'Content-Type' : 'application/json;charset=utf-8;'
									},
									cache:false
								}
								var data = '{';
								if($scope.song.songid!=null && $scope.song.songid!=undefined){
									data = data +'"songid":'+$scope.song.songid+',';
								}
								data =data+ '"title":"' + songTitle.value
										+ '","length":' + songLength.value
										+ ', "tracknumber":'
										+ songTrackNumber.value
										+ ', "albumid":' + $scope.albumId
										+ ',"genre":"' + songGenre.value
										+ '","datecreated":"'
										+ songDateCreated.value
										+ '","datemodified":"'
										+ songDateModified.value + '","img":"default.png"}';
								$http
										.post(
												serverUrl+'/song/submit',
												data, config)
										.success(
												function(data, status, headers,
														config) {
													$scope.objectData = data.msg;
													window.alert = function(al, $){
													    return function(msg) {
													        al(msg);
													        $(window).trigger("Okbutton");
													    };
													}(window.alert, window.jQuery);

													$(window).on("Okbutton", function() {
														var httpCache = $cacheFactory.get('$http');
														httpCache.remove(serverUrl+'/song/getByalbumid/'+$scope.albumId); 
														window.history.back();
													});
													alert(data.msg);
												})
										.error(
												function(data, status, header,
														config) {
													window.alert = function(al, $){
													    return function(msg) {
													        al(msg);
													        $(window).trigger("Okbutton");
													    };
													}(window.alert, window.jQuery);

													$(window).on("Okbutton", function() {
														window.history.back();
													});
													
													alert(data.msg);
												});
							};

						} ])
	.directive('createdDatepicker', function() {
			return {
				restrict : 'A',
				link : function(scope, el, attr) {
					el.datepicker({});
					var component = el.siblings('[data-toggle="datepicker"]');
					if (component.length) {
						component.on('click', function() {
							el.trigger('focus');
						});
					}
				}
			};
		})
		
	.directive("datepicker", function() {
			return {
				restrict : "A",
				require : "ngModel",
				link : function(scope, elem, attrs) {
					var updateModel = function(dateText) {
						scope.$apply(function() {
							ngModelCtrl.$setViewValue(dateText);
						});
					};
					var options = {
						dateFormat : "yyyy-MM-dd",
						onSelect : function(dateText) {
							updateModel(dateText);
						}
					};
					elem.datepicker(options);
				}
			}
		});

musicApp.controller('songsController', [
		'$rootScope',
		'$scope',
		'$http',
		'$location',
		'$state',
		'$stateParams','$filter',
		function($rootScope, $scope, $http, $location, $state, $stateParams,$filter) {
			$scope.songsData = [];

			$scope.$back = function() {
				window.history.back();
			}
			
			$scope.getSongsList = function(id) {
				
				$http
						.get(
								serverUrl+'/song/getByalbumid/'
										+ id,{ cache: true}).success(
								function(data, status, headers, config) {
									$scope.songsData = data;
									$scope.albumName = $rootScope.albumName;
								}).error(
								function(data, status, header, config) {
									$scope.ResponseDetails = "Data: "
											+ JSON.stringify(data)
											+ "<br />status: " + status
											+ "<br />headers: "
											+ jsonFilter(header)
											+ "<br />config: "
											+ jsonFilter(config);
								});
			};

			if ($stateParams != null && $stateParams.albumId != null
					&& $stateParams.albumId.trim().length > 0) {
				$scope.getSongsList($stateParams.albumId);
				$scope.albumId = $stateParams.albumId;
			}
			
			$scope.setSongDetails = function($event) {
				var songDetail = $filter('filter')($scope.songsData, {songid: $event.target.title})[0];
				$rootScope.songDetail = songDetail;
			}

		} ]);



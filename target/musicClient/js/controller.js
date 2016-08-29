musicApp.controller('albumController', ['$scope','$http','$location', function($scope,$http,$location){
	$scope.objectData = [];
	/*
	$scope.getAlbumList = function () {
	$http.get('http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm')
	.success(function (data, status, headers, config) {
	$scope.objectData = data.productsInCart;
})
.error(function (data, status, header, config) {
$scope.ResponseDetails = "Data: " + JSON.stringify(data) +
"<br />status: " + status +
"<br />headers: " + jsonFilter(header) +
"<br />config: " + jsonFilter(config);
alert($scope.ResponseDetails);
});
};
*/
alert("getAlbumList");
var jsonData = {"artist":{"artistname":"Justin Moore","album":[{"ablumid":1,"title":"Suicide Squad","artistname":"Justin Moore","dateCreated":"default.png"},{"ablumid":2,"title":"Kinda Dont Care","artistname":"Justin Moore","dateCreated":"default.png"}]}};
$scope.getAlbumList = function () {
	$scope.objectData = jsonData.artist.album;
	$scope.artistname = jsonData.artist.artistname;
};
$scope.getAlbumList();
}]);

musicApp.controller('editSongsController', ['$scope','$http','$location', function($scope,$http,$location){
	$scope.editSongs = [];
	alert("getEditSongs");
	/*
	$scope.GetAllData = function () {
	$http.get('http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm')
	.success(function (data, status, headers, config) {
	$scope.objectData = data.productsInCart;
})
.error(function (data, status, header, config) {
$scope.ResponseDetails = "Data: " + JSON.stringify(data) +
"<br />status: " + status +
"<br />headers: " + jsonFilter(header) +
"<br />config: " + jsonFilter(config);
alert($scope.ResponseDetails);
});
};
*/
// var jsonData = {"music":{"artist":{"album":[{"song":[{"title":"Bloom","length":"5:15","SongId":"1"},{"title":"Morning Mr Magpie","length":"4:41","SongId":"2"},{"title":"Little by Little","length":"4:27","SongId":"3"},{"title":"Feral","length":"3:13","SongId":"4"},{"title":"Lotus Flower","length":"5:01","SongId":"4"},{"title":"Codex","length":"4:47","SongId":"5"},{"title":"Give Up the Ghost","length":"4:50","SongId":"6"},{"title":"Separator","length":"5:20","SongId":"7"}],"title":"The King of Limbs","Id":"1"},{"song":[{"title":"Airbag","length":"4:44","SongId":"1"},{"title":"Paranoid Android","length":"6:23","SongId":"2"},{"title":"Subterranean Homesick Alien","length":"4:27","SongId":"3"},{"title":"Exit Music (For a Film)","length":"4:24","SongId":"4"},{"title":"Let Down","length":"4:59","SongId":"5"},{"title":"Karma Police","length":"4:21","SongId":"6"},{"title":"Fitter Happier","length":"1:57","SongId":"7"},{"title":"Electioneering","length":"3:50","SongId":"8"},{"title":"Climbing Up the Walls","length":"4:45","SongId":"9"},{"title":"No Surprises","length":"3:48","SongId":"10"},{"title":"Lucky","length":"4:19","SongId":"11"},{"title":"The Tourist","length":"5:24","SongId":"12"}],"title":"OK Computer","Id":"2"}],"name":"Radiohead"}}};
// $scope.GetAllData = function () {
// 	$scope.objectData = jsonData["music"].artist.album;
// };
// $scope.GetAllData();
}]);

musicApp.controller('songsController', ['$scope','$http','$location', function($scope,$http,$location){
	$scope.songsData = [];
	/*
	$scope.getSongsList = function () {
	$http.get('http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm')
	.success(function (data, status, headers, config) {
	$scope.songsData = data.productsInCart;
})
.error(function (data, status, header, config) {
$scope.ResponseDetails = "Data: " + JSON.stringify(data) +
"<br />status: " + status +
"<br />headers: " + jsonFilter(header) +
"<br />config: " + jsonFilter(config);
alert($scope.ResponseDetails);
});
};
*/
alert("songsController");
var jsonData = {"music":{"artist":{"album":[{"song":[{"title":"Bloom","length":"5:15","SongId":"1"},{"title":"Morning Mr Magpie","length":"4:41","SongId":"2"},{"title":"Little by Little","length":"4:27","SongId":"3"},{"title":"Feral","length":"3:13","SongId":"4"},{"title":"Lotus Flower","length":"5:01","SongId":"4"},{"title":"Codex","length":"4:47","SongId":"5"},{"title":"Give Up the Ghost","length":"4:50","SongId":"6"},{"title":"Separator","length":"5:20","SongId":"7"}],"title":"The King of Limbs","Id":"1"},{"song":[{"title":"Airbag","length":"4:44","SongId":"1"},{"title":"Paranoid Android","length":"6:23","SongId":"2"},{"title":"Subterranean Homesick Alien","length":"4:27","SongId":"3"},{"title":"Exit Music (For a Film)","length":"4:24","SongId":"4"},{"title":"Let Down","length":"4:59","SongId":"5"},{"title":"Karma Police","length":"4:21","SongId":"6"},{"title":"Fitter Happier","length":"1:57","SongId":"7"},{"title":"Electioneering","length":"3:50","SongId":"8"},{"title":"Climbing Up the Walls","length":"4:45","SongId":"9"},{"title":"No Surprises","length":"3:48","SongId":"10"},{"title":"Lucky","length":"4:19","SongId":"11"},{"title":"The Tourist","length":"5:24","SongId":"12"}],"title":"OK Computer","Id":"2"}],"name":"Radiohead"}}};
	$scope.getSongsList = function () {
		$scope.songsData = jsonData["music"].artist.album;
	};
}]);

MusicDownloadCtrl.$inject = ["$scope", "musicDownloadService"];
function MusicDownloadCtrl( $scope, MusicD ) {
  $scope.musicName = "";
  $scope.searchMusicByName = function() {
    console.log("Music Name is : " + $scope.musicName);
    // MusicD.getMusicListByName($scope.musicName)
    // .then(function(data) {
    //   console.log(data);
    // },
    // function(error) {
    //   console.log(error);
    // });
    var urlPrefix = "http://musicmini.baidu.com/app/search/searchList.php?qword={";
    var urlSurfix = "}&ie=utf-8&page={1}";
    var musicSearchUrl = urlPrefix + $scope.musicName + urlSurfix;

    $scope.musicFrame = angular.element(document.getElementById("musicSearchList"));
    $scope.musicFrame.attr('src', musicSearchUrl);

  };
}
myApp.controller('musicDownloadCtrl', MusicDownloadCtrl);

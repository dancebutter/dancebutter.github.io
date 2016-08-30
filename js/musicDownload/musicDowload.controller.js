MusicDownloadCtrl.$inject = ["$scope", "musicDownloadService"];
function MusicDownloadCtrl( $scope, MusicD ) {
  $scope.musicName = "";
  $scope.searchMusicByName = function() {
    // console.log("Music Name is : " + $scope.musicName);
    MusicD.getMusicListByName($scope.musicName)
    .then(function(data) {
      console.log(data);
    },
    function(error) {
      console.log(error);
    });
  };
}
myApp.controller('musicDownloadCtrl', MusicDownloadCtrl);

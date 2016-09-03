MusicDownloadCtrl.$inject = ["$scope", "musicDownloadService"];
function MusicDownloadCtrl( $scope, MusicD ) {
  $scope.musicName = "";
  $scope.musicList = [];
  $scope.searchMusicByName = function() {
    console.log("Music Name is : " + $scope.musicName);
    if( $scope.musicName ) {
      MusicD.getMusicListByName($scope.musicName)
      .then(function(data) {
        // console.log(data);
        if( data.errno !== undefined ) {
          // music name cannot be searched
          alert("搜不到音乐名含有 \"" + $scope.musicName + "\" 的音乐");
        } else {
          $scope.musicList = data.song;
        }
      },
      function(error) {
        // console.log(error);
      });
    } else {
      alert("音乐名不能为空！");
    }

  };
  $scope.downloadSong = function( songId ) {
    if( songId ) {
      MusicD.getMusicDetailById(songId)
      .then(function(data) {
        var songUrl = data.data.songList[0].songLink;
        getSong( songUrl );
        // console.log(data);
      }, function(error) {
        // console.log(error);
      });
    } else {

    }
  };

  function getSong( url ) {
    window.location = url;
  }
}
myApp.controller('musicDownloadCtrl', MusicDownloadCtrl);

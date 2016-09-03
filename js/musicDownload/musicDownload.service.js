MusicDownloadService.$inject = ["$q", "$http"];
function MusicDownloadService( $q, $http ) {
  var service = {
    getMusicListByName : getMusicListByName,
    getMusicDetailById : getMusicDetailById
  };
  return service;
  function getMusicListByName( musicName ) {
    // TODO: This function is NOT working!!!
    if( musicName ) {
      var urlPrefix = "http://tingapi.ting.baidu.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.search.catalogSug&format=json&query=";
      var urlSurfix = "&_=1413017198449";
      musicName = encodeURI(musicName);
      var url = urlPrefix + musicName;
      // var url = urlPrefix + musicName + urlSurfix;
      var deferred = $q.defer();

      $.ajax({
          url: url,
          dataType: 'jsonp',
          success: function(eins, zwei, drei, veir){
            deferred.resolve(eins);
          },
          error : function(eins, zwei, drei, veir) {
            deferred.reject(eins);
          }
      });

      return deferred.promise;
    }
  }

  function getMusicDetailById( musicId ) {
    var urlPrefix = "http://ting.baidu.com/data/music/links?songIds={";
    var urlSurfix = "}";
    var url = urlPrefix + musicId + urlSurfix;

    var deferred = $q.defer();

    $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(eins, zwei, drei, veir){
          deferred.resolve(eins);
        },
        error : function(eins, zwei, drei, veir) {
          deferred.reject(eins);
        }
    });

    return deferred.promise;
  }

};
myApp.factory("musicDownloadService", MusicDownloadService)

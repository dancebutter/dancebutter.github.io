MusicDownloadService.$inject = ["$q", "$http"];
function MusicDownloadService( $q, $http ) {
  var service = {
    getMusicListByName : getMusicListByName
  };
  return service;
  function getMusicListByName( musicName ) {
    // TODO: This function is NOT working!!!
    if( musicName ) {
      // "http://mp3.baidu.com/dev/api/?tn=getinfo&ct=0&word=%E6%B5%81%E6%B5%AA%E8%AE%B0&ie=utf-8&format=json"
      var urlPrefix = "http://musicmini.baidu.com/app/search/searchList.php?qword={";
      var urlSurfix = "}&ie=utf-8&page={1}";

      // var urlPrefix = "http://mp3.baidu.com/dev/api/?tn=getinfo&ct=0&word=";
      // var urlSurfix = "&ie=utf-8&format=json";
      var url = urlPrefix + musicName + urlSurfix;

      // var url = "http://ting.baidu.com/data/music/links?songIds={247911654}";

      var deferred = $q.defer();
      var httpConfig = {
        url : url,
        // method : 'GET',
        headers : {
          'Access-Control-Allow-Origin' : '*'
        }
        // dataType : 'JSONP',
        // success : function(data) {
        //   deferred.resolve(data);
        // }
      };
      $http(httpConfig)
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };
};
myApp.factory("musicDownloadService", MusicDownloadService)

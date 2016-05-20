myApp.factory('gameDataService',['$http', '$q', function($http, $q){
  var BASE_URL = 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/';
  var API_KEY = 'b5372e49-1de2-49cd-bc63-98a7e6564ad9';
  var service = {
    test : API_KEY,
    getRecentGameBySummonerId : getRecentGameBySummonerId,
    getGameByGameId : getGameByGameId
  };
  var headers = {
        'User-Agent' : 'Riot-Games-Developer-Portal',
        'Accept-Language' : 'en-US',
        'Accept-Charset' : 'ISO-8859-1,utf-8',
        'Origin' : 'https://developer.riotgames.com'
      };
  var testHeaders = {
  };
  return service;

  function ajaxCall( url ) {
    var deferred = $q.defer();
    var httpConfig = {
      url : url,
      method : 'GET'
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

  function ajaxCallWithHeaders( url ) {
    var deferred = $q.defer();
    var httpConfig = {
      url : url,
      method : 'GET',
      headers : headers
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

  function getRecentGameBySummonerId( summonerId ) {
    var url = BASE_URL + summonerId + '/recent?api_key=' + API_KEY;
    return ajaxCall(url);
  }

  function getGameByGameId( gameId ) {
    var url = 'https://acs.leagueoflegends.com/v1/stats/game/NA1/' + gameId;
    return ajaxCall(url);
  }
}]);

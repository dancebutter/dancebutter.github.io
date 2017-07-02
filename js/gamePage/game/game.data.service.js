GameDataService.$inject = ['$http', '$q'];
function GameDataService( $http, $q ) {
  var BASE_URL = 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/';
  var GAME_DETAIL_URL = 'https://na.api.pvp.net/api/lol/na/v2.2/match/';
  var API_KEY = 'b5372e49-1de2-49cd-bc63-98a7e6564ad9';
  var AMERICA_SUMMONER_LIST_URL = "./js/data/AmericaSummonerList.json";
  var service = {
    test : API_KEY,
    getRecentGameBySummonerId : getRecentGameBySummonerId,
    getGameDetail : getGameDetail,
    getAmericaSummonerList : getAmericaSummonerList
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

  function getGameDetail( gameId ) {
    var url = GAME_DETAIL_URL + gameId + '?api_key=' + API_KEY;
    return ajaxCall(url);
  }

  function getAmericaSummonerList() {
    return ajaxCall(AMERICA_SUMMONER_LIST_URL);
  }
}
myApp.factory('gameDataService', GameDataService);

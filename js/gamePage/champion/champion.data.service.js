ChampionDataService.$inject = ['$http', '$q'];
function ChampionDataService( $http, $q ) {
  // var BASE_URL = 'https://na.api.pvp.net/api/lol/na/v1.2/champion/';
  var BASE_URL = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion';
  var API_KEY = 'RGAPI-59cc909b-5308-436b-860c-c00e8fa5646c';
  var MOCK_URL = 'js/championList.json';
  var headers = {
        'User-Agent' : 'Riot-Games-Developer-Portal',
        'Accept-Language' : 'en-US',
        'Accept-Charset' : 'ISO-8859-1,utf-8',
        'Origin' : 'https://developer.riotgames.com'
      };
  var service = {
    test : API_KEY,
    getChampionList : getChampionList,
    getChampionDetailById : getChampionDetailById
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

  function getChampionDetailById( championId ) {
    var url = BASE_URL + championId + '?api_key=' + API_KEY;
    return ajaxCall(url);
  }

  function getChampionList() {
    var url = BASE_URL + '?api_key=' + API_KEY;
    return ajaxCall(url);
    // return ajaxCall(MOCK_URL);
  }
}
myApp.factory('championDataService', ChampionDataService);

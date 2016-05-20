myApp.directive('gameListDirective', [
                                        'gameDataService',
                                        'championDataService',
                                        function( gameDataService,
                                                  championDataService
                                                  ) {
  link.$inject = ['scope', 'attr', 'element', '$q'];
  function link( scope, attr, element, $q ) {
    scope.gameList = [];
    scope.testTemp = [];
    scope.championList = null;
    scope.databaseVersion = null;
    scope.$watch('activedSummoner', function( newValue, oldValue ) {
      updateGameList();
    });

    function updateGameList() {
      scope.gameList = [];
      var summonerId = scope.activedSummoner.summonerId;
      gameDataService.getRecentGameBySummonerId( summonerId )
      .then(function( data ) {
        generateGameList( data.games );
        //scope.gameList = data.games;
      },function(error) {

      });
    }

    function generateGameList( games ) {
      for( var i = 0; i < games.length; i++ ) {
        var timePlayed = Math.floor(games[i].stats.timePlayed / 60) + ':' + (games[i].stats.timePlayed % 60);
        var championKey = getChampionKeyById(games[i].championId);
        var temp = {
          win : games[i].stats.win,
          gameMode : games[i].gameMode,
          championKey : championKey,
          timePlayed : timePlayed,
          createDate : games[i].createDate,
          gameId : games[i].gameId
        };
        scope.gameList.push(temp);
      }
    }

    function getChampionList() {
      championDataService.getChampionList().then(function( data ) {
        scope.championList = data.data;
        scope.databaseVersion = data.version;
        updateGameList();
      }, function(error) {

      });
    }

    function getChampionKeyById( id ) {
      var tempKey = null;
      angular.forEach( scope.championList, function( champion ) {
        if( champion.id == id ) {
          tempKey = champion.key;
        }
      });
      return tempKey;
    }

    getChampionList();
  }

  controller.$inject = ['$scope'];
  function controller( $scope ) {
    $scope.getGameDetail = function( gameId ) {
      var testGameId = 2015415636;
      $scope.$emit('gameDetail:showGameDetail', gameId, $scope.activedSummoner);
    }
  }
  return {
    restrict : 'E',
    link : link,
    controller : controller,
    templateUrl : 'js/gameList.tmpl.html',
    scope: {
      activedSummoner: "="
    }
  };
}]);

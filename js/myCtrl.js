myApp.controller('myCtrl', [ '$scope', 'gameDataService', function($scope, gameDataService) {
  $scope.summonerList = {
    'uncletai' : {
      nickName : '我',
      summonerName : 'uncletai',
      summonerId : 35793439,
      actived : true
    },
    'geminiroy' : {
      nickName : '罗伊',
      summonerName : 'geminiroy',
      summonerId : 35448330,
      actived : false
    },
    'personalbusiness' : {
      nickName : '二轮',
      summonerName : 'personalbusiness',
      summonerId : 35468371,
      actived : false
    },
    'woaichibaozi' : {
      nickName : '李老师',
      summonerName : 'woaichibaozi',
      summonerId : 32524746,
      actived : false
    },
    '00Mirana00' : {
      nickName : '拉里',
      summonerName : '00Mirana00',
      summonerId : 25857364,
      actived : false
    }
  };
  $scope.activedSummoner = $scope.summonerList.uncletai;
  $scope.testTemp = null;
  $scope.gameListShow = true;
  $scope.gameDetailShow = true;

  // events
  $scope.$watch('activedSummoner', function( newValue, oldValue ) {
    if( oldValue !== newValue ) {
      oldValue.actived = false;
      newValue.actived = true;
      // updateGameList();
    }
  });
  $scope.$on('gameDetail:showGameDetail', function( event, gameId, summoner ) {
    $scope.currenctGameId = gameId;
  });
  // events end

  // functions
  $scope.clickName = function( summoner ) {
    $scope.activedSummoner = summoner;
  };
  $scope.submitGameData = function( gameDataJsonStr ) {
    $scope.gameDataJson = JSON.parse( gameDataJsonStr );
  };
  // functions end
}]);

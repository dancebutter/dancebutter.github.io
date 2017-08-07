GamePageCtrl.$inject = ['$scope'];
function GamePageCtrl($scope) {
  $scope.summonerList = {
    'uncletai' : {
      nickName : '我',
      summonerName : 'uncletai',
      summonerId : 35793439,
      "accountId": 50361040,
      actived : true
    },
    'geminiroy' : {
      nickName : '罗伊',
      summonerName : 'geminiroy',
      summonerId : 35448330,
      "accountId": 50074858,
      actived : false
    },
    'personalbusiness' : {
      nickName : '二轮',
      summonerName : 'personalbusiness',
      summonerId : 35468371,
      "accountId": 50075190,
      actived : false
    },
    '00Mirana00' : {
      nickName : '拉里',
      summonerName : '00Mirana00',
      summonerId : 25857364,
      "accountId": 40540315,
      actived : false
    },
    'woaichibaozi' : {
      nickName : '李老师',
      summonerName : 'woaichibaozi',
      summonerId : 32524746,
      "accountId": 47431769,
      actived : false
    }
    /*,
    'AsapAoi' : {
        nickName : '变态儿童',
        summonerName : 'AsapAoi',
        summonerId : 69539468,
        actived : false
    }*/
  };
  $scope.activedSummoner = $scope.summonerList.uncletai;
  $scope.testTemp = null;
  $scope.gameListShow = true;
  $scope.gameDetailShow = true;
  $scope.activedGameId = null;

  // events
  $scope.$watch('activedSummoner', function( newValue, oldValue ) {
    if( oldValue !== newValue ) {
      oldValue.actived = false;
      newValue.actived = true;
      // updateGameList();
    }
  });
  $scope.$watch('activedGameId', function( newValue, oldValue ) {
    if( newValue != null && newValue != oldValue ) {

    }
  });
  // $scope.$on('gameDetail:showGameDetail', function( event, gameId, summoner ) {
  //   $scope.currenctGameId = gameId;
  // });
  // events end

  // functions
  $scope.clickName = function( summoner ) {
    $scope.activedSummoner = summoner;
  };
  $scope.submitGameData = function( gameDataJsonStr ) {
    $scope.gameDataJson = JSON.parse( gameDataJsonStr );
  };
  // functions end

  function init() {

  }

  init();
}

myApp.controller('gamePageCtrl', GamePageCtrl);

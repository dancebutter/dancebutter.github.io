GameDetailDirective.$inject = [
                                'gameDetailChartConfigService',
                                'gameDataService'
                              ];
function GameDetailDirective(
                              chartService,
                              gameDataService
                            ) {
  GameDetailLink.$inject = [ 'scope', 'attr', 'element' ];
  function GameDetailLink( scope, attr, element ) {
    // scope.test1 = document.getElementById('hackGameData');
    // debugger;
    var statsChart = null;
    var statsSeries = [];
    scope.$watch( 'activedGameId', function( newValue, oldValue ) {
      if( newValue && newValue !== oldValue ) {
        gameDataService.getGameDetail(newValue)
        .then(function(data) {
          statsSeries = chartService.generateSeries(data);
          updateStatsChart();
        },function(error) {

        });
      }
    });

    function updateStatsChart() {
      if( !statsChart ) {
        createStatsChart();
      } else {

      }
    }

    function createStatsChart() {
      var config = chartService.getChartConfig();
      config.series = statsSeries;
      statsChart = $('#statsChart').highcharts(config);
    }
  }

  GameDetailController.$inject = [ '$scope' ];
  function GameDetailController( $scope ) {

  }

  return {
    restrict : 'E',
    link : GameDetailLink,
    controller : GameDetailController,
    templateUrl : 'js/game/game.detail.tmpl.html',
    scope : {
      activedSummoner : "=",
      activedGameId : "="
    }
  };
}
myApp.directive('gameDetailDirective', GameDetailDirective);

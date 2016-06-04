GameDetailChartConfigService.$inject = [];
function GameDetailChartConfigService() {
  var test = 'in chart config';
  var service = {
    test : test,
    getChartConfig : getChartConfig,
    generateSeries : generateSeries
  };
  return service;

  function getChartConfig() {
    var config = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Data extracted from a HTML table in the page'
      },
      yAxis: {
          allowDecimals: false,
          title: {
              text: 'Units'
          }
      },
      series : null,
      tooltip: {
          formatter: function () {
              return '<b>' + this.series.name + '</b><br/>' + this.point.y;
          }
      }
    };

    return config;
  }

  function generateSeries( data ) {
    var tempSeries = [];
    var totalDamageDealt = [];
    var totalDamageTaken = [];
    angular.forEach( data.participants, function( participant ) {
      var tempTotalDamageDealt = {
        x : participant.participantId,
        y : participant.stats.totalDamageDealt,
        name : participant.participantId
      };
      totalDamageDealt.push(tempTotalDamageDealt);

      var tempTotalDamageTaken = {
        x : participant.participantId,
        y : participant.stats.totalDamageTaken,
        name : participant.participantId,
        championId : participant.participantId
      };
      totalDamageTaken.push(tempTotalDamageTaken);
    });
    tempSeries.push({
      visible : true,
      name : 'Total Damage Dealt',
      data : totalDamageDealt,
      color : "#FF0000",
      showCheckbox : true
    });
    tempSeries.push({
      visible : true,
      name : 'Total Damage Taken',
      data : totalDamageTaken,
      color : "#0000FF",
      showCheckbox : true
    });

    return tempSeries;
  }

}
myApp.factory( 'gameDetailChartConfigService', GameDetailChartConfigService);

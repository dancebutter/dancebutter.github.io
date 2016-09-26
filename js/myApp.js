var myApp = angular.module('myApp', ['ngResource', 'ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/gamePage');

  $stateProvider
    .state('gamePage', {
      url : "/gamePage",
      templateUrl : "js/gamePage/gamePage.html"
    })
    .state('timeTable', {
      url : "/timeTable",
      templateUrl : "js/timeTable/timeTable.html"
    }).
    state('musicDownload', {
      url : "/musicDownload",
      templateUrl : "js/musicDownload/musicDownload.html"
    }).
    state('peipeiPage', {
      url : "/peipeiPage",
      templateUrl : "js/peipeiPage/peipeiPage.html"
    });
}]);

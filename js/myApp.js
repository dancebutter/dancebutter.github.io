var myApp = angular.module('myApp', ['ngResource', 'ui.router', 'angular-js-xlsx']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/gamePage');

  $stateProvider
    .state('gamePage', {
      url : "/gamePage",
      templateUrl : "js/gamePage/gamePage.html"
    })
    .state('reportGene', {
      url : "/reportGene",
      templateUrl : "js/reportGene/reportGene.html"
    });
    /*.state('musicDownload', {
      url : "/musicDownload",
      templateUrl : "js/musicDownload/musicDownload.html"
    })
    .state('peipeiPage', {
      url : "/peipeiPage",
      templateUrl : "js/peipeiPage/peipeiPage.html"
  });*/
}]);

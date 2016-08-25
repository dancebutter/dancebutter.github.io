var myApp = angular.module('myApp', ['ngResource', 'ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/gamePage');

  $stateProvider
    .state('gamePage', {
      url : "/gamePage",
      templateUrl : "js/gamePage/gamePage.html"
    })
    .state('otherPage', {
      url : "/otherPage",
      templateUrl : "js/otherPage.html"
    });
}]);

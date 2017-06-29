ReportGeneCtrl.$inject = ['$scope'];
function ReportGeneCtrl($scope) {
  $scope.pageList = {
    'uploadPage' : {
      pageName : 'Upload',
      actived : true
    },
    'editPage' : {
      pageName : 'Edit',
      actived : false
    },
    'resultPage' : {
      pageName : 'Results',
      actived : false
    }
  };
  $scope.activedPage = $scope.pageList.uploadPage;

    // events
    $scope.$watch('activedPage', function( newValue, oldValue ) {
      if( oldValue !== newValue ) {
        oldValue.actived = false;
        newValue.actived = true;
      }
    });

    // functions
    $scope.clickPage = function( page ) {
      $scope.activedPage = page;
    };
}
myApp.controller('reportGeneCtrl', ReportGeneCtrl);

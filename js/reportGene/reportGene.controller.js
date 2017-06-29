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

    function fileSelected() {
      var file = document.getElementById('fileToUpload').files[0];
      if (file) {
        // var fileSize = 0;
        // if (file.size > 1024 * 1024)
        //   fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
        // else
        //   fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

        // document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
        // document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
        // document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
      }
    }
}
myApp.controller('reportGeneCtrl', ReportGeneCtrl);

PeipeiPageCtrl.$inject = ["$scope"];
function PeipeiPageCtrl( $scope ) {
    var voiceAudio = null;
    $scope.showVoice = function( name ) {
        if( voiceAudio == null ) {
            voiceAudio = document.createElement("audio");
        } else {
            voiceAudio.pause();
            voiceAudio.currentTime = 0;
        }
        switch (name) {
            case "peipei":
                voiceAudio.src = "./js/data/peipei.m4a";
                voiceAudio.play();
                break;
            case "qiaozhi":
                voiceAudio.src = "./js/data/qiaozhi.m4a";
                voiceAudio.play();
                break;
            case "babazhu":
                voiceAudio.src = "./js/data/babazhu.m4a";
                voiceAudio.play();
                break;
            case "mamazhu":
                voiceAudio.src = "./js/data/mamazhu.m4a";
                voiceAudio.play();
                break;
            default:

        }
    };
}
myApp.controller( 'peipeiPageCtrl', PeipeiPageCtrl );

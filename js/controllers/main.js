function MainCtrl($scope, $location, UserFactory) {
	$scope.nav = _config['nav'];
	$scope.username = 'Stoyan Delev';
	$scope.navCurrent = 'home';
	$scope.isLoginPage = false;

	var path = function() { 
		return $location.path();
	};

	$scope.isLoginPage = path() == '/' ? true : false;

	$scope.$watch(path, function(newVal, oldVal){
		$scope.isLoginPage = newVal == '/' ? true : false;
		$scope.navCurrent = newVal;
    });

    $scope.logOut = function() {
		UserFactory.logout();
  		$location.path('/');
    }

	$scope.toggleFullScreen = function() {
		var doc = window.document;
		var docEl = doc.documentElement;

		var requestFullScreen = docEl.requestFullscreen || docEl.webkitRequestFullScreen
		var cancelFullScreen = doc.exitFullscreen || doc.msExitFullscreen;

		if (!doc.fullscreenElement && !doc.webkitFullscreenElement ) {
			requestFullScreen.call(docEl);
		} else {
			cancelFullScreen.call(doc);
		}
	}
}

angular
	.module('delivery')
	.controller('MainCtrl', MainCtrl);
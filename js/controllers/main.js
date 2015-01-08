function MainCtrl($scope, $location, UserFactory) {
	
	function logOut() {
		UserFactory.logout();
  		$location.path('/');
	}

	function toggleFullScreen() {
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

	//properties
	$scope.nav = _config['nav'];
	$scope.username = 'Stoyan Delev';
	$scope.navCurrent = 'home';
	$scope.isLoginPage = false;
	
	//methods
	$scope.logOut = logOut;
	$scope.toggleFullScreen = toggleFullScreen;

	//logic
	var path = function() { 
		return $location.path();
	};

	$scope.isLoginPage = path() == '/' ? true : false;
	$scope.$watch(path, function(newVal, oldVal){
		$scope.isLoginPage = newVal == '/' ? true : false;
		$scope.navCurrent = newVal;
    });
}

angular
	.module('delivery')
	.controller('MainCtrl', MainCtrl);
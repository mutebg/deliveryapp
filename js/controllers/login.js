function LoginCtrl($scope, $location, UserFactory) {
	
	function login(username, password) {
		UserFactory.login(username, password).then(function success(response) {
			$location.path('home');
		}, function(error) {
			$scope.errorMessage = error.data;
		});
	}
	
	//properties
	$scope.errorMessage = '';

	//methods
	$scope.login = login;
}

angular
	.module('delivery')
	.controller('LoginCtrl', LoginCtrl);
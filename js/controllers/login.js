function LoginCtrl($scope, $location, UserFactory) {

	//properties
	$scope.errorMessage = '';


	//methods
	$scope.login = login;


	//init


	//logic


	//method definition
	function login(username, password) {
		UserFactory.login(username, password).then(function success(response) {
			$location.path('home');
		}, function(error) {
			$scope.errorMessage = error.data;
		});
	}

}

angular
	.module('delivery')
	.controller('LoginCtrl', LoginCtrl);
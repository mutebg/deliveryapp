function LoginCtrl($scope, $location, UserFactory) {
	$scope.errorMessage = '';


	$scope.login = function(username, password) {
		UserFactory.login($scope.user, $scope.pass).then(function success(response) {
        	$location.path('home');	
      	}, function(error){
      		$scope.errorMessage = error.data;
      	});
	}
}

angular
	.module('delivery')
	.controller('LoginCtrl', LoginCtrl);
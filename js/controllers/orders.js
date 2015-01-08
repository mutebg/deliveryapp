function OrdersCtrl($scope, OrdersFactory) {
	$scope.orders = [];
	$scope.sortColumn = '_id';
	$scope.deliveryPrepare = [];
	$scope.offices = _config['offices'];
	$scope.deliveryfrom = '';
	$scope.viewOrder = {};
	$scope.selectedTab = 0;

	$scope.load = function() {
		$scope.orders = OrdersFactory.query();
	}

	$scope.view = function(id) {
		$scope.selectedTab = 1;
		OrdersFactory.get({id:id}, function(response){
			$scope.viewOrder = response;
		});
	}

	$scope.prepareToDelivery = function( order ) {
		$scope.selectedTab = 0;
		var index = $scope.deliveryPrepare.indexOf( order );
		if ( index < 0 ) {
			$scope.deliveryPrepare.push( order );
		}
	}

	$scope.prepare = function() {
		if ( $scope.deliveryPrepare && $scope.deliveryfrom ) {
			
		}
	}

	$scope.load();
}

angular
	.module('delivery')
	.controller('OrdersCtrl', OrdersCtrl);
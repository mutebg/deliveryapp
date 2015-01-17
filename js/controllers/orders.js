function OrdersCtrl($scope, OrdersFactory) {

	//properties
	$scope.orders = [];
	$scope.sortColumn = '_id';
	$scope.deliveryPrepare = [];
	$scope.offices = _config['offices'];
	$scope.deliveryfrom = '';
	$scope.viewOrder = {};
	$scope.selectedTab = 0;


	//methods
	$scope.load = load;
	$scope.view = view;
	$scope.prepareToDelivery = prepareToDelivery;


	//init
	load();


	//method definition
	function load() {
		$scope.orders = OrdersFactory.query();
	}

	function view(id) {
		$scope.selectedTab = 1;
		OrdersFactory.get({
			id: id
		}, function(response) {
			$scope.viewOrder = response;
		});
	}

	function prepareToDelivery(order) {
		$scope.selectedTab = 0;
		var index = $scope.deliveryPrepare.indexOf(order);
		if (index < 0) {
			$scope.deliveryPrepare.push(order);
		}
	}
}

angular
	.module('delivery')
	.controller('OrdersCtrl', OrdersCtrl);
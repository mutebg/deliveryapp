describe("Unit: Testing Products Controller", function() {
	var delivery;
	beforeEach(function() {
		delivery = angular.mock.module('delivery')
	});

	it('ProductsCtrl controller', inject(function($rootScope, $controller) {
		//expect(delivery.ProductsCtrl).not.toBeNull(null);
		var $scope = $rootScope.$new();
		var ctrl = $controller('ProductsCtrl', {
			$scope : $scope
		});

		var product = {
			name: 'name',
			price: 10,
			qty: 1
		};

		var otherProduct = {
			name: 'name2',
			price: 20,
			qty: 1
		}

		$scope.startAdding( product );
		expect( $scope.selectedTab ).toBe(1);
		expect( $scope.formAdd ).toEqual( product );
		
		$scope.startEditing( product );
		expect( $scope.selectedTab ).toBe(2);
		expect( $scope.formEdit ).toEqual( product );

		$scope.addToBasket(product);
		$scope.addToBasket(product);
		expect($scope.order.products[0].order_qty ).toBe(2);
		$scope.addToBasket(otherProduct);
		expect($scope.order.products.length).toBe(2);
		expect($scope.order.totalBasket).toBe(40);

	}));
});
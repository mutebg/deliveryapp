function ProductsCtrl($scope, ProductsFactory, OrdersFactory, notify) {
	$scope.products = [];
	$scope.sortColumn = '_id';
	$scope.formReset = {name:'', price:'', qty:''};
	$scope.formAdd 	= $scope.formReset;
	$scope.formEdit = $scope.formReset;
	$scope.orderReset = {from:'', to: '', name: '', totalBasket: 0, status: 0, products:[] };
	$scope.order = $scope.orderReset;
	$scope.offices = _config['offices'];
	$scope.selectedTab = 0;

	/*$scope.add = function() {
		$scope.form = $scope.formReset;
		
	}

	$scope.edit = function(product) {
		$scope.form = product;
		$scope.selectedTab = 2;
	}*/

	/*$scope.send = function(type) {
		var form = $scope.form;
		var id = {};
		if ( type == 'edit' ) {
			id = {id: form._id};
		}

		ProductsFactory.save( id, form, function(response){
			if ( response.success ) {
				if ( type == 'add' ) {
					$scope.products.push(response.product);
				}
				notify('OK');
			} else {
				notify({
					message: 'Error.',
					classes: 'cg-notify-message--error'
				});
			}
		});
	}*/

	/*$scope.delete = function(product) {
		if ( confirm("Are you sure") ) {
			ProductsFactory.delete( {id: product._id}, function(data) {
				var index = $scope.products.indexOf( product );
				$scope.products.splice(index, 1);
				notify('Product deleted');
			});
		}
	}*/

	/*$scope.toBasket = function(product) {
		$scope.selectedTab = 0;
		var index = $scope.basket.indexOf( product );
		if ( index >= 0 ) {
			$scope.basket[index].order_qty++;
			product.qty--;
		} else {
			product.order_qty = 1;
			product.qty--;
			$scope.basket.push(product);
		}

		$scope.total_basket += product.price;
	}*/

	/*$scope.makeOrder = function() {
		var order = $scope.order;
		order.status = 0,
		order.products = [];
		if ( $scope.basket ) {
			for ( var i in $scope.basket ) {
				order.products.push( { id: $scope.basket[i]._id, qty: $scope.basket[i].order_qty } );
			}

			OrdersFactory.save( {}, order, function(response){
				if ( response.success ) {
					notify('Order created.');
				} else {
					notify('Something wrong happened.');
				}
			});
		}
	}*/

	
	//PREPARING
	function startAdding(product) {
		$scope.formAdd = product;
		$scope.selectedTab = 1;
	}

	function startEditing(product) {
		$scope.formEdit = angular.copy( product );
		$scope.selectedTab = 2;
	}


	//CRUD
	function loadProducts() {
		$scope.products = ProductsFactory.query();
	}

	function add ( form ) {
		ProductsFactory.save( {}, form, function(response){
			if ( response.success ) {
				$scope.products.push(response.product);
				$scope.formAdd = $scope.formReset;
				notify('Product was added');
				
			} else {
				notify({
					message: 'Error.',
					classes: 'cg-notify-message--error'
				});
			}
		});
	}

	function edit(form) {
		console.log(form);
		ProductsFactory.save( { id: form._id }, form, function(response){
			if ( response.success ) {
				notify('Product was edited');
				$scope.formEdit = $scope.formReset;
			} else {
				notify({
					message: 'Error.',
					classes: 'cg-notify-message--error'
				});
			}
		});
	}

	function remove() {
		if ( confirm("Are you sure") ) {
			ProductsFactory.delete( {id: product._id}, function(data) {
				var index = $scope.products.indexOf( product );
				$scope.products.splice(index, 1);
				notify('Product was deleted');
			});
		}
	}

	//BASKET
	function addToBasket(product) {
		$scope.selectedTab = 0;
		var index = $scope.order.products.indexOf( product );
		if ( index >= 0 ) {
			$scope.order.products[index].order_qty++;
			product.qty--;
		} else {
			product.order_qty = 1;
			product.qty--;
			$scope.order.products.push(product);
		}

		$scope.order.totalBasket += product.price;
	}

	function makeOrder(order) {
		OrdersFactory.save( {}, order, function(response){
			if ( response.success ) {
				notify('Order created.');
			} else {
				notify('Something wrong happened.');
			}
		});
		
	}

	$scope.startAdding = startAdding;
	$scope.startEditing = startEditing;
	$scope.add = add;
	$scope.edit = edit;
	$scope.remove = remove;
	$scope.addToBasket = addToBasket;
	$scope.makeOrder = makeOrder;

	loadProducts();
}

angular
	.module('delivery')
	.controller('ProductsCtrl', ProductsCtrl);
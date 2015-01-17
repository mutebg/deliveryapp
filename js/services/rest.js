function Products($resource) {
	return $resource(_config['domain'] + 'products/:id');
}

function Orders($resource) {
	return $resource(_config['domain'] + 'orders/:id');
}

function Delivery($resource) {
	return $resource(_config['domain'] + 'delivery/:id');
}

function Map($resource) {
	return $resource(_config['domain'] + 'map/:id', {
		id: '@id'
	}, {
		calculate: {
			method: 'POST'
		}
	});
}

angular
	.module('delivery')
	.factory('ProductsFactory', Products)
	.factory('OrdersFactory', Orders)
	.factory('DeliveryFactory', Delivery)
	.factory('MapFactory', Map)
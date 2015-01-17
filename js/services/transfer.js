function TransferService() {

	var data = {};

	function add(key, item) {
		data[key] = item;
	}

	function get(key) {
		return data[key] || {};
	}

	return {
		add: add,
		get: get
	};
}

angular
	.module('delivery')
	.service('TransferService', TransferService);
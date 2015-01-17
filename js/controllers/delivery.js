function DeliveryCtrl($scope, DeliveryFactory, MapFactory) {

	//properties


	//methods
	$scope.getGmapData = getGmapData;


	//init


	//logic
	var from = 'Ivan Vazov 12';
	var ds = [
		'Burgas, Gladston 27',
		'Burgas, Alexandrovska 52',
		'Burgas, Slavianska 2',
		'Burgas, Hrizto Botev 10',
		'Burgas, Zahari Zograf 8'
	];
	//getGmapData(from, to);


	//method definition
	function getGmapData(from, to) {
		var post = {
			from: from,
			destinations: destinations.join('|')
		}

		MapFactory.calculate(post, function(response) {
			console.log(response);
		});
	}
}

angular
	.module('delivery')
	.controller('DeliveryCtrl', DeliveryCtrl);
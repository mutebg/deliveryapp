function DeliveryCtrl($scope, DeliveryFactory, MapFactory) {




	$scope.getGmapData = function(from, destinations) {
		var post = {
			from: from,
			destinations: destinations.join('|')
		}

		MapFactory.calculate(post, function(response){
			console.log(response);
		});
	}

	
	var from = 'Ivan Vazov 12';
	var ds = [
			'Burgas, Gladston 27',
			'Burgas, Alexandrovska 52',
			'Burgas, Slavianska 2',
			'Burgas, Hrizto Botev 10',
			'Burgas, Zahari Zograf 8'
		];
	$scope.getGmapData(from, ds);

}

angular
	.module('delivery')
	.controller('DeliveryCtrl', DeliveryCtrl);
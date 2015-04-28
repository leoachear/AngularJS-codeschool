(function(){
	var app = angular.module('gemStore', []);
	var gem = {
		name: 'Azurite',
		price: 2.95,
		canPurchase: false,
    	soldOut: false
	}

	app.controller('StoreController', function(){
		this.product = gem;
	});


})();
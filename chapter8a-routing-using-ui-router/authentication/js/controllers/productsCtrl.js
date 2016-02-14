angular
    .module('demoApp')
    .controller('productsCtrl', function($scope, $http, authService, $state) {

    	$http
    		.get('http://localhost:3000/api/v1/products', {
    			headers: {
    				'X-Access-Token': authService.getToken()
    			}
    		})
    		.then(function (response) {
    			$scope.products = response.data;
    		}, function (response) {
    			if(response.status == 401)
    				$state.go('login');
    		});


    });

angular
    .module('booksCart')
    .service('OrderService', function($http, AuthService) {
        var url = 'http://localhost:3000/api/v1/orders';
        
        this.createOrder = function(order) {
        	var token = AuthService.getToken();
            order['createdAt'] = new Date();
            return $http.post(url, order, {
            	headers: {
            		'X-Access-Token': token
            	}
            });
        };

        this.getAll = function () {
        	var token = AuthService.getToken();
        	return $http.get(url, {
        		headers: {
        			'X-Access-Token': token
        		}
        	});
        }
    })

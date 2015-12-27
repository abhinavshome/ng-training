angular
    .module('booksCart')
    .controller('HeaderCtrl', function(CartService, AuthService, $location, AlertService) {
        this.cart = CartService.getCart();
        this.alert = AlertService.getAlert();

        this.isLoggedIn = function () {
        	return AuthService.isLoggedIn();
        };

        this.logout = function () {
        	AuthService.logout();
        	console.log('logged out successfully');
        	$location.path('/login');
        };
    });

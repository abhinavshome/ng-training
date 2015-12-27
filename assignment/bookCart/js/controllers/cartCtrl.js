angular
    .module('booksCart')
    .controller('CartCtrl', function(CartService, OrderService, $location, AlertService) {
        this.cart = CartService.getCart();

        this.increaseQuantity = function(item) {
            item.quantity++;
            this.cart.totalQuantity++;
            this.cart.totalPrice += item.price;
            AlertService.success('increased')
        };

        this.decreaseQuantity = function(item) {
            if (item.quantity > 0) {
                item.quantity--;
                this.cart.totalQuantity--;
                this.cart.totalPrice -= item.price;
            }
        };

        this.placeOrder = function() {
            OrderService
                .createOrder(this.cart)
                .then(function(response) {
                        AlertService.success('Order placed successfully');
                    },
                    function(response) {
                        if (response.status == 401) {
                            console.log(' => ');
                            //$location.path('/login');
                            AlertService.error('Please login first');
                        }
                    });
        };
    });

angular
    .module('booksCart')
    .controller('CartCtrl', function(CartService, OrderService, $location) {
        this.cart = CartService.getCart();

        this.increaseQuantity = function(item) {
            item.quantity++;
            this.cart.totalQuantity++;
            this.cart.totalPrice += item.price;
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
                        console.log('Order placed successfully');
                    },
                    function(response) {
                        if (response.status == 401) {
                            console.log('Unauthorised to fetch orders, sending to login');
                            $location.path('/login');
                        }
                    }
                );
        }
    });

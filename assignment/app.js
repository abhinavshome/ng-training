angular
    .module('shopApp', [])
    .controller('ShopCtrl', function() {
            var self = this;

            //initialize with some items
            self.inventory = [{
                name: 'laptop',
                price: 11
            }, {
                name: 'bag',
                price: 33
            }];

            self.cart = [];

            //add items to repository
            self.addToInventory = function() {
                self.inventory.push(angular.copy(self.item));
            }

            //try to find item in cart
            //if its there increase its count
            //if not add to it and set quantity to one
            //also update total cart amount
            self.addProductToCart = function(product) {
                var productInCart = findProductInCart(product.name);
                if (productInCart) {
                    productInCart.quantity++;
                } else {
                    if (!product.quantity)
                        product.quantity = 1;
                    self.cart.push(angular.copy(product));
                }
                refreshCart();
            }

            function findProductInCart(name) {
                //console.log(name, self.cart);
                for (var i = 0; i < self.cart.length; i++) {
                    if (self.cart[i].name == name) {
                        return self.cart[i];
                    }
                }
                return false;
            }

            function refreshCart() {
                var total = 0;
                for (var i = 0; i < self.cart.length; i++) {
                    total += self.cart[i].price * self.cart[i].quantity;
                }
                self.totalCartValue = total;
            }
        

    });

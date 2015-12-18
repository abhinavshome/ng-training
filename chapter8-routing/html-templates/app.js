angular
    .module('routingApp', ['ngRoute'])
    .controller('ProductCtrl', function (PostService) {
        this.products = [
            {name: 'Bag', price: 22},
            {name: 'Laptop', price: 11},
            {name: 'Purse', price: 23}
        ];
    
        this.cart = {
            items: [],
            totalPrice: 0
        }
});
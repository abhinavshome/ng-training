angular
    .module('booksCart')
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'BookListCtrl as ctrl',
                templateUrl: 'templates/book-list.html'
            })
            .when('/cart', {
                controller: 'CartCtrl as ctrl',
                templateUrl: 'templates/cart.html'
            })
            .when('/login', {
                controller: 'LoginCtrl as ctrl',
                templateUrl: 'templates/login.html'
            })
            .when('/orders', {
                controller: 'OrderCtrl as ctrl',
                templateUrl: 'templates/orders.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

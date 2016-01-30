angular
    .module('booksCart', ['ngRoute'])
    .run(function($rootScope, AlertService) {
        //clear alert message on every route change
        $rootScope.$on("$routeChangeStart", function(event, nextRoute, prevRoute) {
            AlertService.clear();
        })

    });

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
            .when('/book/add', {
                controller: 'BookAddCtrl as ctrl',
                templateUrl: 'templates/book-add.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

angular
	.module('booksCart')
	.directive('expandableSummary', function () {
		return {
			restrict: 'E',
			templateUrl: 'templates/expandable-summary.html',
			scope: {
				order: "="
			},
			link: function (scope, element, attributes) {
				scope.showDetails = function () {
					scope.detailShown = !scope.detailShown;
				}
			}
		}
	})
angular
	.module('booksCart')
	.controller('BookAddCtrl', function (BookService, AlertService) {
		var ctrl = this;

		ctrl.addBook = function () {
			ctrl.newBook.price = parseInt(ctrl.newBook.price);
			BookService
				.add(ctrl.newBook)
				.then(function () {
					AlertService.success(ctrl.newBook.title + ' created successfully');
				});
		};
	})
angular
    .module('booksCart')
    .controller('BookListCtrl', function(BookService, CartService, AlertService) {
        var ctrl = this;

        function loadBooks() {
            BookService
                .getAll()
                .then(function(response) {
                    ctrl.books = response.data;
                });
        }

        loadBooks();

        ctrl.addToCart = function(book) {
            AlertService.success(book.title + ' added to cart');
            CartService.add(book);
        };
    });

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

angular
    .module('booksCart')
    .controller('LoginCtrl', function(AuthService, AlertService) {
        var ctrl = this;

        //prefill login form
        ctrl.user = {
            username: 'admin',
            password: 'admin'
        }

        ctrl.login = function() {
            AuthService
                .login(ctrl.user)
                .then(function(response) {
                    AlertService.success('Login successful');
                });
        }
    });

angular
    .module('booksCart')
    .controller('OrderCtrl', function(OrderService, $location, AlertService) {
        var ctrl = this;

        OrderService
            .getAll()
            .then(function(response) {
                ctrl.orders = response.data;
            }, function(response) {
                if (response.status == 401) {
                    $location.path('/login');
                    AlertService.error('You need to login to see your orders');
                }
            });

    });

angular
    .module('booksCart')
    .filter('titlecase', function() {
        return function(s) {
            s = s || '';
            return s.toString().toLowerCase().replace(/\b([a-z])/g, function(ch) {
                return ch.toUpperCase();
            });
        };
    });

angular
    .module('booksCart')
    .service('AlertService', function() {
        var alert = {
            type: '',
            message: ''
        };

        //this comment has been changed 
        this.getAlert = function () {
        	return alert;
        }

        this.success = function(message) {
            alert.type = 'success';
            alert.message = message;
        };

        this.error = function(message) {
            alert.type = 'error';
            alert.message = message;
        };

        this.clear = function () {
        	alert.type = '';
        	alert.message = '';
        }
    });

angular
    .module('booksCart')
    .service('AuthService', function($http) {

        var url = 'http://localhost:3000/login',
            authData = {};

        this.login = function(user) {
            return $http
                .post(url, user)
                .then(function(response) {
                	console.log('setting token', response.data.token);
                    authData.token = response.data.token;
                    return response; //return for next success callback
                });
        };

        this.getToken = function () {
        	return authData.token;
        };

        this.getAuth = function () {
            return authData;
        };

        this.isLoggedIn = function () {
            return authData.token !== undefined;
        };

        this.logout = function () {
            authData.token = undefined;
        };


    })

angular
	.module('booksCart')
	.service('BookService', function ($http) {
		var url = 'http://localhost:3000/book';

		this.getAll = function () {
			return $http.get(url);
		};

		this.add = function (book) {
			return $http.post(url, book);
		};

	});
angular
    .module('booksCart')
    .service('CartService', function() {
        var cart = {
            items: [],
            totalQuantity: 0,
            totalPrice: 0
        };

        var findInCart = function(bookId) {
            for (var i = 0; i < cart.items.length; i++)
                if (cart.items[i] && cart.items[i].bookId == bookId)
                    return i;

        };

        this.getCart = function() {
            return cart;
        };

        this.add = function(book) {
            var cartIndex = findInCart(book.id);

            if (cartIndex !== undefined)
                cart.items[cartIndex].quantity++;
            else
                cart.items.push({
                    bookId: book.id,
                    title: book.title,
                    price: book.price,
                    quantity: 1
                });

            cart.totalPrice += book.price;
            cart.totalQuantity += 1;
        };

    })

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

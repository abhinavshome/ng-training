angular
    .module('todoApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'TodoListCtrl as ctrl',
                templateUrl: 'app/templates/todo.html'
            })
            .when('/summary', {
                controller: 'TodoSummaryCtrl as ctrl',
                templateUrl: 'app/templates/summary.html'
            })
            .when('/todo/add', {
                controller: 'TodoAddCtrl as ctrl',
                templateUrl: 'app/templates/add.html'
            })
            .when('/todo/edit/:id', {
                controller: 'TodoEditCtrl as ctrl',
                templateUrl: 'app/templates/edit.html'
            })
            .when('/my-ip', {
                controller: 'IpCtrl as ctrl',
                templateUrl: 'app/templates/ip.html',
                resolve: {
                    'ip': function($http) {
                        return $http.get('https://api.ipify.org/?format=json');
                    },
                    'message': function() {
                        return "Hello World";
                    }
                }
            })
            .when('/login', {
                controller: 'LoginCtrl as ctrl',
                templateUrl: 'app/templates/login.html'
            })
            .when('/products', {
                controller: 'ProductCtrl as ctrl',
                templateUrl: 'app/templates/products.html',
                loginRequired: true

            })
    });

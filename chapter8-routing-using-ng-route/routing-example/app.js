angular
    .module('todoApp', ['ngRoute'])
    .value('url', 'http://localhost:3000/todo/')
    .controller('TodoCtrl', function($http, url) {
        var ctrl = this;
        $http
            .get(url)
            .then(function(response) {
                ctrl.todos = response.data;
            });
    })
    .controller('TodoSummaryCtrl', function($http, url) {
        var ctrl = this;
        $http
            .get(url)
            .then(function(response) {
                ctrl.todos = response.data;
            });
    })
    .controller('TodoDetailCtrl', function($http, $routeParams, url) {
        var ctrl = this;
        $http
            .get(url + $routeParams.id)
            .then(function(response) {
                ctrl.todo = response.data;
            });
    })
    .controller('TodoEditCtrl', function($http, $routeParams, url, $location) {
        var ctrl = this;
        $http
            .get(url + $routeParams.id)
            .then(function(response) {
                ctrl.todoToEdit = response.data;
            });
        this.submit = function() {
            $http
                .put(url + $routeParams.id, ctrl.todoToEdit)
                .then(function(response) {
                    $location.path('/')
                });
        }
    })
    .controller('TodoAddCtrl', function($http, url, $location) {
        var ctrl = this;
        this.submit = function() {
            $http
                .post(url, ctrl.newTodo)
                .then(function(response) {
                    ctrl.todos = response.data;
                    $location.path('/');
                });
        }
    })
    .controller('IpCtrl', function(ip, message) {
        var ctrl = this;
        ctrl.message = message;
        ctrl.ip = ip;

        // .get("https://api.ipify.org/?format=json")
        //     .then(function(response) {
        //         ctrl.ip = response.data;
        //     })

    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "TodoCtrl as ctrl",
                templateUrl: "todo-list.html"
            })
            .when('/todo/summary', {
                controller: "TodoSummaryCtrl as ctrl",
                templateUrl: 'todo-summary.html'
            })
            .when('/todo/detail/:id', {
                controller: "TodoDetailCtrl as ctrl",
                templateUrl: "todo-detail.html"
            })
            .when('/todo/add', {
                controller: "TodoAddCtrl as ctrl",
                templateUrl: "todo-add.html"
            })
            .when('/todo/edit/:id', {
                controller: "TodoEditCtrl as ctrl",
                templateUrl: "todo-edit.html"
            })
            .when('/my-ip', {
                controller: "IpCtrl as ctrl",
                templateUrl: "ip.html",
                resolve: {
                    ip: function($http) {
                        return $http.get('https://api.ipify.org/?format=json')
                    },
                    message: function() {
                        return 'Hello world'
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })

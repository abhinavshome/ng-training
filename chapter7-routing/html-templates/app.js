angular
    .module('routingApp', ['ngRoute'])
    .controller('PostListCtrl', function(PostService) {
        this.posts = PostService.list();
    })
    .controller('PostDetailCtrl', function(PostService, $routeParams) {
        this.post = PostService.get($routeParams.id);
    })
    .controller('IpCtrl', function(ip, message) {
        this.ip = ip;
        this.message = message;
    })
    .controller('IpWoResolveCtrl', function($http) {
        var self = this;
        $http.get('http://jsonip.com').then(function (response) {
            self.ip = response.data;
        });
        self.message = 'to IpCtrl';
    })
    .factory('PostService', function() {
        var posts = [{
            id: 1,
            title: 'Post 1',
            author: 'Author 1'
        }, {
            id: 2,
            title: 'Post 2',
            author: 'Author 2'
        }, {
            id: 3,
            title: 'Post 3',
            author: 'Author 3'
        }, {
            id: 4,
            title: 'Post 4',
            author: 'Author 4'
        }];

        return {
            list: function() {
                return posts;
            },
            get: function(id) {
                for (var i = 0; i < posts.length; i++) {
                    if (i == posts[i].id - 1)
                        return posts[i];
                }
            }
        }
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'PostListCtrl as ctrl',
                templateUrl: 'list.html'
            })
            .when('/post/:id', {
                controller: 'PostDetailCtrl as ctrl',
                //                template: '<pre>{{ ctrl.post | json }}</pre>',  //this also works
                templateUrl: 'detail.html'
            })
            .when('/my-ip', {
                controller: 'IpCtrl as ipCtrl',
                templateUrl: 'ip.html',
                resolve: {
                    ip: function($http) {
                        return $http.get('http://jsonip.com');
                    },
                    message: function() {
                        return 'to IpCtrl';
                    }
                }
            })
            .when('/my-ip-wo-resolve', {
                controller: 'IpWoResolveCtrl as ipCtrl',
                templateUrl: 'ip.html'
            })
            .when('/query', {
                template: '<pre>{{qCtrl.routeParams | json}}<pre>',
                controller: function($routeParams) {
                    this.routeParams = $routeParams;
                },
                controllerAs: 'qCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

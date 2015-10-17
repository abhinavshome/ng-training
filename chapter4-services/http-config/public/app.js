    angular
        .module('blogApp', [])
        .controller('PostsCtrl', function($http) {
            var self = this;
            self.posts = [];

            self.getPosts = function() {
                $http.get('/api/post', {
                    cache: true
                }).then(function(response) {
                    self.posts = response.data;
                }, function(error) {
                    console.error('Error while fetching posts');
                });
            };

            self.getPosts();

            self.getFirstPost = function() {
                $http.get('api/post/1').then(function(response) {
                    self.firstPost = response.data;
                });
            };

            self.addPost = function() {
                $http.post('/api/post', self.post, {
                    
                }).then(function(response) {
                    console.log(response);
                    self.getPosts();
                }, function(error) {
                    console.log(error)
                });
            }


        });

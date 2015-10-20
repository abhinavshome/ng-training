    angular
        .module('blogApp', [])
        .controller('PostsCtrl', function($http) {
            var self = this;
            self.posts = [];

            self.getPosts = function() {
                $http.get('/api/post').then(function(response) {
                    self.posts = response.data;
                }, function(error) {
                    console.error('Error while fetching posts');
                });
            }

            self.getPosts();

            self.updatePost = function(post) {
                $http.put('/api/post/' + post.id, post).then(function(response) {
                    console.log(response);
                    self.getPosts();
                }, function(error) {
                    console.log(error)
                });
            }

            self.deletePost = function(post) {
                $http.delete('/api/post/' + post.id, post).then(function(response) {
                    console.log(response);
                    self.getPosts();
                }, function(error) {
                    console.log(error)
                });
            }


        });

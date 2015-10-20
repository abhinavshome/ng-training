angular.module('postApp', [])
    .controller('PostCtrl', function(PostService) {
        var self = this;

        PostService
        .getAll()
        .then(function(response) {
            self.posts = response.data;
        }, function(response) {
            console.log(response);
        });

        self.addPost = function() {
            console.log(self.post);
            PostService
                .add(self.post)
                .then(function(response) {
                    console.log(response.data);
                }, function(response) {
                    console.log(response);
                });
        }

        self.updatePost = function () {
            PostService
                .update(self.posts[0])
                .then(function(response) {
                    console.log(response.data);
                }, function(response) {
                    console.log(response);
                });
        }
    })
    .service('PostService', function ($http) {
        var self = this;

        self.getAll = function () {
            return $http.get('/api/post');
        }

        self.add = function (post) {
            return $http.post('/api/post', post);
        }

        self.update = function (post) {
            return $http.put('/api/post/' + post.id, post);
        }
    })

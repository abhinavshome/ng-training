angular.module('postApp', [])
    .controller('PostCtrl', function(PostService) {
        var self = this;

        self.refreshPosts = function() {
            PostService
                .getAll()
                .then(function(response) {
                    self.posts = response.data;
                }, function(response) {
                    console.log(response);
                });
        }

        self.refreshPosts();

        self.addPost = function() {
            console.log(self.post);
            PostService
                .add(self.post)
                .then(function(response) {
                    self.refreshPosts();
                }, function(response) {
                    console.log(response);
                });
        }

        self.showUpdatePostForm = function(post) {
            self.postToUpdate = angular.copy(post);
        }

        self.updatePost = function(post) {
            PostService
                .update(self.postToUpdate)
                .then(function(response) {
                    self.refreshPosts();
                }, function(response) {
                    console.log(response);
                });
        }

        self.deletePost = function(post) {
            PostService
                .delete(post)
                .then(function(response) {
                    self.refreshPosts();
                }, function(response) {
                    console.log(response);
                });
        }
    })
    .service('PostService', function($http) {
        var self = this;
        var baseUrl = 'http://localhost:3000';
        var url = baseUrl + '/post';

        self.getAll = function() {
            return $http.get(url);
        }

        self.add = function(post) {
            return $http.post(url, post);
        }

        self.update = function(post) {
            return $http.put(url + '/' + post.id, post);
        }

        self.delete = function(post) {
            return $http.delete(url + '/' + post.id);
        }
    })

angular
    .module('blogApp', [])
    .controller('PostsCtrl', function() {
        this.blogTitle = "My Posts";

        this.resetTitle = function() {
            this.blogTitle = "My Blog Posts";
        }
    });

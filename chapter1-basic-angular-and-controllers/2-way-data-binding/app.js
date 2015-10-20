angular
    .module('blogApp', [])
    .controller('PostsCtrl', function($scope) {
        $scope.blogTitle = "My Posts";

        $scope.resetTitle = function() {
            this.blogTitle = "My Blog Posts";
        }
    });

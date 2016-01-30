/* File app.js */
function PostsCtrl($scope) {
    $scope.blogTitle = "My Posts";

    $scope.resetTitle = function() {
        $scope.blogTitle = "My Blog Posts";
    }
}

angular.module('blogApp', []).controller('PostsCtrl', PostsCtrl);

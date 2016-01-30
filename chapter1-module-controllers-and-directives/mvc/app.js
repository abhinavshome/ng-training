function PostsCtrl($scope) {
    $scope.firstPost = "This is my first post";
}

angular.module('blogApp', []).controller('PostsCtrl', PostsCtrl);

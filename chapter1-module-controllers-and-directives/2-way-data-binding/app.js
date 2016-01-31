angular
    .module('blogApp', [])
    .controller('postsCtrl', function($scope) {
        $scope.blogTitle = "My Posts";

        $scope.resetTitle = function() {
            $scope.blogTitle = "My Blog Posts";
        }
    });

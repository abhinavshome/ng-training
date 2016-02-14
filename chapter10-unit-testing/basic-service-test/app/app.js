angular
    .module('blogApp', [])
    .factory('postService', function() {
        var posts = [{
            id: 1,
            title: 'Item 0'
        }, {
            id: 2,
            title: 'Item 1'
        }];
        return {
            list: function() {
                return posts;
            },
            add: function(item) {
                posts.push(item);
            }
        };
    })
    .controller('postCtrl', function($scope, postService) {
        $scope.posts = postService.list();
    });

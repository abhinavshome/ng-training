angular
	.module('blogApp', [])
	.controller('postsCtrl', function ($scope) {
		$scope.posts = [
			{id: 1, title: "This is my 1st post", month: 'jan'},
			{id: 2, title: "This is my 2nd post", month: 'mar'},
			{id: 3, title: "This is my 3rd post", month: 'june'},
			{id: 4, title: "This is my 4th post", month: 'july'}
		];

		$scope.postsObj = {
			jan: {id: 1, title: "This is my 1st post"},			
			mar: {id: 2, title: "This is my 2nd post"},
			june: {id: 3, title: "This is my 3rd post"},
			july: {id: 4, title: "This is my 4th post"}
		};
	});
angular
	.module('booksCart')
	.service('BookService', function ($http) {
		var url = 'http://localhost:3000/book';

		this.getAll = function () {
			return $http.get(url);
		};

		this.add = function (book) {
			return $http.post(url, book);
		};

	});
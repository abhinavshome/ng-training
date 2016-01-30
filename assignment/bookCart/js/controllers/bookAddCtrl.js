angular
	.module('booksCart')
	.controller('BookAddCtrl', function (BookService, AlertService) {
		var ctrl = this;

		ctrl.addBook = function () {
			ctrl.newBook.price = parseInt(ctrl.newBook.price);
			BookService
				.add(ctrl.newBook)
				.then(function () {
					AlertService.success(ctrl.newBook.title + ' created successfully');
				});
		};
	})
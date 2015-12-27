angular
    .module('booksCart')
    .controller('BookListCtrl', function(BookService, CartService) {
        var ctrl = this;

        function loadBooks() {
            BookService
                .getAll()
                .then(function(response) {
                    ctrl.books = response.data;
                });
        }

        loadBooks();

        ctrl.addToCart = function(book) {
            CartService.add(book);
        };
    });

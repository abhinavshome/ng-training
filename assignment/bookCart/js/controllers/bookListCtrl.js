angular
    .module('booksCart')
    .controller('BookListCtrl', function(BookService, CartService, AlertService) {
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
            AlertService.success(book.title + ' added to cart');
            CartService.add(book);
        };
    });

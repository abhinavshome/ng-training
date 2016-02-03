angular
    .module('bookCart')
    .factory('bookService', function(Book) {
        var books = [ {
            id: 2,
            title: 'Monk who sold his ferrari',
            author: 'Some Author',
            price: 22
        }, {
            id: 3,
            title: 'ANother book',
            author: 'Another Author',
            price: 22
        }];

        return {
            getAll: function() {
                return books;
            },

            add: function(book) {
                book.id = books.length + 1;
                books.push(book);
            },

            update: function(book) {
                console.log(book);
                books[book.id - 1] = book;
            }
        }


    })
    .factory('Book', function () {
        function Book (title) {
            this.title = title;
        }

        return Book;
    })
    ;

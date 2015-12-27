var booksApi = {

    getAll: function(req, res) {
        var allBooks = books; // Spoof a DB call
        res.json(allBooks);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var book = findById(id); // Spoof a DB call
        res.json(book);
    },

    create: function(req, res) {
        var newBook = req.body;
        newBook.id = ++lastIdUsed;
        books.push(newBook); // Spoof a DB call
        res.json(newBook);
    },

    update: function(req, res) {
        var updateBook = req.body;
        var id = parseInt(req.params.id);
        index = findIndexById(id);
        books[index] = updateBook // Spoof a DB call
        res.json(updateBook);
    },

    delete: function(req, res) {
        var id = parseInt(req.params.id);
        var index = findIndexById(id);
        books.splice(index, 1) // Spoof a DB call
        res.json(true);
    }
};

var lastIdUsed = 2;

function findById(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            return books[i];
        }
    }
}

function findIndexById(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            return i;
        }
    }
}

var books = [{
    id: 1,
    title: 'The Alchemist',
    desc: 'Very nice book',
    price: 22
}, {
    id: 2,
    title: 'Monk who sold his ferrari',
    desc: 'Best book',
    price: 24
}];

module.exports = booksApi;

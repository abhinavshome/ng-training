var productsApi = {

    getAll: function(req, res) {
        var allProducts = products; // Spoof a DB call
        res.json(allProducts);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var product = findById(id); // Spoof a DB call
        res.json(product);
    },

    create: function(req, res) {
        var newProduct = req.body;
        newProduct.id = ++lastIdUsed;
        products.push(newProduct); // Spoof a DB call
        res.json(newProduct);
    },

    update: function(req, res) {
        var updateProduct = req.body;
        var id = parseInt(req.params.id);
        index = findIndexById(id);
        products[index] = updateProduct // Spoof a DB call
        res.json(updateProduct);
    },

    delete: function(req, res) {
        var id = parseInt(req.params.id);
        var index = findIndexById(id);
        products.splice(index, 1) // Spoof a DB call
        res.json(true);
    }
};

var lastIdUsed = 0;

function findById(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            return products[i];
        }
    }
}

function findIndexById(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            return i;
        }
    }
}

var products = [];

module.exports = productsApi;

var ordersApi = {

    getAll: function(req, res) {
        var allOrders = orders; // Spoof a DB call
        res.json(allOrders);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var order = findById(id); // Spoof a DB call
        res.json(order);
    },

    create: function(req, res) {
        var newOrder = req.body;
        newOrder.id = ++lastIdUsed;
        orders.push(newOrder); // Spoof a DB call
        res.json(newOrder);
    },

    update: function(req, res) {
        var updateOrder = req.body;
        var id = parseInt(req.params.id);
        index = findIndexById(id);
        orders[index] = updateOrder // Spoof a DB call
        res.json(updateOrder);
    },

    delete: function(req, res) {
        var id = parseInt(req.params.id);
        var index = findIndexById(id);
        orders.splice(index, 1) // Spoof a DB call
        res.json(true);
    }
};

var lastIdUsed = 0;

function findById(id) {
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].id == id) {
            return orders[i];
        }
    }
}

function findIndexById(id) {
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].id == id) {
            return i;
        }
    }
}

var orders = [];

module.exports = ordersApi;

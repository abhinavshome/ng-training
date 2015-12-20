var todosApi = {

    getAll: function(req, res) {
        var allTodos = todos; // Spoof a DB call
        res.json(allTodos);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var todo = findById(id); // Spoof a DB call
        res.json(todo);
    },

    create: function(req, res) {
        var newTodo = req.body;
        newTodo.id = ++lastIdUsed;
        todos.push(newTodo); // Spoof a DB call
        res.json(newTodo);
    },

    update: function(req, res) {
        var updateTodo = req.body;
        var id = parseInt(req.params.id);
        index = findIndexById(id);
        todos[index] = updateTodo // Spoof a DB call
        res.json(updateTodo);
    },

    delete: function(req, res) {
        var id = parseInt(req.params.id);
        var index = findIndexById(id);
        todos.splice(index, 1) // Spoof a DB call
        res.json(true);
    }
};

var lastIdUsed = 4;

function findById(id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            return todos[i];
        }
    }
}

function findIndexById(id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            return i;
        }
    }
}

var todos = [{
    id: 1,
    label: 'Fix bulb',
    priority: 3,
    done: false
}, {
    id: 2,
    label: 'Bring milk',
    priority: 1,
    done: false
}, {
    id: 3,
    label: 'Pay internet bill',
    priority: 4,
    done: true
}, {
    id: 4,
    label: 'Clean kitchen',
    priority: 5,
    done: false
}];

module.exports = todosApi;

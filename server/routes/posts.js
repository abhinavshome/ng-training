var postsApi = {

    getAll: function(req, res) {
        var allposts = posts; // Spoof a DB call
        res.json(allposts);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var post = posts[0]; // Spoof a DB call
        res.json(post);
    },

    create: function(req, res) {
        var newpost = req.body;
        newpost.id = posts.length + 1;
        posts.push(newpost); // Spoof a DB call
        res.json(newpost);
    },

    update: function(req, res) {
        var updatepost = req.body;
        var id = req.params.id;
        posts[id - 1] = updatepost // Spoof a DB call
        res.json(updatepost);
    },

    delete: function(req, res) {
        var id = req.params.id;
        posts.splice(id - 1, 1) // Spoof a DB call
        res.json(true);
    }
};

var posts = [{
    author: 'Ram',
    title: 'post 1',
    id: 1
}, {
    author: 'Shyam',
    title: 'post 2',
    id: 2
}, {
    author: 'Manohar',
    title: 'post 3',
    id: 3
}];

module.exports = postsApi;

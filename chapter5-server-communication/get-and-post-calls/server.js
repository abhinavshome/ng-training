// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT


var router = express.Router();

var posts = [
  {id: 1, label: 'First post', author: 'Ram'},
  {id: 2, label: 'Second post', author: 'Mohan'},
  {id: 3, label: 'Middle post', author: 'Jay'},
  {id: 4, label: 'Last post', author: 'Kishan'},
  {id: 5, label: 'Really the last post', author: 'Sachin'}

];
var lastId = 6;

router.get('/post', function(req, res) {
  res.send(posts);
});
router.post('/post', function(req, res) {
  var post = req.body;
  post.id = lastId;
  lastId++;
  posts.push(post);
  res.send(post);
});

router.get('/post/:id', function(req, res) {
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id == req.params.id) {
      res.send(posts[i]);
      break;
    }
  }
  res.send({msg: 'post not found'}, 404);
});

router.put('/post/:id', function(req, res) {
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id == req.params.id) {
      posts[i] = req.body;
      posts[i].id = req.params.id;
      res.send(posts[i]);
      break;
    }
  }
  res.send({msg: 'post not found'}, 404);
});

router.post('/login', function(req, res) {
  console.log('API LOGIN FOR ', req.body);
  res.send({msg: 'Login successful for ' + req.body.username});
});


app.use('/api', router);



app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user

// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in product
app.use(methodOverride()); 					// simulate DELETE and PUT


var router = express.Router();

var products = [
  {id: 1, label: 'First product', price: 22},
  {id: 2, label: 'Second product', price: 22},
  {id: 3, label: 'Middle product', price: 11},
  {id: 4, label: 'Last product', price: 33},
  {id: 5, label: 'Really the last product', price: 12}
];
var lastId = 6;

router.get('/product', function(req, res) {
  res.send(products);
});
router.post('/product', function(req, res) {
  var product = req.body;
  product.id = lastId;
  lastId++;
  products.push(product);
  res.send(product);
});

router.get('/product/:id', function(req, res) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == req.params.id) {
      res.send(products[i]);
      break;
    }
  }
  res.send({msg: 'product not found'}, 404);
});

router.put('/product/:id', function(req, res) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == req.params.id) {
      products[i] = req.body;
      products[i].id = req.params.id;
      res.send(products[i]);
      break;
    }
  }
  res.send({msg: 'product not found'}, 404);
});

router.post('/login', function(req, res) {
  console.log('API LOGIN FOR ', req.body);
  res.send({msg: 'Login successful for ' + req.body.username});
});


app.use('/api', router);



app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user

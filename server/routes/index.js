var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var products = require('./products.js');
var user = require('./users.js');
var todos = require('./todos.js');
var books = require('./books.js');
var orders = require('./orders.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);
router.get('/todo', todos.getAll);
router.get('/todo/:id', todos.getOne);
router.post('/todo/', todos.create);
router.put('/todo/:id', todos.update);
router.delete('/todo/:id', todos.delete);

router.get('/book', books.getAll);
router.get('/book/:id', books.getOne);
router.post('/book/', books.create);
router.put('/book/:id', books.update);
router.delete('/book/:id', books.delete);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/products', products.getAll);
router.get('/api/v1/products/:id', products.getOne);
router.post('/api/v1/products/', products.create);
router.put('/api/v1/products/:id', products.update);
router.delete('/api/v1/products/:id', products.delete);


router.get('/api/v1/orders', orders.getAll);
router.get('/api/v1/orders/:id', orders.getOne);
router.post('/api/v1/orders/', orders.create);
router.put('/api/v1/orders/:id', orders.update);
router.delete('/api/v1/orders/:id', orders.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/api/v1/admin/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);

module.exports = router;

var app = require('../main.js')
var cartService = require('./cartService.js')

app.get('/cart', function (req, res) {

    res.send(cartService.getCart(req.param("cartId")));

});

app.post('/addToCart', function (req, res) {

    res.send(cartService.addToCart(req.body, req.header("cartId")));

});

app.post('/updateCart', function (req, res) {

    res.send(cartService.updateCart(req.body, req.header("cartId")));

});

app.post('/removeCartItem', function (req, res) {

    res.send(cartService.removeCartItem(req.body, req.header("cartId")));

});
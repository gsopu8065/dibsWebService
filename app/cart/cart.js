var app = require('../main.js')
var cartService = require('./cartService.js')

app.get('/cart', function (req, res) {

    cartService.getCart(req.header("cartId"), res);

});

app.post('/addToCart', function (req, res) {

    cartService.addToCart(req.body, req.header("cartId"), res);

});

app.post('/updateCart', function (req, res) {

    cartService.updateCart(req.body, req.header("cartId"), res);

});

app.delete('/removeCartItem', function (req, res) {

    cartService.removeCartItem(req.body, req.header("cartId"), res);

});

app.delete('/emptyCart', function (req, res) {

    cartService.emptyCart(req.body, req.header("cartId"), res);

});
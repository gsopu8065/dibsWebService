var app = require('../main.js')
var checkoutService = require('./checkoutService.js')
app.post('/continueCheckout', function (req, res) {

    res.send(checkoutService.continueCheckout(req.head("cartId"), req.body));

});
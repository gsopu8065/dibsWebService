var app = require('../main.js')
var paymentService = require('./paymentService.js')

app.post('/makePayment', function (req, res) {

    res.send(paymentService.submitPayment(req.param("cartId"), req.body));

});
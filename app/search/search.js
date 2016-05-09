/**
 * Created by srujangopu on 3/8/16.
 */
var app = require('../main.js')
var searchService = require('./searchService.js')

app.get('/search', function (req, res) {
    searchService.search(req.query.keyword, res);
});

app.get('/product', function (req, res) {
    searchService.searchProduct(req.query.productId, res);
});

app.post('/addProduct', function (req, res) {
    searchService.addProduct(req.body, res);
});
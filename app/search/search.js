/**
 * Created by srujangopu on 3/8/16.
 */
var app = require('../main.js')
var searchService = require('./searchService.js')

app.get('/search', function (req, res) {

    res.send(searchService.search(req.param("keyword")));

});

app.get('/product', function (req, res) {

    res.send(searchService.searchProduct(req.param("productId")));

});
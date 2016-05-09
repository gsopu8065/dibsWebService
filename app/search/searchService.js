var fs = require('fs');
var mongodb = require('mongodb');
var mongoDbConnection = require('../mongodb/connection.js');

var searchService = {

    search: function(keyWord, res){

        mongoDbConnection(function(databaseConnection) {
            databaseConnection.collection('product', function(error, collection) {
                collection.find({ 'keywords': new RegExp(keyWord, 'i') }).toArray(function(err, products) {
                    res.jsonp(products);
                });
            });
        });
    },

    searchProduct: function(productId, res){
        mongoDbConnection(function(databaseConnection) {
            databaseConnection.collection('product', function(error, collection) {
                collection.findOne({_id:mongodb.ObjectID(productId)}, function(err, doc){
                    res.send(doc)
                })
            });
        });
    },

    addProduct: function(product, res){

        mongoDbConnection(function(databaseConnection) {
            databaseConnection.collection('product', function(error, collection) {
                collection.insert(product, {w: 1}, function(err, records){
                    res.send(records)
                })
            });
        });
    }


}

module.exports = searchService;
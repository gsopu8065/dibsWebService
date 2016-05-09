var mongodb = require('mongodb');
var searchService = require('../search/searchService.js')
var mongoDbConnection = require('../mongodb/connection.js');

var cartService = {

    getCart: function(cartId, res){

        mongoDbConnection(function(databaseConnection) {
            databaseConnection.collection('cart', function(error, collection) {
               collection.findOne({_id:mongodb.ObjectID(cartId)}, function(err, doc){
                   res.send(doc)
               })

            });
        });
    },

    addToCart: function(cart, cartId, res){

         if(cartId == undefined){
             mongoDbConnection(function(databaseConnection) {
                 databaseConnection.collection('cart', function(error, collection) {
                     collection.insert(cart, {w: 1}, function(err, records){
                         res.send(records)
                     })
                 });
             });
         }
         else{

             mongoDbConnection(function(databaseConnection) {
                 databaseConnection.collection('cart', function(error, collection) {
                     collection.update({_id:mongodb.ObjectID(cartId)}, { $push: { cartItems: { $each:  cart.cartItems } } }, {w: 1}, function(err, records){
                         res.send(records)
                     })
                 });
             });
         }
    },

    updateCart: function(cart, cartId, res){

        mongoDbConnection(function(databaseConnection) {
            databaseConnection.collection('cart', function(error, collection) {
                var document = {_id:mongodb.ObjectID(cartId) , 'cartItems.cartItemId' : cart.cartItems.cartItemId }
                collection.update(document, { $set: { "cartItems.$": cart.cartItems } }, {w: 1}, function(err, records){
                    res.send(records)
                })
            });
        });

    },

    removeCartItem: function(cart, cartId, res){

        mongoDbConnection(function(databaseConnection) {
            databaseConnection.collection('cart', function(error, collection) {
                var document = {_id:mongodb.ObjectID(cartId)}
                collection.update(document, { $pull: { "cartItems": {cartItemId: cart.cartItems.cartItemId} } }, {w: 1}, function(err, records){
                    res.send(records)
                })
            });
        });
    },

    emptyCart: function(cartItemId, cartId, res){

        mongoDbConnection(function(databaseConnection) {
            databaseConnection.collection('cart', function(error, collection) {
                var document = {_id:mongodb.ObjectID(cartId)}
                collection.remove(document,function(err, records){
                    res.send(records)
                })
            });
        });
    }

}

module.exports = cartService;
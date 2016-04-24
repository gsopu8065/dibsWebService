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
                         console.log("Record added as %j",records);
                         res.send(records)
                     })
                 });
             });
         }
         else{

             mongoDbConnection(function(databaseConnection) {
                 databaseConnection.collection('cart', function(error, collection) {
                     console.log(new mongodb.ObjectID(cartId))
                     collection.update({_id:mongodb.ObjectID(cartId)}, { $push: { cartItems: { $each:  cart.cartItems } } }, {w: 1}, function(err, records){
                         console.log("Record updated as %j",records);
                         res.send(records)
                     })
                 });
             });
         }
    },

    updateCart: function(cart, cartId){

    },

    removeCartItem: function(cartItemId, cartId){

    }

}

module.exports = cartService;
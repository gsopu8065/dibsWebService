var fs = require('fs')
var searchService = require('../search/searchService.js')

var cartService = {

    getCart: function(cartId){

        var contents = fs.readFileSync("../../loadData/cart/cart.json");
        var jsonContent = JSON.parse(contents);
        return jsonContent;
    },

    addToCart: function(cart, cartId){

         if(cartId != undefined){

         }
         else{

         }

    },

    updateCart: function(cart, cartId){

    },

    removeCartItem: function(cartItemId, cartId){

    }

}

module.exports = cartService;
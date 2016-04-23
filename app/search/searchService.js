var fs = require('fs')

var searchService = {

    search: function(keyWord){

        var contents = fs.readFileSync("../../loadData/search/data.json");
        var jsonContent = JSON.parse(contents);
        return jsonContent;
    },

    searchProduct: function(productId){
        var contents = fs.readFileSync("../../loadData/search/data.json");
        var jsonContent = JSON.parse(contents);
        return jsonContent;
    }

}

module.exports = searchService;
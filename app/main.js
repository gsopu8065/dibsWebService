/**
 * Created by srujangopu on 3/8/16.
 */
var express = require('express');
var app = express();

app.listen(9050, function () {
    console.log("Example app listening at http://localhost:%s", 9050)
});

module.exports = app;
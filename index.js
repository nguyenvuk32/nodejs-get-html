var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);
console.log('3000 is the magic port');

var request = require('request');
var cheerio = require('cheerio');

app.get("/", function(req, res){
    request('http://600tuvungtoeic.com/index.php?mod=lesson&id=1', function (error, response, body) {
      if(error){
        console.log('error:', error); // Print the error if one occurred
      } else {
        $ = cheerio.load(body);
        var ds = $(body).find('.noidung');
        res.render("index", {body:ds})
      }

    });

});
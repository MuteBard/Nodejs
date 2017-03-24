
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
    $ = cheerio.load('<h2 class = "title">Hello world</h2>');

//request the file
function saveHtml(callback){
  request('https://news.ycombinator.com', function (err, response, html) {
    if (err) {
      return callback(err);
    }
    //use cheerio to parse the file
  });
}

saveHtml(function(err){
  if (err){
    console.log(err.message);
  }
  console.log("Done.")
})

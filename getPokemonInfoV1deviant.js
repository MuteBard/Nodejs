var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


var url = 'http://bulbapedia.bulbagarden.net/wiki/Metagross'

//request the file
function saveHtml(callback){


  request(url, function (err, response, html) {
    if (err) {
      return callback(err);
    }
    $ = cheerio.load(html);

    console.log(getTypes());
    console.log(getImages());

    function getImages(){
      var dictionary = $('a[href*="/wiki/File:"]')
      var imageLink = dictionary[0]['attribs']['href']
      return imageLink;
    }
    function getTypes(){
      var types = []
      var dictionary = $('a[href*="(type)"]')
      types.push(dictionary[0]['attribs']['title'].split(" ")[0])
      if (dictionary[1]['attribs']['title'].split(" ")[0] != "Unknown"){
        types.push(dictionary[1]['attribs']['title'].split(" ")[0])
      }
      return types;
    }
  });
}

saveHtml(function(err){
  if (err){
    console.log(err.message);
  }
  console.log("Done.")
})

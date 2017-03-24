var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


var url = 'http://www.serebii.net/pokedex-sm/056.shtml'

//request the file
function saveHtml(callback){
  //request demands url as a parameter a function, where it will be supplied
  //a potential err, a response and the html for its parameters for future
  //use
  request(url, function (err, response, html) {
    if (err) {
      return callback(err);
    }
    //use cheerio to parse the html that was passed in by the function
    // http://dillonbuchanan.com/programming/html-scraping-in-nodejs-with-cheerio/
    $ = cheerio.load(html);

    /*find every <a> element whose href attribute value contains the substring "pokedex-sm"
    has a number that is a key within a large dictionary and assign it to the variable.*/
    var dictionary_of_numbers = $('a[href*="pokedex-sm"]')

    //What I do is use Object.keys() to return a list of all the keys and then get the length of that

    var types =['bug',
                'dark',
                'dragon',
                'electric',
                'fairy',
                'fighting'];

    findTypes(3)
    findTypes(4)
    function findTypes(num){
      num = num.toString();

      /*key 19 has the substring "pokedex-sm" as well as the type right after it
      in its path name : /pokedex-sm/steel.
      Within this key is pure hell*/
      var dictionary_of_hell = dictionary_of_numbers[num]

      //if a pokemon has no second type, this code can backfire as this assignment
      //it will not exist if the key for the second type does not extis
       try{
        /*within this key, which is also a dictionary, we will access an object via the key 'attribs' that contains
        an object that contains path /pokedex-sm/steel.shtml */
        var object_link = dictionary_of_hell['attribs']

       }catch(e){
          console.log("---")
       }

      /*we then wanna access this object's contents by accessing its key, 'href' in order to
      gain access to its link */
      var linkString = object_link['href']

      /*with access to the link as a string, we do a series of splits to wittle it down
      to its type.*/
      var type  = (linkString.split("/")[2]).split(".")[0]
      console.log(type)
      //--------//
      }
  });
}

saveHtml(function(err){
  if (err){
    console.log(err.message);
  }
  console.log("Done.")
})

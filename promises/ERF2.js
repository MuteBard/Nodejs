var fs = require('fs-promise');
var request = require('request-promise')

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];
/*
#1 what happens here is that, you first start out with an array of urls and we are
about to map them. Map is used when you want to transform a series of contents
all at once.

#2 map provides the function within the parameter one content of the array at a time. This
allows the content within the parameter to be within scope of anything that is within the
function. The body of this function, is also where the element of the array gets transformed.
this is where the core change takes place.

#3 request.get() goes the the site of where the url in its parameter states and extracts the
html from the website. this result is then returned to replace the old element in array urls
this is then done for the rest of the links until there is none left
*/

var htmlPromises = urls.map(function(url){
  return request.get(url)
});

/*
#1 all the request.get(urls) are promises, an array of promises


** ENTER Promise.all()**

The Promise.all() method returns a single Promise that resolves when all of the
promises in the interable argument (in this case, an array of html sources) have
resolved, or rejects. Promise.all() is immediately rejected if any of the elements
are rejected

So, the moment shit goes wrong, it it returns a reject, not continuing to
evaluate later promises
*/
// Promise.all(htmlPromises)
//                         .then(function(htmls){
//                           //idx is a feature of map that allows access to the index
//                           var writeFilePromises = htmls.map(function(html, idx){
//                             return fs.writeFile((idx+1)+ '.html', html);
//                         })
//                           return Promise.all(writeFilePromises)
//                         })
//                         .then(function(){
//                           console.log('worked.');
//                         })
//                         .catch(function(err){
//                           console.log(err.message);
//                         });

//We will now try to change it and (E)xtract it to be a (R)eusable (F)unction


function downloadAllUrls(){
  return Promise.all(htmlPromises)
                          .then(function(htmls){
                            var writeFilePromises = htmls.map(function(html, idx){
                              return fs.writeFile((idx+1)+ '.html', html);
                          })
                            return Promise.all(writeFilePromises)
                          });
}
var promise = downloadAllUrls()
           promise
                  .then(function(){
                    console.log('worked.');
                  })
                  .catch(function(err){
                    console.log(err.message);
                  });

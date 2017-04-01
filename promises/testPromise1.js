var request = require('request-promise')
var fs = require('fs-promise')

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';

// //--------//
// request.get(url)
//        .then(function(html){
//          return fs.writeFile(filename, html);
//        })
// //--------//
//        .then(function(){
//          console.log('Worked');
//        })
//        .catch(function(err){
//          console.log(err.message);
//        });

 /*
               |
               |
             \ | /
               V
 */

// 1# Lets put the bounded area in a function as the first step
//this function will be called saveWebPage which takes in a url and
//filename as its parameter

// function saveWebPage(url, filename){
//   //--------//
//   // 2# return the promise
//   //--------//
//   request.get(url)
//     .then(function(html){
//       return fs.writeFile(filename, html);
//     });
// }
/*
              |
              |
            \ | /
              V
*/
function saveWebPage(url, filename){
  //request.get(url) is a returned promise that provides the result of what
  //it has done with its parameter, url
  return request.get(url)
                .then(function(html){
                  return fs.writeFile(filename, html);
    }); // the ; should be placed when you are ending a chain of things within scope
}
/*
              |
              |
            \ | /
              V
*/

// now replace the first thing with an explict promise
saveWebPage(url,filename)
                        .then(function()){
                          console.log('Worked'):
                        })
                        .catch(function(err){
                          console.log(err.message)
                        })

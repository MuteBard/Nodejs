//http://openmymind.net/2012/2/3/Node-Require-and-Exports/

//require is used to load in a module. and it takes in request-promise module
//as its parameter to be it module to load. The return value of require is then
//assigned to request. The module taken in allows request alias to be used for promises
//as a opposed to Continuation Passing Style (CPS) programming
var request = require('request-promise');

//the exact same as above is done to alias fs
var fs = require('fs-promise');

//create an alias calles url that assigned to a hyper text transfer protocol (Http)
//with a Secure Socket Layer (SSL) link that is turned into a string.
//careful for bad links
var url = 'https://css-tricks.com/';

//create a string that has a html extension that will soon be used for storing
//actual html. As right now, filename is just a string and is not used yet to store
//html data
var filename = 'css-tricks.html'

//The promises start out with request() which demands a url as its parameter. this fucntion
//statement is returned as promise.
/*
var promise = request.get(url)
promise
*
//The then, then catches the promise, hoping that the
//value wrapped in the promise is a string of a url. if so, then the promise of a file
//with is file name added in with contents containing html code is returned. function(html)
//manages to gain access to the html as a result of inner workings of request. a link entered
//within request allows access to the url of the page, whose scope seems to be within range such that
//function(html) is able to retrieve it
/*
              .then(function(html){
*/
//writeFile takes in the fileName and html to create the file
/*
                return fs.writeFile(filename,html);
            })
*/
//once this then recieves the promise of a writen file has been created, it then executes its
//statements. (Given that there was no failure within the previous promise)
/*
            .then(function(){
              console.log('Success');
            })
*/
//catches all errors within all possible promises. If any of the promises were to fail. they would
//skip the rest of the then statements and then beeline straight to this statement.
/*              .catch(function(err){
              console.log('Something went wrong');
              console.log(err.message)
            });
*/

//We will now try to change it and (E)xtract it to be a (R)eusable (F)unction


//#1 wrap the first promise and the first then in a function, isoloating them
//#2 add a ; to the end of the closing }) right below the return statement
//#3 remember that you are within a function and that now you need to return
//the promise. To do that, add a return statement right before the request(url)
//remember that the nested return statment, returns a promise and that promise
//can only be executed if it awaits the promise of request(url). Now, the promise returned
//by function saveWebPage(url) (due to returning its promise in the form of return(url))
//can have then and catch statments dependant on it because it is a fully functional promise

function saveWebPage(url){
  return request(url)
            .then(function(html){
              return fs.writeFile(filename,html);
            });
}
saveWebPage(url)
            .then(function(){
              console.log('Success');
            })
           .catch(function(err){
              console.log(err.message)
            });

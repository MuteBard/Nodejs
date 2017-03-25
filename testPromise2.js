

// var Promise = require('bluebird');

//What does it mean to promisify something?
//Ill one up you question with anothor question:
/*
What to do when you have a library in Node.js CPS, but you want it
in promise style?
like fs promise vs fs
     request promise vs request
     prompt promise vs prompt
*/



fs = require('fs-promise')
//is equivalent to

//this is what we call Promisify
//we are replacing the behavoir of Node.js Promises with what BlueBird has
//in interpretation for promises

//a feature of the promise npm such anything that uses bluebird, in this case,
//readfile makes use of bluebird and this line of code allows it to access even
//more features of bluebird
require('any-promise/register/bluebird')
var Promise = require('bluebird');
fs = require('fs')
//some things are not normally promises like fs-promise or request-promise
var readfile = Promise.promisify(fs.readFile);


readFile('my-file.txt')
                      .then(function(buffer){
                        console.log("i have file uwu")

                      });

//if you want to promisify all the CPS functions that are in a module
//you can use this line:
var fsp = Promise.promisifyAll(fs)
//but every function that is used, requires Async in its name
fsp.readFileAsync('my-file.txt')
                                .then(function(buffer){
                                  console.log("uwu")
                                })

//unrelated, this is how you access results from previous steps, or if you
//need to pass in more than one things

fs.readFile('file-1.txt')
                         .then(function(buffer1){
                           return fs.readFile('file-2')
                         })
                         .then(function(buffer2)){
                           console.log("uwu")
                         }
//buffer 2 only contains information pertaing to the results of this line
// fs.readFile('file-2') but has no information regarding the value of buffer

//information can be passed in as an array

fs.readFile('file-1.txt')
                         .then(function(buffer1){
                           return [buffer1, fs.readFile('file-2.txt')];
                         })
                         .spread(function(buffer1, buffer2){
                           console.log(buffer1, buffer2)
                         }

//Set up is required for fs-promise to use bluebird as its preferred promise
//implementation.

require('any-promise/regiser/bluebird')
//this allows you to use spread

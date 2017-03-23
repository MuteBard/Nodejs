var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

var async = require('async')
var fs = require('fs')

//CALL + HOLLYWOOD (function(err))
async.each(filenames, transform, function(err){
  if(err){
    console.log(err.message)
    return;
  }
  console.log("it worked")
})


//INTERVIEE version 1
// function transform(item, callback){
//   fs.writeFile(item, 'Hello, world', function(err) {
//     if (err) {
//       callback(err);
//       return;
//     }
//     callback(null);
//   });
// }

//INTERVIEE version 2
// function transform(item, callback){
//   fs.writeFile(item, 'Hello, world', function(err) {
//       callback(err);
//   });
// }

//INTERVIEE version 3
function transform(item, callback){
  fs.writeFile(item, 'Hello, world', callback)
}

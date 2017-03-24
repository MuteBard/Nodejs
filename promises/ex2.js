var promise = require('fs-promise');
var filename = 'file1.txt';
var outputFilename = 'input.txt';

promise.readFile(filename)
       .then(function(buffer){
         var content = buffer.toString();
         promise.writeFile(outputFilename, content.toUpperCase())
       })
       .then(function(){
         console.log('it worked');
       })
       .catch(function(err){
         console.log('Something went wrong.');
         console.log('Because: ', err.message);
       });

//
// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//   var content = buffer.toString();
//   fs.writeFile(outputFilename, content.toUpperCase(), function(err) {
//     if (err) {
//       console.log('Something went wrong.');
//       console.log('Because: ', err.message);
//       return;
//     }
//   });
// });

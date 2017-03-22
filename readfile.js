var readline  = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter file name: ', function(name){

  var fs = require('fs')
  fs.readFile(name, function(err,buffer){

    if (err){
      console.log(err.message);
      return;
    }
    var contents = buffer.toString();
    contents = contents.toUpperCase()
    console.log(contents);
  });

  rl.close();
});

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//prompt the user for the file name store it
rl.question('Enter inputfile name: ', function(name){

  // create a filesystem object
  var fs = require('fs')
  //using the filesystem's method readFile, take the fileName and access it
  //creating a buffer to be interpreted and an err should the file not exist
  fs.readFile(name, function(err,buffer){

    //if the file does not exist, print the err message associated with this particulat error
    if (err){
      console.log(err.message);
      //return so that the rest of the code is skipped
      return;
    }
    //if the file does exist, interpret it as a string and uppercase the contents
    var contentsOld = buffer.toString();
    var contentsNew = contentsOld.toUpperCase();

    //stop promting the user for more input
    console.log("QUESTION2 ready");

    //promt the user for another question, demanding the output file to write the results to
    rl.question('Enter outputfile name: ', function(name2){
      console.log("QUESTION2 ENTER");
        //close the first question immediately
        rl.close();

      //using filesystem method writefile, take the name of the name of the output file and store the contents into that file
      //should the file not exist, output the error message
      fs.writeFile(name2,contentsNew,function(err){
        console.log("WRITEFILE ENTER")
        if (err){
          console.log(err.message);
          return;
        }
        console.log('Saved contents to'+name2)
      });
      //stop promting the user for more input
      rl.close();
    });
  });
});

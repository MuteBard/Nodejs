var readline = require('readline');
var rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question("Enter a domain name: ", function(host){

  var dns = require('dns');
  dns.lookup(host, function(err,ip){
    console.log('IP address is:', ip);
  });

  rl.close();
});







//resource page
// var request = require('request');
// var url = 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi194_W1ufSAhXI4CYKHbmRBtcQPAgD'
// request.get(url, function(err, resp, html){
//   if(err){
//     console.log(err.message);
//     return;
//   }
//   console.log(resp)
// });

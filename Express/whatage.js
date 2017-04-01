var express = require('express');
var app = express();

// Query Parameters: Tell the year you were born
// Adding to the same program, display the year you were born when you report your age in a query parameter.
// For example, when you go to the URL:
// year?age=32 it will display You were born in 1985..

app.get('/question', function(req, res){
  var yearborn = (2017 - Number(req.query.age)).toString();
  res.send('Hello you were born in'+yearborn+'!');
});

app.listen(3000, function(){
  console.log('example app listening on port 3000!')
});

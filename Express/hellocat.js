var express = require('express');
var app = express();


//within the url, be sure to type localhost3000/cat/<response>
app.get('/cat/:name', function(req, res){
  var name = req.params.name;
  res.send(name);
});

app.listen(3000, function(){
  console.log('example app listening on port 3000!')
});

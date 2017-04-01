var express = require('express');
var app = express();

app.set('view engine', 'hbs');

app.get('/question', function(req, res){
  var yearborn = (2017 - Number(req.query.age)).toString();
  res.render('hello.hbs', {
    title: 'Hello ',
    age: yearborn
  });
});
app.listen(3000, function(){
  console.log('example app listening on port 3000!')
});

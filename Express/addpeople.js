var pgp = require('pg-promise')();

var db = pgp({
  host: '35.163.218.12',
  port: 5432,
  database: 'music_db',
  user: 'postgres',
  password: 'meta-114058'
});

//what does many do:
//what does none do:
//what does one do:
//what does result do:

db.none("insert into people values (5000,'Carl')")

db.any("select * from people")
  .then(function(result){
    result.forEach(function(x){
      console.log(x.name);
    })
    pgp.end();
  })
  .catch(function(err) {
    console.log(err.message);
  });

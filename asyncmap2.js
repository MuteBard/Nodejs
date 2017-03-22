var async = require('async');
var fs = require('fs');
var gm = require('gm');
var dir = '../Day32'

fs.readdir(dir,function(err,data){
  if(err){
    console.log(err.message);
    return;
  }
  console.log(data);

  async.each(data, transform, function(err){

    if (err) {
      console.log(err.message);
      return;
    }
    console.log('It worked.');

  });

  function transform(item, callback){

    CreateThumbnail(item, 'small'+item, function(err){
      if (err){
        console.log(err.message);
        return;
      }
      console.log('File Found')
    })

    function CreateThumbnail(filename, thumbnailFilename, callback){

        fs.writeFile(filename, data, function(err) {
          if (err) {
            callback(err);
            return;
          }

          gm(filename).resize(240, 240).write(thumbnailFilename, function(err) {
            if (err) {
              console.log('IM BROKEN')
              callback(err);
              return;
            }
            callback(null);
          });
        });
      }
    }
});

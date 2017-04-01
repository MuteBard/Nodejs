var async = require('async');
var fs = require('fs');
var gm = require('gm');
var dir = 'images'

fs.readdir(dir,function(err,data){
  if(err){
    console.log(err.message);
    return;
  }
  console.log(data);

  async.map(data, transform, function(err){

    if (err) {
      console.log(err.message);
      return;
    }
    console.log('It worked.');

  });

  function transform(item, callback){

    CreateThumbnail("images/"+item, 'images/small'+item, function(err){
      if (err){
        console.log(err.message);
        return;
      }
      console.log('File Found')
    })

    function CreateThumbnail(filename, thumbnailFilename, callback){
      gm(filename).resize(240, 240).write(thumbnailFilename, function(err) {
        if (err) {
          console.log('IM BROKEN')
          callback(err);
          return;
        }
        callback(null);
      });
    }
  }
});


  function transform(item, callback){
    CreateThumbnail("images/"+item, 'images/small'+item, function(err){
      if (err){
        console.log(err.message);
        return;
      }
      console.log('File Found')
    })

    function CreateThumbnail(filename, thumbnailFilename, callback){
      gm(filename).resize(240, 240).write(thumbnailFilename, callback);
    }
  }
});

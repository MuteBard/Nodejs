var fs = require('fs');
var gm = require('gm');
var request = require('request');

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';
var requestOptions = {
  url: url,
  encoding: null
};
//INTERVIEE
function downloadAndCreateThumbnail(imageUrl, filename, thumbnailFilename, callback){
  request(requestOptions, function(err, response, data){
    if (err) {
      callback(err);
      return;
    }
    callback(null);

    fs.writeFile(filename, data, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
      gm(filename)
        .resize(240, 240)
        .write(thumbnailFilename, function(err) {
          if (err) {
            callback(err);
            return;
          }
          callback(null);
        });
    });
  });
}
//THE CALL + HOLLYWOOD
downloadAndCreateThumbnail(url, filename, thumbnailFilename, function(err){
  if (err){
    console.log(err.message);
    return;
  }
  console.log('It worked')
})

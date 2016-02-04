var fs         = require('fs'),
    path       = require('path'),
    browserify = require('browserify');
    moment     = require('moment');

var builder    = browserify('mithril.js/src/index.js', {
                    debug: true
                  });

builder.bundle(function(err, out) {
  var outpath = path.join(__dirname, '../', 'dist', 'bundle.js');
  fs.writeFileSync(outpath, out);
  console.log('rebundled -- '+ moment().format('h:mm:ss a'));
});

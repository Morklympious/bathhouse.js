var fs         = require('fs'),
    path       = require('path'),
    browserify = require('browserify'),
    moment     = require('moment');

var builder    = browserify('src/index.js', {
                    debug: true
                  });

builder.plugin("modular-css", {
    css   : "dist/css/site.css",
    after : [
        require("postcss-import")
    ]
});

builder.bundle(function(err, out) {
  if(err) console.log(err);
  var outpath = path.join(__dirname, '../', 'dist', 'bundle.js');
  fs.writeFileSync(outpath, out);
  console.log('rebundled -- '+ moment().format('h:mm:ss a'));
});

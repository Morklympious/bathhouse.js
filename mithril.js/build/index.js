var fs = require('fs');
var browserify = require('browserify');
var builder = browserify('mithril.js/src/index.js', {

})

builder.plugin('watchify');
builder.plugin("modular-css", {
    css   : "mithril.js/dist/css/site.css",
    after : [
        require("postcss-import")
    ]
});

function bundle() {
  builder.bundle(function(err, out) {
    if(err) console.error(err.toString());
    fs.writeFileSync("mithril.js/dist/bundle.js", out);

    console.log('rebundled scripts at ' + new Date().toString())
  });
}

builder.on('update', bundle);

bundle();

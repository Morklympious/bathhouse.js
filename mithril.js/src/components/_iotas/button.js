var m = require('mithril');

function button(opts) {
  return m('button', opts.attributes, opts.content)
}

module.exports = button;

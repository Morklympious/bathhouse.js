var m = require('mithril'),
    css = require('./style.css');

function controller(opts) {
   var ctrl = this;

   ctrl.virtues = opts.virtues
   ctrl.active  = opts.active;
}

function view(ctrl) {
  return m('div', [
    m('h1', {class: css['header']}, 'Description'),
    m('div', ctrl.virtues[ctrl.active()]['description'])
  ])
}

module.exports = {
  controller: controller,
  view: view
}

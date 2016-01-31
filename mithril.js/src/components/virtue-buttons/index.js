var m =     require('mithril');
var css =   require('./style.css');
var parser = require('../../vendor/js/parse-form.js');
// Data
var data =  require('../../external/dummy-data/virtues.js');

// Components
var form =  require('../virtue-form');

function controller(opts) {
  var ctrl = this;

  ctrl.virtues = opts.virtues;
  ctrl.active = opts.active;
  ctrl.adding = opts.adding

}

function view(ctrl, opts) {

  // Controller properties
  var virtues = ctrl.virtues,
      active = ctrl.active();

  return m('div', [
      m('div', {class: css['grid-container']}, [

          ctrl.virtues.map(function(virtue, idx){
            return m('button', {
                class: css[active === idx ? 'active' : 'btn'],
                onclick: ctrl.active.bind(null, idx)
              }, virtue.name);
          }),

          m('button', {
            class: css['add-button'],
            onclick: ctrl.adding.bind(null, !ctrl.adding())
          }, 'New virtue')

      ]),
    ]);
}


module.exports = {
  controller: controller,
  view: view
}

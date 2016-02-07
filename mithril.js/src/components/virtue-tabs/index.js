var m =     require('mithril'),
    css =   require('./style.css');

// Data
var data =  require('../../external/dummy-data/virtues.js');

// Components
var form =  require('../form');

function controller() {
  var ctrl = this;

  ctrl.virtues = data;
  ctrl.active = m.prop(0);
  ctrl.adding = m.prop(false);

  ctrl.addVirtue = function(item) {
    ctrl.virtues.push(item)
  }

}

function view(ctrl) {

  // Controller properties
  var virtues = ctrl.virtues,
      active = ctrl.active();

  // Conditional Components
  var VirtueForm = ctrl.adding() ? m(form, {add: ctrl.addVirtue}) : null;

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
      VirtueForm,
      m('h1', {class: css['header']}, 'Description'),
      m('div', virtues[active]['description'])
    ]);
}


module.exports = {
  controller: controller,
  view: view
}

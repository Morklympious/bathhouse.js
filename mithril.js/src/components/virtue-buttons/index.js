var m      = require('mithril'),
    css    = require('./style.css');

function controller(opts) {
  var ctrl = this;

  ctrl.virtues = opts.virtues;
  ctrl.active  = opts.active;
  ctrl.adding  = opts.adding

}

function view(ctrl) {

  var active = ctrl.active();

  return m('div', [
      m('div', {class: css['grid-container']}, [

          ctrl.virtues.map(function(virtue, idx){
            return m('div', {class: css['btn-container'] }, [
              m('button', {
                  class: css[active === idx ? 'active' : 'btn'],
                  onclick: ctrl.active.bind(null, idx)
                }, virtue.name)
            ]);
          }),
          m('div', {class: css['btn-container'] }, [
            m('button', {
              class: css[ctrl.adding() ? 'cancel-button' : 'add-button'],
              onclick: ctrl.adding.bind(null, !ctrl.adding())
            }, ctrl.adding() ? 'Close Form' : 'Add New Virtue')
          ])


      ])
    ]);
}


module.exports = {
  controller: controller,
  view: view
}

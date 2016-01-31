var m = require('mithril');
var css = require('./style.css');
var binds = require('../_helpers').binds;


function controller(opts) {
  var ctrl = this;

  ctrl.virtues = opts.virtues;

  ctrl.virtue = {
    name: m.prop(''),
    description: m.prop('')
  };

  ctrl.add = function() {

    console.log('ay', {name: ctrl.virtue.name(), description: ctrl.virtue.description()});
    opts.add({name: ctrl.virtue.name(), description: ctrl.virtue.description()});
    ctrl.clear();
  };

  ctrl.clear = function () {
    for (var key in ctrl.virtue) {
      if(ctrl.virtue.hasOwnProperty(key))
        ctrl.virtue[key]('');
    }
  }

}

function view(ctrl, attrs) {
  return m('div', {oninput: binds(ctrl.virtue) }, [

      m('h2', {class: css['header']}, 'Add new virtue'),

      m('form', {id: 'virtue-form', class: css['form-container']}, [
        m('div', {class: css['form-control-group']}, [
          m('label', {for: 'name', class: css['label']}, 'Virtue name: '),
          m('input', {name: 'name', type: 'text', class: css['input'], value: ctrl.virtue.name()})
        ]),

        m('div', {class: css['form-control-group']}, [
          m('label', {for: 'description', class: css['label']}, 'Description'),
          m('textarea', {name: 'description', class: css['input'], value: ctrl.virtue.description()})
        ]),

        m('div', {class: css['form-controls']}, [

          m('button', {
            class: css['btn-primary'],
            type: 'button',
            onclick: ctrl.add
          }, 'Submit'),

          m('button', {
            class: css['btn'],
            type: 'button',
            onclick: ctrl.clear
          }, 'Clear')

        ]),
      ])
  ]);

}

  module.exports = {
    controller: controller,
    view: view
  }

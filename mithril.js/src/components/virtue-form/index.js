var m = require('mithril');
var css = require('./style.css');


function controller(attrs) {
  var ctrl = this;

  ctrl.virtue = {
    name: m.prop(''),
    description: m.prop('')
  };

  ctrl.clear = function() {
    for (var key in ctrl.virtue) {
      ctrl.virtue[key]('');
    }
  }

  ctrl.add = function() {
    attrs.add({name: ctrl.virtue.name(), description: ctrl.virtue.description()})
    ctrl.clear();
  }
}

function view(ctrl, attrs) {

  return (
    m('div', {}, [
      m('h2', {class: css['header']}, 'Add new virtue'),
      m('form', {id: 'virtue-form', class: css['form-container']}, [
        m('div', {class: css['form-control-group']}, [
          m('label', {for: 'virtue', class: css['label']}, 'Virtue name: '),
          m('input', {oninput: m.withAttr("value", ctrl.virtue.name), name: 'virtue', type: 'text', class: css['input'], value: ctrl.virtue.name()})
        ]),
        m('div', {class: css['form-control-group']}, [
          m('label', {for: 'description', class: css['label']}, 'Description'),
          m('textarea', {oninput: m.withAttr("value", ctrl.virtue.description), name: 'description', class: css['input'], value: ctrl.virtue.description()})
        ]),
        m('div', {class: css['form-controls']}, [
          m('button', {
            class: 'pure-button pure-button-primary',
            type: 'button',
            onclick: ctrl.add
          }, 'Submit'),
          m('button', {
            class: 'pure-button pure-button-danger',
            type: 'button',
            onclick: ctrl.clear
          }, 'Clear')
        ]),
      ])
  ]));

}

  module.exports = {
    controller: controller,
    view: view
  }

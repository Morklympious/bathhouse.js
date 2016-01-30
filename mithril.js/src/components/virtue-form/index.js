var m = require('mithril');
var css = require('./style.css');


function controller(attrs) {
  var ctrl = this;

  ctrl.add = attrs.add;
}

function view(ctrl, attrs) {

  return (
    m('div', {}, [
      m('h2', {class: css['header']}, 'Add new virtue'),
      m('form', {id: 'virtue-form', class: css['form-container']}, [
        m('div', {class: css['form-control-group']}, [
          m('label', {for: 'virtue', class: css['label']}, 'Virtue name: '),
          m('input', {name: 'virtue', type: 'text', class: css['input']})
        ]),
        m('div', {class: css['form-control-group']}, [
          m('label', {for: 'description', class: css['label']}, 'Description'),
          m('textarea', {name: 'description', class: css['input']})
        ]),
        m('div', {class: css['form-controls']}, [
          m('button', {
            class: 'pure-button pure-button-primary',
            type: 'button',
            onclick: ctrl.add
          }, 'Submit'),
          m('button', {
            class: 'pure-button pure-button-danger',
            type: 'button'
          }, 'Clear')
        ]),
      ])
  ]));

}

  module.exports = {
    controller: controller,
    view: view
  }

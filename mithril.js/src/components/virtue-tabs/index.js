var m =     require('mithril');
var css =   require('./style.css');
var data =  require('../../external/dummy-data/virtues.js')
var form = require('../virtue-form');

function controller() {
  var ctrl = {

    virtues: data,
    active: 0,
    adding: m.prop(false),

    onClickTabs: function(e) {
      var idx = e.target.getAttribute('data-index');
      if(idx) {
        ctrl.active = +idx;
      }
    }

  }
  return ctrl;
}

function view(ctrl) {

  var virtues = ctrl.virtues;

  return m('div', [
    m('div', {
        onclick: ctrl.onClickTabs,
        class:'pure-g'
      }, [

        virtues.map(function(virtue, idx){
          var btn = ctrl.active === idx ? css.active : css.btn;
          return m('button', {
                      class: btn,
                      'data-index': idx
                 }, virtue.name);
        }),

        m('button', {
          class: css.addbtn,
          onclick: ctrl.adding(!ctrl.adding())
        }, 'New virtue')

      ]),

    ctrl.adding ? m.component(form) : '',

    m('h1', {class: css.header}, "Description"),
    m('div', ctrl.virtues[ctrl.active].description),
  ]);
}


module.exports = {
  controller: controller,
  view: view
}

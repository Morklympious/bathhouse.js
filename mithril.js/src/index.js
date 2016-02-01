var m = require('mithril');
var data = require('./external/dummy-data/virtues.js');

var VirtueButtons = require('./components/virtue-buttons');
var VirtueDescription = require('./components/virtue-description');
var VirtueForm = require('./components/virtue-form');

// Require for bundling
require('./global.css');


var application = {
  controller: function(opts) {
    var ctrl = this;

    ctrl.virtues = data.virtues;
    ctrl.active = m.prop(0);
    ctrl.adding = m.prop(false);
    ctrl.add = function(obj) {
      console.log('we add now', obj)
      ctrl.virtues.push(obj);
      console.log('after adding', ctrl.virtues);
    };
  },

  view: function(ctrl) {
    return m('div', [
      m('h1', {class: 'header-primary'},
       'Benjamin Franklin\'s Thirteen Virtues'),
      m(VirtueButtons, {
        virtues: ctrl.virtues,
        active: ctrl.active,
        adding: ctrl.adding
      }),
      m(VirtueDescription, {
        virtues: ctrl.virtues,
        active: ctrl.active
      }),
      m(VirtueForm, {
        add: ctrl.add
      })
    ]);
  }
}

m.mount(document.getElementById('test-mount'), application);

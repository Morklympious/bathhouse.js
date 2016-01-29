var m = require('mithril');
        require('./global.css');
var application = {
  controller: function() {

  },

  view: function() {
    return m('div', [
      m('h1', {class: 'header-primary'},
       'Benjamin Franklin\'s Thirteen Virtues'),
      m.component(require('./components/virtue-tabs'))
    ]);
  }
}

m.mount(document.getElementById('test-mount'), application);

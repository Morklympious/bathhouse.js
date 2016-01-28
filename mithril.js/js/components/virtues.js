window.mComponents.virtues = window.mComponents.virtues = (function(){

  var css = {
    btn: {
      group: 'button-group',
      base: 'js virtue custom-button pure-button',
      add: 'js add pure-button icon-plus',
      active: 'js virtue custom-button pure-button pure-button-active'
    }

  }

  var vm = {
    init: function() {
      var self = this;
      self.active = m.prop(0);
      self.adding = m.prop(false);
    }
  };

  function _controller() {
    vm.init();
    this.virtues = window.mData.virtues;
  }

  function _view(ctrl, args) {
    var header = window.mComponents.header;
    var form = window.mComponents.virtueform;
    var active = vm.active;
    var virtues = ctrl.virtues;

    return m('div', {class: css.btn.group}, [
      m('h1', {class: 'header header-primary'}, "Virtues"),
      virtues.map(function(virtue, idx){
        return m('button', {
          class: active() === idx ? css.btn.active : css.btn.base,
          onclick: vm.active.bind(null, idx)
        }, virtue.name);
      }),
      m('button', {
        class: css.btn.add,
        onclick: vm.adding.bind(null, !vm.adding())
      }),

      vm.adding() ? m.component(form) : null,

      m('h1', {class: 'header header-primary'}, "Description"),
      m('div', ctrl.virtues[vm.active()].description),

    ]);
  }

  return {
    controller: _controller,
    view: _view
  }

}());

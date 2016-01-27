window.mComponents.virtues = window.mComponents.virtues = (function(){

  var css = {
    btnGroup: 'button-group',
    btn: 'js virtue custom-button pure-button',
    btnActive: 'js virtue custom-button pure-button pure-button-active'
  }

  var vm = {
    init: function() {
      var self = this;
      self.active = m.prop(0)
    }
  };

  function _controller() {
    vm.init();
    this.virtues = window.mData.virtues;
  }

  function _view(ctrl, args) {
    var header = window.mComponents.header;
    var active = vm.active;
    var virtues = ctrl.virtues;

    return m('div', {class: css.btnGroup}, [

      m.component(header, {content: 'Virtue'}),
      virtues.map(function(virtue, idx){
        return m('button', {
          class: active() === idx ? css.btnActive : css.btn,
          onclick: vm.active.bind(null, idx)
        }, virtue.name);
      }),

      m.component(header, {content: 'Description'}),
      m('div', ctrl.virtues[vm.active()].description)
    ]);
  }

  return {
    controller: _controller,
    view: _view
  }

}());

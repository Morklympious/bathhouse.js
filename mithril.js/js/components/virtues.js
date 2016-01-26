window.mComponents.virtues = window.mComponents.virtues = (function(){
  var css = {
    btnGroup: 'button-group',
    btn: 'js virtue custom-button pure-button',
    btnActive: 'js virtue custom-button pure-button pure-button-active'
  }

  var _vModel = {
    init: function() {
      var self = this;
      self.active = m.prop(0)
    }
  };

  function _controller() {
    _vModel.init();
    this.virtues = window.mModels.virtues;
  }

  function _view(ctrl, args) {
    return m('div', {class: css.btnGroup}, [

      ctrl.virtues.map(function(item, idx){
        return m('button', {
          class: _vModel.active() === idx ? css.btnActive : css.btn,
          onclick: _vModel.active.bind(null, idx)
        }, item.name);
      }),

      m('div', ctrl.virtues[_vModel.active()].description)
    ]);
  }

  return {
    controller: _controller,
    view: _view
  }

}());

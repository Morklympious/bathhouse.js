window.mComponents.header = window.mComponents.header = (function() {

  function _controller() {

  }

  function _view(ctrl, args) {
    return m('h1', {class: 'header header-primary'}, args.content)
  }

  return {
    controller: _controller,
    view: _view
  };

}())

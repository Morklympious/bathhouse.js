m.route(document.getElementById('test-mount'), '/', {
  '/': window.mComponents.virtues
})


window.mComponents.application = window.mComponents.application = (function(){
  function _controller() {

  }

  function _view(ctrl, args) {
    return m('div', {}, [
      m.component(window.mComponents.header, {content: 'Benjamin Franklin\'s Thirteen Virtues'}),
      m.component(window.mComponents.virtues)
    ]);
  }

  return {
    controller: _controller,
    view: _view
  }
}())

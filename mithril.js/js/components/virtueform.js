window.mComponents.virtueform = window.mComponents.virtueform || (function(){
  function _controller() {

  }

  function _view() {
    return m('div', {}, [
      m('h2', {class: 'header'}, 'Add new virtue'),
      m('form', {id: 'new-virtue', class: 'pure-form pure-form-stacked'}, [
        m('div', {class: 'pure-control-group pure-g'}, [
          m('label', {for: 'virtue', class: 'pure-u-1 pure-u-sm-1-4'}, 'Virtue name: '),
          m('input', {name: 'virtue', type: 'text', class: 'pure-u-1 pure-u-sm-3-4'})
        ]),
        m('div', {class: 'pure-control-group pure-g'}, [
          m('label', {for: 'description', class: 'pure-u-1 pure-u-sm-1-4'}, 'Description'),
          m('textarea', {name: 'description', class: 'pure-u-1 pure-u-sm-3-4'})
        ]),
        m('div', {class: 'pure-controls pure-control-group'}, [
          m('button', {class: 'pure-button pure-button-primary', type: 'submit'}, 'Submit'),
          m('button', {class: 'pure-button pure-button-danger', type: 'submit'}, 'Clear')
        ]),
      ])
    ])
  }

  return {
    controller: _controller,
    view: _view
  }
}())

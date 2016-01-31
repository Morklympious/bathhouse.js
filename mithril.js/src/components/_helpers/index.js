//data binding helper function
function binds(data) {
  return {onchange: function(e) {
    data[e.target.name] = e.target.value;
  }};
};

module.exports = {
  binds: binds
}

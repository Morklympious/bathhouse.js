
function binds(data) {
  return {
    onchange: function(e) {
      if (typeof data[e.target.name] === 'function') {
        data[e.target.name](e.target.value);
      } else data[e.target.name] = e.target.value;
    }
  };
};

module.exports = {
  binds: binds
}

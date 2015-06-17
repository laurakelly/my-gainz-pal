var _ = require("underscore");

function minMax(data, property) {
  var getProperty = function (d) { return d[property]};

  return [_.min(data, getProperty), _.max(data, getProperty)].map(getProperty);
}

exports.minMax = minMax;

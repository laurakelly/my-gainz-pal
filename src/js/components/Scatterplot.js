var React = require('react');
var d3 = require('d3');

var Scatterplot = React.createClass({
  render: function() {
    console.log(this.props.data);
    return (<p>{this.props.data}</p>);
  }
});

module.exports = Scatterplot;
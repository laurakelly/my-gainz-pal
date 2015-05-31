var React = require('react');
var $ = require('jquery');
var d3 = require('d3');

var MainSection = React.createClass({
  getInitialState: function () {
    return {data: null}
  },
  componentDidMount: function() {
    $.getJSON('src/test_data/mfp-export-1431415257924.json', function(data) {
      this.setState({'data': data});
    }.bind(this))    
  },
  render: function() {
    console.log(this.state.data);
    return (
      <h1>MainSection</h1>
    )
  }
});

module.exports = MainSection;
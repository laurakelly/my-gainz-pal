var React = require("react");
var $ = require("jquery");
var _ = require("underscore")
var Scatterplot = require("./Scatterplot");

/* Graph defaults */
var margin = {top: 20, right: 20, bottom: 30, left: 40},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var MainSection = React.createClass({
  getInitialState: function () {
    return {data: null}
  },
  componentDidMount: function() {
    $.getJSON("src/test_data/mfp-export-1434505307490.json", function(data) {
      var cleaned = data.filter(function(d) { if (d.weight !== "") return true; });
      this.setState({"data": cleaned});
    }.bind(this)); 
  },
  render: function() {
    return (
      <div className="mainSection">
        <Scatterplot data={this.state.data}
          margin={margin}
          height={height}
          width={width}
          xProperty={"ts"}
          yProperty={"weight"} />
      </div>
    )
  }
});

module.exports = MainSection;
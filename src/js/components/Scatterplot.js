var React = require("react");
var d3 = require("d3");
var _ = require("underscore");
var minMax = require("../utils/graphUtils").minMax;

// TODO set min/max in state so it doesn't have to be recalculated unnecessarily

var Scatterplot = React.createClass({
  componentDidMount: function() {
    d3.select(".scatterplot").append("svg")
        .attr("width", this.props.width + this.props.margin.left + this.props.margin.right)
        .attr("height", this.props.height + this.props.margin.top + this.props.margin.bottom)
      .append("g")
        .attr("transform", "translate(" + this.props.margin.left + "," + this.props.margin.top + ")");
  },
  componentDidUpdate: function() {
    var svg = d3.select(".scatterplot svg g");

    var x = d3.time.scale()
        .range([0, this.props.width])
        .domain(minMax(this.props.data, this.props.xProperty));

    var  y = d3.scale.linear()
        .range([this.props.height, 0])
        .domain(minMax(this.props.data, this.props.yProperty));

    var color = d3.scale.category10();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + this.props.height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", this.props.width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Date");

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("lb");

    // maybe this should be stored somewhere?
    var xProperty = this.props.xProperty,
      yProperty = this.props.yProperty;

    svg.selectAll(".dot")
       .data(this.props.data)
      .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 3.5)
        .attr("cx", function(d){ return x(Number(d[xProperty])); })
        .attr("cy", function(d){ return y(Number(d[yProperty])); })
        .style("fill", "purple");
  },
  render: function() {
    return (<div className="scatterplot"></div>);
  }
});

module.exports = Scatterplot;

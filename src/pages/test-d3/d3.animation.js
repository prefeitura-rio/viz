import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  draw = () => {
    let chartRef = d3.select(this.myRef.current);

    const { width, height, data } = this.props;
    const canvas = chartRef
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background", "#e8cee4")
      .style("opacity", 0.5)
      .style("padding", "10px")
      .style("margin-left", "50px");

    canvas
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 65)
      .attr("y", (d, i) => height - 10 * d)
      .attr("width", 35)
      .attr("height", (d, i) => d * 10)
      .attr("fill", (d, i) => (d >= 20 ? "red" : "green"));
  };

  render() {
    return <div ref={this.myRef}></div>;
  }
}

BarChart.defaultProps = {
  width: 500,
  height: 500,
  data: [2, 15, 22, 9, 30, 20, 22, 45],
};

export default BarChart;

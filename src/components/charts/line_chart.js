import React, { Component } from "react";
import * as d3 from "d3";

// TODO: implement multiple data as input. use a list of lists for that. the current input must also
// be supported. check if the input is a list of lists or a list of objects for differentiating
// between the two.

class LineChart extends Component {
  // Construtor: Chamado antes do componente ser montado.
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  drawGraph = async () => {
    // set the dimensions and margins of the graph
    var margin = this.props.style.margin;
    var width = this.props.style.width - margin.left - margin.right;
    var height = this.props.style.height - margin.top - margin.bottom;

    var svg = d3.select(this.myRef.current).select("svg");
    if (!svg.empty()) {
      svg.remove();
    }

    // append the svg object to the body of the page
    svg = d3
      .select(this.myRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},     ${margin.top})`);

    var data = this.props.data;

    // Add X axis and Y axis
    if (this.props.pinnedScale) {
      var x = d3
        .scaleLinear()
        .range([0, width])
        .domain(
          d3.extent(this.props.data, (d) => {
            return d.x;
          })
        );
      var y = d3
        .scaleLinear()
        .range([height, 0])
        .domain(
          d3.extent(this.props.data, (d) => {
            return d.y;
          })
        );
    } else {
      var x = d3
        .scaleLinear()
        .range([0, width])
        .domain(
          d3.extent(data, (d) => {
            return d.x;
          })
        );
      var y = d3
        .scaleLinear()
        .range([height, 0])
        .domain(
          d3.extent(data, (d) => {
            return d.y;
          })
        );
    }
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));

    // add the Line
    var valueLine = d3
      .line()
      .x((d) => {
        return x(d.x);
      })
      .y((d) => {
        return y(d.y);
      });

    const path = svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", this.props.style.lineColor)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", this.props.style.lineWidth)
      .attr("d", valueLine);

    const pathLength = path.node().getTotalLength();

    const transitionPath = d3.transition().ease(d3.easeSin).duration(2500);

    path
      .attr("stroke-dashoffset", pathLength)
      .attr("stroke-dasharray", pathLength)
      .transition(transitionPath)
      .attr("stroke-dashoffset", 0);
  };
  // Chamado após o componente ser montado.
  componentDidMount() {
    this.drawGraph();
  }
  // Chamado quando o componente for atualizado.
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.drawGraph();
    }
  }
  // Render
  render() {
    return <div ref={this.myRef} id={this.props.id}></div>;
  }
}

LineChart.defaultProps = {
  canvasId: "body",
  data: [],
  id: "line-chart",
  pinnedScale: true,
  style: {
    margin: {
      top: 20,
      right: 20,
      bottom: 50,
      left: 70
    },
    width: 960,
    height: 500,
    lineColor: "steelblue",
    lineWidth: 1.5
  }
};

export default LineChart;

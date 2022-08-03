import React, { Component } from "react";
import * as d3 from "d3";
import plotData from "../data/data.json";
class LineChart extends Component {
  // Construtor: Chamado antes do componente ser montado.
  constructor(props) {
    super(props);
    // We're going to save the data into the state. This ensures that we can handle both multiple
    // data sets and single data sets as input.
    this.state = {
      data: [],
    };

    function convertPlotData(data) {
      var convertedData = [];
      //pandas gives each column the same number of
      //objects, arbitrarily choose one to iterate over
      for (var i in data[Object.keys(data)[0]]) {
        var convertedDatum = {};
        for (var key in data) {
          convertedDatum[key] = data[key][i];
        }
        convertedData.push(convertedDatum);
      }
      return convertedData;
    }
    console.log("convertPlotData", convertPlotData(plotData));
    this.state.data = props.data;
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

    var data = this.state.data;

    // Add X axis and Y axis
    if (this.props.pinnedScale) {
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
    var axisBottom = svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));
    axisBottom.selectAll("line").style("stroke", this.props.style.axisColor);
    axisBottom.selectAll("path").style("stroke", this.props.style.axisColor);
    axisBottom.selectAll("text").style("fill", this.props.style.axisColor);
    axisBottom
      .selectAll("text")
      .style("font-size", this.props.style.axisFontSize);

    var axisLeft = svg.append("g").call(d3.axisLeft(y));
    axisLeft.selectAll("line").style("stroke", this.props.style.axisColor);
    axisLeft.selectAll("path").style("stroke", this.props.style.axisColor);
    axisLeft.selectAll("text").style("fill", this.props.style.axisColor);
    axisLeft
      .selectAll("text")
      .style("font-size", this.props.style.axisFontSize);

    // // add the Line
    var valueLine = d3
      .line()
      .x((d) => {
        return x(d.x);
      })
      .y((d) => {
        return y(d.y);
      });
    // transition
    const path = svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3.5)
      .attr("d", valueLine);

    const pathLength = path.node().getTotalLength();

    const transitionPath = d3
      .transition()
      .ease(d3.easeSin)
      .delay(100)
      .duration(3000);
    path
      .attr("stroke-dashoffset", pathLength)
      .attr("stroke-dasharray", pathLength)
      .transition(transitionPath)
      .attr("stroke-dashoffset", 0);

    // add the Legend
    svg
      .append("circle")
      .attr("cx", 0.2 * width - 10)
      .attr("cy", 0.2 * height - 10)
      .attr("r", 6)
      .attr("fill", "steelblue");
    svg
      .append("text")
      .attr("x", 0.2 * width)
      .attr("y", 0.2 * height)
      .text("Blue Line")
      .style("font-size", "15px")
      .style("font-family", "sans-serif")
      .style("fill", "#000")
      .attr("alignment-baseline", "middle");
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
  data: {},
  id: "line-chart",
  pinnedScale: true,
  style: {
    margin: {
      top: 20,
      right: 20,
      bottom: 50,
      left: 70,
    },
    width: 960,
    height: 500,
    axisColor: "black",
    axisFontSize: "15px",
  },
};

export default LineChart;

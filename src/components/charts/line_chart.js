import React, { Component } from "react";
import * as d3 from "d3";

class LineChart extends Component {
  // Construtor: Chamado antes do componente ser montado.
  constructor(props) {
    super(props);
    this.state = {
      maxIndex: this.props.data.length * this.props.progress,
    };
    this.myRef = React.createRef();
  }

  getMaxIndex = (progress) => {
    return Math.floor(progress * this.props.data.length);
  };

  drawGraph = async () => {
    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 20, bottom: 50, left: 70 };
    var width = 960 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

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

    // Crop data according to progress
    var data = this.props.data.slice(0, this.state.maxIndex);

    // Add X axis and Y axis
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

    svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", valueLine);
  };
  // Chamado após o componente ser montado.
  componentDidMount() {
    this.drawGraph();
  }
  // Chamado quando o componente for atualizado.
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      if (this.getMaxIndex(this.props.progress) !== this.state.maxIndex) {
        this.setState({
          maxIndex: this.getMaxIndex(this.props.progress),
        });
      }
    } else if (prevProps.data !== this.props.data) {
      this.drawGraph();
    } else if (prevState.maxIndex !== this.state.maxIndex) {
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
  progress: 1,
  id: "line-chart",
};

export default LineChart;

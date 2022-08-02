import React, { Component } from "react";
import * as d3 from "d3";

class LineChart extends Component {
  // Construtor: Chamado antes do componente ser montado.
  constructor(props) {
    super(props);
    // We're going to save the data into the state. This ensures that we can handle both multiple
    // data sets and single data sets as input.
    this.state = {
      data: [],
      lineColors: [],
      lineWidths: [],
      delay: [],
      duration: []
    };
    // Now we check if the data is a list of lists or a list of objects.
    if (Array.isArray(props.data[0])) {
      // If this is a list of lists, it means we have multiple data sets.
      // We need to assert that the length of props.data, props.style.lineColor,
      // props.animation.delay, props.animation.duration and props.style.lineWidth are the same.
      if (props.data.length !== props.style.lineColor.length) {
        throw new Error(
          "The length of data, lineColors, lineWidths, delay and duration must be the same."
        );
      } else if (props.data.length !== props.style.lineWidth.length) {
        throw new Error(
          "The length of data, lineColors, lineWidths, delay and duration must be the same."
        );
      } else if (props.data.length !== props.animation.delay.length) {
        throw new Error(
          "The length of data, lineColors, lineWidths, delay and duration must be the same."
        );
      } else if (props.data.length !== props.animation.duration.length) {
        throw new Error(
          "The length of data, lineColors, lineWidths, delay and duration must be the same."
        );
      }
      // We need to save the data into the state.
      this.state.data = props.data;
      // We need to save the line colors into the state.
      this.state.lineColors = props.style.lineColor;
      // We need to save the line widths into the state.
      this.state.lineWidths = props.style.lineWidth;
      // We need to save the delay into the state.
      this.state.delay = props.animation.delay;
      // We need to save the duration into the state.
      this.state.duration = props.animation.duration;
    } else {
      // If this is a list of objects, it means we have a single data set.
      // We need to assert that the length of props.style.lineColor, props.style.lineWidth,
      // props.animation.delay and props.animation.duration are 1
      // (or that they are string, number, number and number).
      if (typeof props.style.lineColor === "string") {
        // If it's a string, we need to save it into the state.
        this.state.lineColors = [props.style.lineColor];
      } else if (props.style.lineColor.length !== 1) {
        throw new Error(
          "The length of lineColor must be 1 or lineColor must be a string"
        );
      } else {
        // If it's an array, we need to save it into the state.
        this.state.lineColors = props.style.lineColor;
      }
      if (typeof props.style.lineWidth === "number") {
        // If it's a number, we need to save it into the state.
        this.state.lineWidths = [props.style.lineWidth];
      } else if (props.style.lineWidth.length !== 1) {
        throw new Error(
          "The length of lineWidth must be 1 or lineWidth must be a number"
        );
      } else {
        // If it's an array, we need to save it into the state.
        this.state.lineWidths = props.style.lineWidth;
      }
      if (typeof props.animation.delay === "number") {
        // If it's a number, we need to save it into the state.
        this.state.delay = [props.animation.delay];
      } else if (props.animation.delay.length !== 1) {
        throw new Error(
          "The length of delay must be 1 or delay must be a number"
        );
      } else {
        // If it's an array, we need to save it into the state.
        this.state.delay = props.animation.delay;
      }
      if (typeof props.animation.duration === "number") {
        // If it's a number, we need to save it into the state.
        this.state.duration = [props.animation.duration];
      } else if (props.animation.duration.length !== 1) {
        throw new Error(
          "The length of duration must be 1 or duration must be a number"
        );
      } else {
        // If it's an array, we need to save it into the state.
        this.state.duration = props.animation.duration;
      }
      this.state.data = [props.data];
    }
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

    var datasets = this.state.data;

    // Iterate over datasets
    for (var i = 0; i < datasets.length; i++) {
      var data = datasets[i];

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
        .attr("stroke", this.state.lineColors[i])
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", this.state.lineWidths[i])
        .attr("d", valueLine);

      const pathLength = path.node().getTotalLength();

      const transitionPath = d3
        .transition()
        .ease(d3.easeSin)
        .delay(this.state.delay[i])
        .duration(this.state.duration[i]);
      path
        .attr("stroke-dashoffset", pathLength)
        .attr("stroke-dasharray", pathLength)
        .transition(transitionPath)
        .attr("stroke-dashoffset", 0);
    }
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
  animation: {
    delay: 0,
    duration: 2000
  },
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

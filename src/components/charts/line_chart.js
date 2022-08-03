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
      // props.animation.delay, props.animation.duration, props.style.lineWidth and
      // props.legend.text are the same.
      if (props.data.length !== props.style.lineColor.length) {
        throw new Error(
          "The length of data, lineColors, lineWidths, delay, duration and text must be the same."
        );
      } else if (props.data.length !== props.style.lineWidth.length) {
        throw new Error(
          "The length of data, lineColors, lineWidths, delay, duration and text must be the same."
        );
      } else if (props.data.length !== props.animation.delay.length) {
        throw new Error(
          "The length of data, lineColors, lineWidths, delay, duration and text must be the same."
        );
      } else if (props.data.length !== props.animation.duration.length) {
        throw new Error(
          "The length of data, lineColors, lineWidths, delay, duration and text must be the same."
        );
      } else if (props.data.length !== props.legend.text.length) {
        throw new Error(
          "The length of data, lineColors, lineWidths, delay, duration and text must be the same."
        );
      }
      // We need to save stuff into the state.
      this.state.data = props.data;
      this.state.lineColors = props.style.lineColor;
      this.state.lineWidths = props.style.lineWidth;
      this.state.delay = props.animation.delay;
      this.state.duration = props.animation.duration;
      this.state.legendText = props.legend.text;
    } else {
      // If this is a list of objects, it means we have a single data set.
      // We need to assert that the length of props.style.lineColor, props.style.lineWidth,
      // props.animation.delay, props.animation.duration and props.legend.text are 1
      // (or that they are string, number, number and number, string).
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
      if (typeof props.legend.text === "string") {
        // If it's a string, we need to save it into the state.
        this.state.legendText = [props.legend.text];
      } else if (props.legend.text.length !== 1) {
        throw new Error(
          "The length of legend.text must be 1 or legend.text must be a string"
        );
      } else {
        // If it's an array, we need to save it into the state.
        this.state.legendText = props.legend.text;
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

      // add the Line
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

      // add the Legend
      svg
        .append(this.props.legend.type)
        .attr("cx", this.props.legend.position.left * width)
        .attr(
          "cy",
          this.props.legend.position.top * height +
            i * this.props.legend.style.verticalOffset
        )
        .attr("r", this.props.legend.style.iconSize)
        .attr("fill", this.state.lineColors[i]);
      svg
        .append("text")
        .attr(
          "x",
          this.props.legend.position.left * width +
            this.props.legend.style.horizontalOffset
        )
        .attr(
          "y",
          this.props.legend.position.top * height +
            i * this.props.legend.style.verticalOffset
        )
        .text(this.state.legendText[i])
        .style("font-size", this.props.legend.style.fontSize)
        .style("font-family", this.props.legend.style.fontFamily)
        .style("fill", this.props.legend.style.fontColor)
        .attr("alignment-baseline", "middle");
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
    lineWidth: 1.5,
    axisColor: "black",
    axisFontSize: "15px"
  },
  legend: {
    style: {
      fontSize: "15px",
      fontFamily: "sans-serif",
      fontColor: "#000",
      verticalOffset: 30,
      horizontalOffset: 20,
      iconSize: 6
    },
    position: {
      top: 0.2,
      left: 0.2
    },
    type: "circle",
    text: ""
  }
};

export default LineChart;

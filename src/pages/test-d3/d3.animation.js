import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    let acessToRef = d3.select(this.myRef.current);
    acessToRef.style("background-color", "green");
  }

  render() {
    return (
      <>
        <div ref={this.myRef}>Testing Ref</div>
      </>
    );
  }
}

export default BarChart;

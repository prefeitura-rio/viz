import React, { useState, useRef, useEffect, Component } from "react";
import * as d3 from "d3";

const Chart = () => {
  const [rectWidth, setRectWidth] = useState(100);

  const svgRef = useRef();

  useEffect(() => {
    setInterval(() => {
      const width = 50 + Math.random() * 200;
      setRectWidth(width);
    }, 1000);
  }, []);

  useEffect(() => {
    if (svgRef.current) {
      d3.select(svgRef.current)
        .select("rect")
        .transition()
        .duration(500)
        .attr("width", rectWidth);
    }
  }, [rectWidth, svgRef]);

  return (
    <svg ref={svgRef} width={300} height={100}>
      <rect x={10} y={10} height={20} />
    </svg>
  );
};

export default Chart;
